export const convertArray1dToArray2d = (array, rows, cols) => {
  let copy = array.slice(0);
  array.length = 0;

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      let i = r * cols + c;
      if (i < copy.length) {
        row.push(copy[i]);
      }
    }
    array.push(row);
  }

  return array;
};
