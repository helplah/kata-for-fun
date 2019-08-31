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
    while (lastItem && lastItem.next != null) {
      lastItem = lastItem.next;
    }
    return lastItem;
  }

  pop() {
    let lastItem = this.getLast();
    let item = this.head;

    while (item && item.next != null && item.next !== lastItem) {
      item = item.next;
    }

    if (item && item === lastItem) {
      this.head = null;
    } else if (item && item !== lastItem) {
      item.next = null;
    }

    if (item !== null) {
      this.size--;
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
      lastItem.next = item;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getAt(index) {
    let item = this.head;

    if (isNaN(index)) {
      throw new Error("not a number");
    } else if (index < 0 || (index >= this.getSize() && index !== 0)) {
      throw new Error("index out of bound");
    }

    for (let x = 0; x < index; x++) {
      if (item && item.next) {
        item = item.next;
      }
    }
    return item;
  }

  insertAt(index, item) {
    if (!(item instanceof Node)) {
      throw new Error("not a node");
    } else if (index < 0 || index > this.getSize()) {
      throw new Error("index out of bound");
    }

    if (index === 0 && this.head === null) {
      this.head = item;
    } else if (index === 0 && this.head !== null) {
      const nextItem = this.head;
      this.head = item;
      item.next = nextItem;
    } else {
      let prevItem = this.getAt(index - 1);
      const nextItem = prevItem.next;
      prevItem.next = item;
      item.next = nextItem;
    }
    this.size++;
  }

  removeAt(index) {
    let removeItem = this.head;
    if (index < 0 || index >= this.getSize()) {
      throw new Error("index out of bound");
    }

    if (index === 0 && this.getSize() === 1) {
      this.head = null;
    } else if (index === 0 && this.getSize() > 1) {
      this.head = this.head.next;
    }

    if (index > 0) {
      let prevItem = this.getAt(index - 1);
      removeItem = prevItem.next;
      prevItem.next = removeItem.next;
    }
    this.size--;
    return removeItem;
  }
}

module.exports = {
  Node,
  LinkedList
};
