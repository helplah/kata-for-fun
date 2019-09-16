const { mergeSort } = require("./mergeSort");

describe("mergeSort", () => {
  const unorderedNumbers = [6, 5, 3, 1, 8, 7, 2, 4];

  it("should sort numbers into ascending order", () => {
    expect(mergeSort(unorderedNumbers)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
