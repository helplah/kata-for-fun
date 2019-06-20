module.exports = class FixedLengthQueue {
  constructor(length) {
    this.array = new Array(length);
    this.incrementCount = 0;
    this.decrementCount = 0;
    // console.log(this.array[0]);
  }

  enqueue(item) {
    if (this.array.length === this.incrementCount) {
      throw new Error("max length reached");
    }

    this.array[this.incrementCount] = item;
    this.incrementCount++;
    console.log("after enqueue", this.array);
  }

  dequeue() {
    const dequeueItem = this.array[this.decrementCount];
    if (typeof dequeueItem !== "undefined") {
      this.array[this.decrementCount] = undefined;
      this.decrementCount++;
    }

    console.log("after dequeue", this.array);

    return dequeueItem;
  }

  peek() {
    return this.array[this.decrementCount];
  }

  getSize() {
    return this.array.length;
  }
};
