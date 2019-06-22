module.exports = class CircularQueue {
  constructor(lengthOfArray) {
    this.array = new Array(lengthOfArray);
    this.incrementCount = 0;
    this.decrementCount = 0;
  }

  enqueue(item) {
    if (this.array.length === this.incrementCount) {
      throw new Error("max length reached");
    } else if (typeof item === "undefined") {
      throw new Error("enqueue item cannot be undefined");
    }

    this.array[this.incrementCount] = item;
    this.incrementCount++;
  }

  dequeue() {
    let dequeueItem = this.array[this.decrementCount];

    if (typeof dequeueItem !== "undefined") {
      this.array[this.decrementCount] = undefined;
      this.decrementCount++;
      this.incrementCount--;
    }

    if (typeof dequeueItem === "undefined" && this.decrementCount > 0) {
      this.decrementCount--;
      dequeueItem = this.array[this.decrementCount];
    }

    if (typeof dequeueItem === "undefined") {
      throw new Error("no item in queue");
    }

    return dequeueItem;
  }

  peek() {
    return this.array[this.decrementCount];
  }

  getSize() {
    return this.array.length;
  }
};
