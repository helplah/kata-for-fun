const { MaxHeap } = require("./maxHeap");

let maxHeap;
beforeEach(() => {
  maxHeap = new MaxHeap();
});

describe("MaxHeap", () => {
  it("should construct a MaxHeap object", () => {
    expect(maxHeap.priorityQueue).toEqual([]);
  });

  describe("insert", () => {
    it("should insert an item", () => {
      maxHeap.insert(100);
      expect(maxHeap.priorityQueue[0]).toBe(100);
    });

    it("should insert multiple items", () => {
      maxHeap.insert(100);
      maxHeap.insert(10);
      maxHeap.insert(20);
      expect(maxHeap.priorityQueue[0]).toBe(100);
      expect(maxHeap.priorityQueue[1]).toBe(10);
      expect(maxHeap.priorityQueue[2]).toBe(20);
    });

    it("should recursively swap child with parent if child is greater than parent", () => {
      maxHeap.insert(10);
      maxHeap.insert(100);
      maxHeap.insert(50);

      maxHeap.insert(20);
      maxHeap.insert(30);

      maxHeap.insert(60);
      maxHeap.insert(120);
      expect(maxHeap.priorityQueue[0]).toBe(120);
      expect(maxHeap.priorityQueue[1]).toBe(30);
      expect(maxHeap.priorityQueue[2]).toBe(100);
      expect(maxHeap.priorityQueue[3]).toBe(10);
      expect(maxHeap.priorityQueue[4]).toBe(20);
      expect(maxHeap.priorityQueue[5]).toBe(50);
      expect(maxHeap.priorityQueue[6]).toBe(60);
    });
  });

  it("getMax should return the root node", () => {
    maxHeap.insert(100);
    maxHeap.insert(300);
    expect(maxHeap.getMax()).toBe(300);
  });

  it("extractMax should remove and return the root node", () => {
    maxHeap.insert(10);
    maxHeap.insert(100);
    maxHeap.insert(50);

    maxHeap.insert(20);
    maxHeap.insert(30);

    maxHeap.insert(60);
    maxHeap.insert(120);
    expect(maxHeap.extractMax()).toBe(120);
    expect(maxHeap.priorityQueue[0]).toBe(100);
    expect(maxHeap.priorityQueue[1]).toBe(30);
    expect(maxHeap.priorityQueue[2]).toBe(60);
    expect(maxHeap.priorityQueue[3]).toBe(10);
    expect(maxHeap.priorityQueue[4]).toBe(20);
    expect(maxHeap.priorityQueue[5]).toBe(50);
  });
});
