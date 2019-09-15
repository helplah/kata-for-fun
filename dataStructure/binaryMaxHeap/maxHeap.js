class MaxHeap {
  constructor() {
    this.priorityQueue = [];
  }

  getMax() {
    return this.priorityQueue[0];
  }

  extractMax() {
    const rootNode = this.priorityQueue[0];
    this.priorityQueue[0] = this.priorityQueue[this.priorityQueue.length - 1];
    this.priorityQueue.pop();

    let parentIndex = 0;
    let parent = this.priorityQueue[parentIndex];
    let firstChildIndex = 2 * parentIndex + 1;
    let firstChild = this.priorityQueue[firstChildIndex];
    let secondChildIndex = 2 * parentIndex + 2;
    let secondChild = this.priorityQueue[secondChildIndex];

    let length = this.priorityQueue.length;
    while (parentIndex < length) {
      let largerChild = firstChild > secondChild ? firstChild : secondChild;
      let largerChildIndex =
        largerChild === firstChild ? firstChildIndex : secondChildIndex;

      if (parent < largerChild) {
        this.priorityQueue[parentIndex] = largerChild;
        this.priorityQueue[largerChildIndex] = parent;
        parentIndex = largerChildIndex;
      }

      firstChildIndex = 2 * parentIndex + 1;
      secondChildIndex = 2 * parentIndex + 2;
      parent = this.priorityQueue[parentIndex];
      firstChild = this.priorityQueue[firstChildIndex];
      secondChild = this.priorityQueue[secondChildIndex];
      length--;
    }
    return rootNode;
  }

  insert(item) {
    this.priorityQueue.push(item);
    let itemIndex = this.priorityQueue.length - 1;

    let itemParentIndex;
    if (itemIndex > 0) {
      itemParentIndex = Math.floor((itemIndex - 1) / 2);
    } else {
      itemParentIndex = Math.ceil((itemIndex - 1) / 2);
    }

    let parent = this.priorityQueue[itemParentIndex];
    while (item > parent) {
      this.priorityQueue[itemParentIndex] = item;
      this.priorityQueue[itemIndex] = parent;

      itemIndex = itemParentIndex;
      itemParentIndex = Math.floor((itemIndex - 1) / 2);
      parent = this.priorityQueue[itemParentIndex];
    }
  }
}

module.exports = {
  MaxHeap
};
