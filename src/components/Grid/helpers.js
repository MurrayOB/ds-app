const Helpers = {
  createSearchMap(rows = 10, cols = 10) {
    let array = [];
    for (let i = 1; i < rows + 1; i++) {
      for (let j = 1; j < cols + 1; j++) {
        array.push([i, j]);
      }
    }
    return array;
  },
  createShortestPathMap(rows = 10, cols = 10) {
    let array = [];
    for (let i = 1; i < rows + 1; i++) {
      let column = [];
      for (let j = 1; j < cols + 1; j++) {
        column.push(0);
      }
      array.push(column);
    }
    console.log(array);
    return array;
  },
};

export default Helpers;
