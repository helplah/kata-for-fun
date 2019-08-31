module.exports.binarySearch = (array, itemId) => {
  // create a variable low, set to zero
  // create a variable high, set to last index of array
  // while low is lower than high
  //  create variable middle which is the floor of (low + high) divide by 2
  //  if middle item's id is same as itemToSearchId return item
  //  else if middle item's id > itemToSearchId
  //    set high to middle - 1
  //  else
  //    set low to middle + 1
  // return null

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const item = array[middle];

    if (item.id === itemId) {
      return item;
    } else if (item.id > itemId) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
};
