<template>
  <div class="mt-2">
    <!-- header -->
    <div>
      <v-sheet
        color="grey lighten-4"
        rounded
        elevation="0"
        height="100"
        width="100%"
      >
        <v-row>
          <v-col
            ><p>Speed of Ai:</p>
            <br />
            <p>Position of Package known to Ai? : True</p>
            <p>
              Package Position: lat: {{ myPackage.row }}, lng:
              {{ myPackage.col }}
            </p>
          </v-col>
          <v-col>
            <v-btn text color="secondary">reset</v-btn>
            <v-btn color="primary" @click="play()">play</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <br />
    <!-- grid -->
    <v-sheet rounded outlined height="60vh" width="100%">
      <div
        style="display: flex"
        v-for="row in rows"
        :key="row"
        class="float-right block-container"
      >
        <div v-for="col in cols" :key="col">
          <!-- block and color -->
          <div
            class="block"
            v-bind:class="{
              'block-ai-bg': pM(row, col, aiPosition),
              'block-myPackage-bg': pM(row, col, myPackage),
              'block-ai-visited-bg': hasVisited(row, col),
              'block-ai-found-package-bg': foundPackage(),
            }"
            @click="setPackagePosition(row, col)"
          >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <!-- icon -->
                <v-icon
                  size="18"
                  class="ml-1 block-icon"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{
                    pM(row, col, aiPosition)
                      ? "mdi-robot"
                      : hasVisited(row, col) || foundPackageBool
                      ? "mdi-robot"
                      : "mdi-package-down"
                  }}
                </v-icon>
              </template>
              <!-- Tooltip Message -->
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
    <v-snackbar text v-model="snackbar" color="error" right>
      {{ msg }}

      <template v-slot:action="{ attrs }">
        <v-btn color="error" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import "./Grid.scss";
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
    foundPackageBool: false,
    snackbar: false,
    msg: ``,
  }),
  methods: {
    play() {
      this.validation();

      //let aiPos = [this.aiPosition.row, this.aiPosition.col];
      //let packagePos = [this.myPackage.row, this.myPackage.col];
      let map = this.createMapArray();
      //what we're looking for in the array is [[5, 23]]

      //first attempt
      //Find row
      //[0, 0]
      for (let i = 0; i < map.length; i++) {
        //check if aiPos = packagePos
        console.log(map[i]);
        this.aiPosition.row = map[i][0];
        this.aiPosition.col = map[i][1];

        if (
          this.aiPosition.row == this.myPackage.row &&
          this.aiPosition.col == this.myPackage.col
        ) {
          this.msg = "Found";
          this.snackbar = true;
          return;
        }
        //add it to the hasVisited array and set current position of
        this.aiHasVisited.push(map[i]);
      }
    },
    createMapArray() {
      let array = [];
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          array.push([i, j]);
        }
      }
      return array;
    },
    validation() {
      this.snackbar = false;
      //ai must find the package
      if (this.myPackage.row == 0 || this.myPackage.col == 0) {
        this.msg = "You need to first drop a package on the map";
        this.snackbar = true;
        return;
      }
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
    foundPackage() {},
  },
};
</script>
