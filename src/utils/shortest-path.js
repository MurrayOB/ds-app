//function depthFirstSearch() {}
export const Solve = (startingPosition = [0, 1], destination = [5, 3]) => {
  const treeLength = 10;
  const treeHeight = 10;
  const visitedArray = [];
  class BreadthFirstSearch {
    constructor() {}

    bfs() {
      let array = [];
      //set root
      console.log("Starting Position");
      console.log(startingPosition);
      array.push(startingPosition);
      visitedArray.push(startingPosition);

      while (array.length > 0) {
        let currentNode = array[0];

        if (
          currentNode[0] == destination[0] &&
          currentNode[1] == destination[1]
        ) {
          console.log("found it");
          console.log(currentNode);
          return visitedArray;
        }

        const node = new Node(currentNode, treeLength, treeHeight);
        //check if tree has left, right, up or down node.
        if (node.left() !== null) {
          array.push(node.left());
          visitedArray.push(node.left());
        }

        if (node.right() !== null) {
          array.push(node.right());
          visitedArray.push(node.right());
        }

        if (node.down() !== null) {
          array.push(node.down());
          visitedArray.push(node.down());
        }

        if (node.up() !== null) {
          array.push(node.up());
          visitedArray.push(node.up());
        }
        array.shift();
      }
      console.log("Node not found");
    }
  }

  //NEED TO KNOW THE ARRAY WIDTH AND HEIGHT
  class Node {
    constructor(position, treeWidth, treeHeight) {
      this.position = position;
      this.treeHeight = treeHeight;
      this.treeWidth = treeWidth;
    }

    left() {
      if (this.position[1] - 1 == -1) {
        return null;
      }
      const left = [this.position[0], this.position[1] - 1];
      return left;
    }
    right() {
      if (this.position[1] + 1 == this.treeWidth) {
        return null;
      }
      const right = [this.position[0], this.position[1] + 1];
      return right;
    }
    down() {
      if (this.position[0] - 1 == -1) {
        return null;
      }
      const down = [this.position[0] - 1, this.position[1]];
      return down;
    }
    up() {
      if (this.position[0] + 1 == this.treeHeight) {
        return null;
      }
      const up = [this.position[0] + 1, this.position[1]];
      return up;
    }
  }

  const search = new BreadthFirstSearch();
  return search.bfs();
};
