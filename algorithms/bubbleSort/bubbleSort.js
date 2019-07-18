/* module.exports.bubbleSort = arr => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = arr.length - 1; y > 0; y--) {
      if (arr[y] < arr[y - 1]) {
        let temp = arr[y - 1];
        arr[y - 1] = arr[y];
        arr[y] = temp;
      }
    }
  }

  return arr;
}; */

// still doing
module.exports.bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] > arr[x + 1]) {
        let temp = arr[x + 1];
        arr[x + 1] = arr[x];
        arr[x] = temp;
        swapped = true;
      }
    }
  } while (!swapped);

  return arr;
};
