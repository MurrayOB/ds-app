<template>
  <div class="mt-2">
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
            <v-slider
              v-model="mapSize"
              :tick-labels="mapSizeLabels"
              :max="2"
              label="Map Size"
              step="1"
              ticks="always"
              tick-size="4"
            ></v-slider>
            <v-select
              v-model="demonstrationType"
              :items="['Shortest Path', 'Search Algorithms', 'Fun Game']"
              label="Select Demonstration"
            ></v-select>
          </v-col>
          <v-col v-if="demonstrationType == 'Shortest Path'">
            <v-select
              v-model="shortestPathActionType"
              :items="[
                'Set Starting Position',
                'Set Destination',
                'Create Wall',
              ]"
              label="Select Action"
            ></v-select>
            <v-select
              :items="themes"
              label="Choose Theme"
              v-model="selectedTheme"
              item-text="label"
              item-value="value"
            ></v-select>
          </v-col>
          <v-col>
            <v-btn text color="secondary" @click="reset()">reset</v-btn>
            <v-btn color="primary" @click="play()">play</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <br />
    <!-- GRID -->
    <!-- SEARCHING ALGORITHMS -->
    <v-sheet
      v-if="demonstrationType == 'Search Algorithms'"
      class="grid-container"
      rounded
      outlined
      height="60vh"
      width="100%"
    >
      <!-- ROWS -->
      <div class="grid-container--row" v-for="row in rows" :key="row">
        <!-- COLUMNS -->
        <div v-for="col in cols" :key="col">
          <div
            class="block"
            v-bind:class="getBlockClass(row, col)"
            @click="setPackagePosition(row, col)"
          >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <!-- ICON -->
                <v-icon
                  size="18"
                  class="ml-1 block-icon"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ getBlockIcon(row, col) }}
                </v-icon>
              </template>
              <!-- TOOLTIP -->
              <span
                >{{
                  pM(row, col, aiPosition) ? "AI: " : "Drop Package Here: "
                }}
                row (lat): {{ row }}, col (lng): {{ col }}</span
              >
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-sheet>
    <!-- GRID -->
    <!-- SHORTEST PATH -->

    <v-snackbar
      text
      v-model="snackbar"
      :color="snackbarSuccess ? 'success' : 'error'"
      right
    >
      {{ msg }}

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
import "./Grid.scss";
import Algorithms from "./algorithms.js";
import Helpers from "../../utils/helpers.js";

export default {
  name: "Grid-component",
  data: () => ({
    rows: 13,
    cols: 30,
    aiPosition: {
      row: 0,
      col: 0,
    },
    myPackage: {
      row: 0,
      col: 0,
      value: 1,
    },
    themes: [
      { label: "Basic", value: 0 },
      { label: "Alternative", value: 1 },
      { label: "Clean", value: 2 },
    ],
    selectedTheme: { label: "Basic", value: 0 },
    demonstrationType: "Shortest Path",
    aiHasVisited: [],
    snackbar: false,
    msg: ``,
    snackbarSuccess: false,
    mapArray: [],
    mapSize: 0,
    mapSizeLabels: ["Small", "Medium", "Large"],
  }),
  methods: {
    play() {
      if (!this.validation()) return;
      const algorithms = new Algorithms(
        this.mapArray,
        this.aiPosition,
        this.myPackage,
        this.aiHasVisited
      );
      algorithms.linearSearch();
      this.msg = "Found";
      this.snackbar = true;
      this.snackbarSuccess = true;
    },
    validation() {
      this.snackbar = false;
      //ai must find the package
      if (this.myPackage.row == 0 || this.myPackage.col == 0) {
        this.msg = "You need to first drop a package on the map";
        this.snackbar = true;
        return false;
      }
      return true;
    },
    setPackagePosition(row, col) {
      const pack = this.myPackage;
      if (pack.row == row && pack.col == col) {
        this.myPackage.row = 0;
        this.myPackage.col = 0;
        return;
      }
      this.myPackage.row = row;
      this.myPackage.col = col;
    },
    pM(row, col, entity) {
      //pM stands for Position Matches
      if (entity.row == row && entity.col == col) {
        return true;
      }
      return false;
    },
    hasVisited(row, col) {
      return this.aiHasVisited.some((el) => {
        if (el[0] == row && el[1] == col) return true;
      });
    },
    foundPackage(row, col) {
      if (
        this.myPackage.row == this.aiPosition.row &&
        this.myPackage.col == this.aiPosition.col
      ) {
        if (row == this.myPackage.row && col == this.myPackage.col) {
          return true;
        }
      }
      return false;
    },
    reset() {
      location.reload();
    },
    sleep(milliseconds) {
      //console.log(new Date().getMilliseconds());
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
    getBlockClass(row, col) {
      if (this.foundPackage(row, col)) {
        return "block-ai-found-package-bg";
      }
      if (this.pM(row, col, this.aiPosition)) {
        return "block-ai-bg";
      }
      if (this.pM(row, col, this.myPackage) && !this.foundPackage(row, col)) {
        return "block-myPackage-bg";
      }
      if (this.hasVisited(row, col)) {
        return "block-ai-visited-bg";
      }
    },
    getBlockIcon(row, col) {
      if (this.pM(row, col, this.aiPosition)) {
        return "mdi-robot";
      }
      if (this.hasVisited(row, col)) {
        return "mdi-robot";
      }
      return "mdi-package-down";
    },
  },
  mounted() {
    //this.mapArray = Helpers.createSearchMap(this.rows, this.cols);
    if (this.demonstrationType == "Shortest Path") {
      this.mapArray = Helpers.createShortestPathMap(this.rows, this.cols);
      return;
    }

    if (this.demonstrationType == "Search Algorithms") {
      this.mapArray = Helpers.createSearchMap(this.rows, this.cols);
    }
  },
  watch: {
    // whenever question changes, this function will run
    demonstrationType(newVal, oldVal) {
      console.log(oldVal);
      if (newVal == "Shortest Path") {
        this.mapArray = Helpers.createShortestPathMap(this.rows, this.cols);
        return;
      }

      if (newVal == "Search Algorithms") {
        this.mapArray = Helpers.createSearchMap(this.rows, this.cols);
      }
    },
  },
};
</script>
