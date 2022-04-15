Phase 1:
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
