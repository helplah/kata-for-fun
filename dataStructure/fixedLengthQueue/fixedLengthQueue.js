module.exports = class FixedLengthQueue {
  constructor(length) {
    this.array = new Array(length);
    this.enqueueCount = 0;
    this.dequeueCount = 0;
  }

  enqueue(item) {
    if (this.enqueueCount === this.array.length) {
      throw new Error("FixedLengthQueue is full already!");
    }
    this.array[this.enqueueCount] = item;
    this.enqueueCount++;
  }

  dequeue() {
    const item = this.array[this.dequeueCount];
    if (item !== undefined) {
      this.array[this.dequeueCount] = undefined;
      this.dequeueCount++;
    }
    return item;
  }

  peek() {
    return this.array[this.dequeueCount];
  }

  getSize() {
    return this.array.length;
  }
};
