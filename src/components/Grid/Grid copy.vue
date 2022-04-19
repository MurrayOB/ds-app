<template>
  <div class="mt-2">
    <!-- HEADER -->
    <div>
      <v-sheet
        color="grey lighten-4"
        rounded
        elevation="0"
        height="100%"
        width="100%"
      >
        <v-row>
          <v-col
            ><p>Speed of Ai:</p>
            <p>Position of Package known to Ai? : True</p>
          </v-col>
          <v-col>
            <p>
              Package Position: lat: {{ myPackage.row }}, lng:
              {{ myPackage.col }}
            </p>
            <p>
              Position of AI: row: {{ aiPosition.row }}, col:
              {{ aiPosition.col }}
            </p>
          </v-col>
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
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text color="primary" dark v-bind="attrs" v-on="on">
                  Demonstration Type <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  link
                  v-for="(item, index) in [
                    { title: 'Shortest Path' },
                    { title: 'Search Algorithms' },
                    { title: 'Fun Game' },
                  ]"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
    <v-sheet class="grid-container" rounded outlined height="60vh" width="100%">
      <!-- ROWS -->
      <div class="grid-container--row" v-for="row in rows" :key="row">
        <!-- COLUMNS -->
        <div v-for="col in cols" :key="col">
          <!-- BLOCK COMPONENT -->
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
//Notes:

//When you want to block a path,
//create a function that inserts -1 at the specifc index into the global array
import Algorithms from "./algorithms.js";

export default {
  name: "Grid-component",
  data: () => ({
    rows: 13,
    cols: 30,
    aiPosition: {
      row: 7,
      col: 1,
    },
    myPackage: {
      row: 0,
      col: 0,
      value: 1,
    },
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
    let array = [];
    for (let i = 1; i < this.rows + 1; i++) {
      for (let j = 1; j < this.cols + 1; j++) {
        array.push([i, j]);
      }
    }
    this.mapArray = array;
  },
};
</script>
