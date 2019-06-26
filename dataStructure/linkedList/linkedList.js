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
    if (this.head === null) {
      return this.head;
    } else {
      const currentNode = this.head;
      if (currentNode.next === undefined) {
        currentNode.next = null;
      }

      this.head = currentNode.next;
      return currentNode;
    }
  }

  getLast() {
    if (this.head === null) {
      return this.head;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== undefined) {
        currentNode = this.head.next;
      }

      return currentNode;
    }
  }

  pop() {
    if (this.head === null) {
      return this.head;
    } else {
      const lastItem = this.getLast();
      let currentNode = this.head;
      console.log("before loop", currentNode);

      while (currentNode !== undefined && currentNode.next !== lastItem) {
        currentNode = this.head.next;
      }
      console.log("after loop", currentNode);

      // currentNode.next = null;
      // return lastItem;
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
