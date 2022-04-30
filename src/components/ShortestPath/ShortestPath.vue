<template>
  <div>
    <!-- HEADER -->
    <div>
      <v-sheet
        color="grey"
        rounded
        elevation="0"
        height="100%"
        width="100%"
        class="pl-2 pr-2 pt-2 pb-2"
      >
        <v-row>
          <v-col>
            <v-select
              :items="themes"
              label="Choose Theme"
              v-model="selectedTheme"
              item-text="label"
              item-value="value"
            ></v-select>
            <v-select
              :items="exampleArrays"
              label="Examples"
              v-model="selectedArray"
              item-text="label"
              item-value="value"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="shortestPathActionType"
              :items="[
                'Set Starting Position',
                'Set Destination',
                'Create Wall',
              ]"
              label="Select Action"
            ></v-select>
          </v-col>
          <v-col align-self="center">
            <v-btn text color="secondary" @click="reset()">reset</v-btn>
            <v-btn
              v-if="!loading"
              color="primary"
              @click="
                loading = !loading;
                play();
              "
              >play</v-btn
            >
            <v-progress-circular
              v-if="loading"
              indeterminate
              color="primary"
            ></v-progress-circular>
            <v-btn color="primary" @click="saveArray()">save</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <br />
    <!-- GRID -->
    <v-sheet
      class="grid-container pt-6 pb-6"
      rounded
      outlined
      height="100%"
      width="100%"
    >
      <div
        class="grid-container--row"
        v-for="(row, index) in mapArray.length"
        :key="index"
      >
        <div v-for="(col, idx) in mapArray[0].length" :key="idx">
          <!-- BLOCK COMPONENT -->
          <div
            class="block"
            v-bind:class="getBlockClass(row - 1, col - 1)"
            @click="performShortestPathAction(row - 1, col - 1)"
          >
            <p>{{ mapArray[index][idx] }}</p>
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                
                <v-icon
                  size="18"
                  class="ml-1 block-icon"
                  v-bind:class="{ 'block-icon-dark': $vuetify.theme.dark }"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ getBlockIcon(row - 1, col - 1) }}
                </v-icon>
              </template>
              
              <span
                >{{ getActionMessage() }}, Value:, Pos: {{ row }},
                {{ col }}</span
              >
            </v-tooltip> -->
          </div>
        </div>
      </div>
    </v-sheet>
    <v-snackbar
      text
      v-model="snackbar"
      :color="snackbarSuccess ? 'success' : 'error'"
      right
      class="font-weight-bold"
    >
      <span class="subtitle-1 font-weight-regular mt-3">{{ msg }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbarSuccess ? 'success' : 'error'"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import "./ShortestPath.scss";
import Helpers from "../../utils/helpers";
// import { Solve } from "../../utils/shortest-path.js";
//import Algorithms from "../../utils/algorithms.js";
import { SolveShort } from "../../utils/depth-first-search";

export default {
  name: "Shortest-Path-component",
  data: () => ({
    loading: false,
    rows: 10,
    cols: 10,
    themes: [
      { label: "Basic", value: 0 },
      { label: "Alternative", value: 1 },
      { label: "Clean", value: 2 },
    ],
    selectedTheme: { label: "Basic", value: 0 },
    shortestPathActionType: "Set Starting Position",
    startingPosition: [0, 0],
    endingPosition: [5, 4],
    mapArray: [],
    visitedArray: [],
    selectedArray: {
      label: "The Obvious shortest path.",
      value: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 2, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
    },
    exampleArrays: [
      {
        label: "The Obvious shortest route",
        value: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 2, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        label: "The maze",
        value: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
          [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
          [0, 1, 0, 1, 1, 2, 1, 0, 1, 0],
          [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
    ],
    snackbar: false,
    msg: ``,
    snackbarSuccess: false,
  }),
  methods: {
    play() {
      this.visitedArray = [];
      let startTime = performance.now();
      let res = SolveShort(
        this.mapArray,
        this.startingPosition,
        this.endingPosition
      );
      let endTime = performance.now();
      let arr = res[0];
      if (!arr) {
        this.snackbar = true;
        this.msg = "Either a point must be set or the path is impossible.";
        this.snackbarSuccess = false;
        this.loading = false;
        return;
      }
      arr.forEach((el, i) => {
        setTimeout(() => {
          this.visitedArray.push(el[1]);
        }, i * 50);
      });
      this.loading = false;
      this.snackbar = true;
      this.msg = "Route found. Computed in " + (endTime - startTime) + "ms";
      this.snackbarSuccess = true;
    },
    reset() {
      this.snackbar = false;
      let row = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      let col = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      this.mapArray = Helpers.createShortestPathMap(false, 10, 10, [row, col]);
      this.startingPosition = [0, 0];
      this.endingPosition = [row, col];
      this.visitedArray = [];
      this.randomize(row, col);
    },
    randomize(endRow, endCol) {
      for (let i = 0; i < 60; i++) {
        let row = Math.floor(Math.random() * (9 - 0 + 1) + 0);
        let col = Math.floor(Math.random() * (9 - 0 + 1) + 0);

        if (row !== 0 && col !== 0) {
          if (row !== endRow && col !== endCol) {
            this.mapArray[row][col] = 1;
          }
        }
      }
    },
    validation() {
      if (this.startingPosition == [] || this.endingPosition == []) {
        this.msg = "Must have starting position and ending position.";
        this.snackbar = true;
        this.snackbarSuccess = false;
        return;
      }
    },
    performShortestPathAction(row, col) {
      if (this.shortestPathActionType == "Create Wall") {
        this.setWall(row, col);
      }

      if (this.shortestPathActionType == "Set Starting Position") {
        this.setStartingPosition(row, col);
      }

      if (this.shortestPathActionType == "Set Destination") {
        this.setEndingPosition(row, col);
      }
    },
    setStartingPosition(row, col) {
      this.visitedArray = [];
      this.startingPosition = [row, col];
    },
    //REMEMBER TO RESET 2 IF PRESSED TWICE OR MORE
    setEndingPosition(row, col) {
      this.mapArray[this.endingPosition[0]][this.endingPosition[1]] = 0;
      this.endingPosition = [row, col];
      this.mapArray.push(0);
      this.mapArray[row][col] = 2;
      this.mapArray.pop();
    },
    setWall(row, col) {
      this.mapArray.push(0);
      if (this.mapArray[row][col] == 1) {
        this.mapArray[row][col] = 0;
      } else {
        this.mapArray[row][col] = 1;
      }
      this.mapArray.pop();
    },
    hasVisited(row, col) {
      return this.visitedArray.some((el) => {
        if (el[0] == row && el[1] == col) return true;
      });
    },
    getBlockClass(row, col) {
      //check in array what the value is at row, col
      //0 = freely move
      // if (value == 1) {
      //   return "block-wall";
      // }
      if (this.mapArray[row][col] == 1) {
        return "block-wall";
      }
      if (this.mapArray[row][col] == 2) {
        return "block-destination";
      }
      if (row == this.startingPosition[0] && col == this.startingPosition[1]) {
        return "block-starting-point";
      }

      if (this.hasVisited(row, col)) {
        return "block-visited";
      }
    },
    getBlockIcon(row, col) {
      //check in array what the value is at row, col
      // if (this.mapArray[row][col] == 2) return "mdi-map-marker";
      // if (this.mapArray[row][col] == 3) return "mdi-crosshairs-gps";
      if (this.hasVisited(row, col)) {
        return "mdi-map-marker";
      }
      //start position
      if (row == this.startingPosition[0] && col == this.startingPosition[1]) {
        return "mdi-map-marker";
      }

      //end position
      if (row == this.endingPosition[0] && col == this.endingPosition[1]) {
        return "mdi-crosshairs-gps";
      }

      //wall
      if (this.shortestPathActionType == "Create Wall" && col == 0) {
        return "mdi-cancel";
      }

      return "mdi-map-marker";
    },
    getActionMessage() {
      if (this.shortestPathActionType == "Create Wall") {
        return "Place wall";
      }

      if (this.shortestPathActionType == "Set Starting Position") {
        return "Set Starting Position";
      }

      if (this.shortestPathActionType == "Set Destination") {
        return "Set Destination";
      }
    },
    saveArray() {
      console.log(JSON.stringify(this.mapArray));
    },
  },
  beforeMount() {
    this.mapArray = JSON.parse(JSON.stringify(this.selectedArray.value));
    // this.mapArray = Helpers.createShortestPathMap(
    //   false,
    //   10,
    //   10,
    //   this.endingPosition
    // );
  },
};
</script>
