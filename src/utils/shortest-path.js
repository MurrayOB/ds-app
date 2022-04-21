//function depthFirstSearch() {}
class BreadthFirstSearch {
  tree = [
    [1, -1, -1],
    [0, -1, 0],
    [0, 0, 2],
  ];
  startingPosition = [0, 1];
  destination = [2, 2];
  visitedArray = [];

  constructor(tree, startingPosition, destination, visitedArray) {
    this.tree = tree;
    this.startingPosition = startingPosition;
    this.destination = destination;
    this.visitedArray = visitedArray;
  }

  bfs() {
    let array = [];
    //set root
    console.log("Starting Position");
    array.push(this.startingPosition);
    this.visitedArray.push(this.startingPosition);

    while (array.length > 0) {
      let currentNode = array[0];

      if (
        currentNode[0] == this.destination[0] &&
        currentNode[1] == this.destination[1]
      ) {
        console.log("found it");
        console.log(this.visitedArray);
        return;
      }

      const node = new Node(currentNode, this.tree.length, this.tree[0].length);
      //check if tree has left, right, up or down node.
      if (node.left() !== null) {
        array.push(node.left());
        this.visitedArray.push(node.left());
      }

      if (node.right() !== null) {
        array.push(node.right());
        this.visitedArray.push(node.right());
      }

      if (node.down() !== null) {
        array.push(node.down());
        this.visitedArray.push(node.down());
      }

      if (node.up() !== null) {
        array.push(node.up());
        this.visitedArray.push(node.up());
      }
      //basically we've checked the node and its child nodes to see if its
      //children are the destination point we're looking for

      //We did the check in the beginning of this function to see if the current node
      //is same as destination, now we must remove it and it will become
      //our left or right or up or down, etc.
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

  //uses array width
  right() {
    //check if column goes beyond array or row width:
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

  //uses array height
  up() {
    if (this.position[0] + 1 == this.treeHeight) {
      return null;
    }
    const up = [this.position[0] + 1, this.position[1]];
    return up;
  }
}

export default BreadthFirstSearch;
