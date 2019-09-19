module.exports.insertionSort = array => {
  for (let x = 1; x < array.length; x++) {
    let sortItem = array[x];
    let y = x - 1;

    for (; y >= 0 && array[y] > sortItem; y--) {
      array[y + 1] = array[y];
    }
    array[y + 1] = sortItem;
  }
  return array;
};

// Alternate solution
/* 
  for (let x = 1; x < array.length; x++) {
    const current = array[x];
    const nextIndex = x + 1;

    while (nextIndex > 0 && array[nextIndex] > current) {
      array[nextIndex] = array[x];
      nextIndex++;
    }
    array[nextIndex] = current;
    return array;
  } 
*/
