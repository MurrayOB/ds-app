// What to we know/have?
// A 2D array like this =       [[2, 0, 0],
//                               [0, 1, 0],
//                               [0, 0, 3]];
// 0 represents a road, 1 represents a wall, 2 represents the starting position, 3 represents the destination

// From our UI we will receive the
// 1. mapArray,
// 2. a starting position [row: 0, col: 1]
// 3. destination position: [row: 2, col: 2]
class DepthFirstSearch {
  depthSearchFirst() {}
}

class Node {
  constructor(point, value) {
    this.left = null;
    this.right = null;
    this.up = null;
    this.down = null;

    this.point = point;
    this.value = value;
  }
}

class Tree {
  constructor() {
    //starting position
    this.root = root;
  }

  //Create recursion function:
  test() {
    //"Amount of rows"
    const arrayWidth = mapArray.length;
    //Amount of columns
    const arrayHeight = mapArray[0].length;
  }
}
