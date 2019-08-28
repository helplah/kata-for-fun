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
    this.size = 0;
  }

  getFirst() {
    return this.head;
  }

  unshift(item) {
    if (!(item instanceof Node)) {
      throw new Error("not a node");
    }

    const nextItem = this.head;
    this.head = item;
    this.head.next = nextItem;
    this.size++;
  }

  shift() {
    const item = this.head;
    if (this.head !== null) {
      this.head = this.head.next;
      this.size--;
    }
    return item;
  }

  getLast() {
    let lastItem = this.head;
    while (lastItem && lastItem !== null && lastItem.next != null) {
      lastItem = lastItem.next;
    }
    return lastItem;
  }

  pop() {
    let lastItem = this.getLast();

    let item = this.head;
    while (item !== null && item.next !== null && item.next !== lastItem) {
      item = item.next;
    }

    if (item !== null) {
      this.size--;
    }

    if (item !== lastItem && this.head !== null) {
      item.next = null;
    } else if (item && item === lastItem) {
      this.head = null;
    }
    return lastItem;
  }

  push(item) {
    if (!(item instanceof Node)) {
      throw new Error("not a node");
    }

    if (this.head === null) {
      this.head = item;
    } else {
      const lastItem = this.getLast();
      console.log(lastItem);
      lastItem.next = item;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getAt(index) {
    if (isNaN(index)) {
      throw new Error("not a number");
    } else if (index < 0) {
      throw new Error("index out of bound");
    }

    let counter = index;
    let item = this.head;
    while (counter > 0) {
      if (item.next) {
        item = item.next;
      } else {
        throw new Error("index out of bound");
      }
      counter--;
    }

    return item;
  }

  insertAt() {}

  removeAt() {}
}

module.exports = {
  Node,
  LinkedList
};
