class Node {
  constructor(data, next) {
    if (next && !(next instanceof Node)) {
      throw new Error("not a node");
    }

    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  unshift(item) {
    if (!(item instanceof Node)) {
      throw new Error("not a node");
    }

    if (this.head === null) {
      this.head = item;
    } else {
      const nextItem = this.head;
      this.head = item;
      item.next = nextItem;
    }
  }

  shift() {
    const currentNode = this.head;

    if (currentNode !== null) {
      if (currentNode.next === undefined) {
        currentNode.next = null;
      }

      this.head = currentNode.next;
    }

    return currentNode;
  }

  getLast() {
    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next !== undefined) {
        // previously currentNode = this.head.next
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  pop() {
    let currentNode = this.head;

    if (currentNode === null) {
      return currentNode;
    } else {
      console.log("before loop", currentNode);

      while (currentNode.next !== undefined) {
        currentNode = currentNode.next;
      }

      console.log("after loop", currentNode);

      const lastNode = currentNode;
      currentNode.next = null;
      currentNode = null;
      return lastNode;
    }
  }

  push() {}

  getSize() {}

  getAt() {}

  insertAt() {}

  removeAt() {}
}

module.exports = {
  Node,
  LinkedList
};
