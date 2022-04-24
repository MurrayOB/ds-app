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
  createShortestPathMap(
    defaultMap = true,
    rows = 10,
    cols = 10,
    endPosition = [8, 2]
  ) {
    if (defaultMap) {
      // return (this.mapArray = [
      //   [0, 1, 1, 1, 0, 1, 1, 0, 1],
      //   [1, 1, 0, 0, 0, 0, 0, 0, 0],
      //   [1, 1, 1, 1, 1, 0, 1, 1, 0],
      //   [0, 1, 1, 0, 0, 0, 0, 0, 0],
      //   [0, 1, 1, 0, 0, 0, 0, 0, 1],
      //   [1, 1, 0, 0, 0, 1, 1, 1, 0],
      //   [1, 0, 0, 0, 1, 1, 0, 1, 1],
      //   [1, 0, 1, 0, 0, 1, 0, 1, 1],
      //   [1, 0, 2, 1, 0, 1, 1, 1, 1],
      // ]);
      return (this.mapArray = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 1, 0, 1, 1, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 1],
        [1, 0, 2, 1, 0, 1, 1, 1, 1],
      ]);
    }

    let array = [];
    for (let i = 1; i < rows + 1; i++) {
      let column = [];
      for (let j = 1; j < cols + 1; j++) {
        if (i == endPosition[0] && j == endPosition[1]) {
          column.push(2);
        } else {
          column.push(0);
        }
      }
      array.push(column);
    }
    console.log(array);
    return array;
  },
};

export default Helpers;
