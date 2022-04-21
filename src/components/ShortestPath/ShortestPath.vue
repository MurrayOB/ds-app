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
            <v-slider
              v-model="mapSize"
              :tick-labels="mapSizeLabels"
              :max="2"
              label="Map Size"
              step="1"
              ticks="always"
              tick-size="4"
            ></v-slider>
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
            <v-btn color="primary" @click="play()">play</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <br />
    <!-- GRID -->
    <v-sheet class="grid-container" rounded outlined height="60vh" width="100%">
      <div
        class="grid-container--row"
        v-for="(row, index) in mapArray"
        :key="index"
      >
        <div v-for="(col, idx) in row" :key="idx">
          <!-- BLOCK COMPONENT -->
          <div
            class="block"
            v-bind:class="getBlockClass(index, idx)"
            @click="performShortestPathAction(index, idx)"
          >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <!-- ICON -->
                <v-icon
                  size="18"
                  class="ml-1 block-icon"
                  v-bind:class="{ 'block-icon-dark': $vuetify.theme.dark }"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ getBlockIcon(col) }}
                </v-icon>
              </template>
              <!-- TOOLTIP -->
              <span>{{ getActionMessage() }}, Value: {{ col }}</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-sheet>
  </div>
</template>
<script>
import "./ShortestPath.scss";
import Helpers from "../../utils/helpers";
import BreadthFirstSearch from "../../utils/shortest-path.js";

export default {
  name: "Shortest-Path-component",
  data: () => ({
    rows: 13,
    cols: 30,
    themes: [
      { label: "Basic", value: 0 },
      { label: "Alternative", value: 1 },
      { label: "Clean", value: 2 },
    ],
    selectedTheme: { label: "Basic", value: 0 },
    mapSizeLabels: ["Small", "Medium", "Large"],
    shortestPathActionType: "Set Starting Position",
    startingPosition: [],
    endingPosition: [],
    mapArray: [],
    visitedArray: [],
  }),
  methods: {
    play() {
      console.log(this.startingPosition);
      console.log(this.endingPosition);
      const bfs = new BreadthFirstSearch(
        this.mapArray,
        this.startingPosition,
        this.endingPosition,
        this.visitedArray
      );
      bfs.bfs();
    },
    reset() {
      location.reload();
    },
    performShortestPathAction(row, col) {
      // if (this.shortestPathActionType == "Create Wall") {
      //   this.setPosition(1, row, col);
      // }

      if (this.shortestPathActionType == "Set Starting Position") {
        this.setStartingPosition(row, col);
      }

      if (this.shortestPathActionType == "Set Destination") {
        this.setEndingPosition(row, col);
      }
    },
    setStartingPosition(row, col) {
      this.startingPosition = [row, col];
    },
    setEndingPosition(row, col) {
      this.endingPosition = [row, col];
    },
    getBlockClass(row, col) {
      //check in array what the value is at row, col
      //0 = freely move
      const hasVisited = this.visitedArray.some((el) => {
        if (el[0] == row && el[1] == col) {
          return true;
        }
        return false;
      });
      if (hasVisited) return "block-visited";
      // if (value == 1) {
      //   return "block-wall";
      // }
      if (row == this.startingPosition[0] && col == this.startingPosition[1]) {
        return "block-starting-point";
      }
      if (row == this.endingPosition[0] && col == this.endingPosition[1]) {
        return "block-destination";
      }
    },
    getBlockIcon(col) {
      //check in array what the value is at row, col
      if (col == 1) return "mdi-cancel";
      if (col == 2) return "mdi-map-marker";
      if (col == 3) return "mdi-crosshairs-gps";

      if (this.shortestPathActionType == "Set Starting Position" && col == 0) {
        return "mdi-map-marker";
      }

      if (this.shortestPathActionType == "Set Destination" && col == 0) {
        return "mdi-crosshairs-gps";
      }

      if (this.shortestPathActionType == "Create Wall" && col == 0) {
        return "mdi-cancel";
      }
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
  },
  beforeMount() {
    this.mapArray = Helpers.createShortestPathMap(this.rows, this.cols);
  },
};
</script>
