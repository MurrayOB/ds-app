class Algorithms {
  mapArray = null;
  aiPosition = null;
  myPackage = null;
  aiHasVisited = null;

  constructor(mapArray, aiPosition, myPackage, aiHasVisited) {
    this.mapArray = mapArray;
    this.aiPosition = aiPosition;
    this.myPackage = myPackage;
    this.aiHasVisited = aiHasVisited;
  }

  linearSearch() {
    for (let i = 0; i < this.mapArray.length; i++) {
      this.aiPosition.row = this.mapArray[i][0];
      this.aiPosition.col = this.mapArray[i][1];
      if (
        this.aiPosition.row == this.myPackage.row &&
        this.aiPosition.col == this.myPackage.col
      ) {
        return;
      }
      this.aiHasVisited.push(this.mapArray[i]);
    }
  }
}

export default Algorithms;
