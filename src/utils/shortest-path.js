// What to we know/have?
// A 2D array like this =       [[2, 0, 0],
//                               [0, 1, 0],
//                               [0, 0, 3]];
// 0 represents a road, 1 represents a wall, 2 represents the starting position, 3 represents the destination

// From our UI we will receive the
// 1. mapArray,
// 2. a starting position [row: 0, col: 1]
// 3. destination position: [row: 2, col: 2]
//

// function isSolve(maze, start) {
//   const moves = [
//     [+1, 0],
//     [0, -1],
//     [-1, 0],
//     [0, +1],
//   ];

//   const _widthLength = maze.length;

//   const _heightLength = maze[0].length;

//   class Node {
//     constructor(point, value) {
//       this.left = null;
//       this.right = null;
//       this.forward = null;
//       this.backward = null;
//       this.value = value;
//       this.point = point;
//     }
//   }
//   class Tree {
//     constructor() {
//       this.root = null;
//     }

//     grow(pos, maze, track, currentNode) {
//       if (track.length === 1) {
//         this.root = startPose;
//         currentNode = this.root;
//       }

//       const [y, x] = pos.point;
//       const path = moves.map(([yMove, xMove]) => {
//         [y + yMove, x + xMove];
//       });

//       const filter = path.filter((path) => {
//         if (
//           path[0] > _widthLength - 1 ||
//           path[0] < 0 ||
//           path[1] > _heightLength - 1 ||
//           path[1] < 0 ||
//           maze[path[0]][path[1]] === 1
//         ) {
//           return false;
//         }
//         return (
//           track.findIndex(
//             (index) => index[0] === path[0] && index[1] === path[1]
//           ) === -1
//         );
//       });

//       const nodeArr = filter.map((pos) => {
//         const node = new Node(pos, maze[pos[0]][pos[1]]);
//         track.push(pos);
//         return node;
//       });

//       // To make the Tree organize by moves
//       nodeArr.forEach((position) => {
//         switch (true) {
//           case position.point[0] < pos.point[0]:
//             currentNode.backward = position;
//             this.grow(position, maze, track, currentNode.backward);
//             break;
//           case position.point[0] > pos.point[0]:
//             currentNode.forward = position;
//             this.grow(position, maze, track, currentNode.forward);
//             break;
//           case position.point[1] < pos.point[1]:
//             currentNode.left = position;
//             this.grow(position, maze, track, currentNode.left);
//             break;
//           case position.point[1] > pos.point[1]:
//             currentNode.right = position;
//             this.grow(position, maze, track, currentNode.right);
//             break;
//           default:
//         }
//       });
//     }

//     dfs(node, arr) {
//       if (node.left) {
//         this.dfs(node.left, arr);
//       }
//       if (node.right) {
//         this.dfs(node.right, arr);
//       }
//       if (node.forward) {
//         this.dfs(node.forward, arr);
//       }
//       if (node.backward) {
//         this.dfs(node.backward, arr);
//       }
//       arr.push([node.value, node.point]);
//       return arr;
//     }
//   }

//   const startPose = new Node(
//     [startPoint[0], startPoint[1]],
//     maze[startPoint[0]][startPoint[1]]
//   );

//   const tree = new Tree();

//   tree.grow(startPose, maze, [[startPoint[0], startPoint[1]]]);

//   const result = tree.dfs(tree.root, []);

//   const index = result.findIndex((arr) => arr[0] === 2);

//   return index !== -1 ? true : false;
// }
