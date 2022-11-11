class Element {
  constructor(datumEl, nextLink = null) {
    this.datumEl = datumEl;
    this.nextLink = nextLink;
  }

  datum() {
    return this.datumEl;
  }

  next() {
    return this.nextLink;
  }

  isTail() {
    return this.nextLink === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headEl = null;
  }

  push(element) {
    this.headEl = new Element(element, this.head());
  }

  pop() {
    if (this.isEmpty()) return null;

    let popped = this.head();
    this.headEl = this.head().next();
    return popped.datum();
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.head().datum();
  }

  size() {
    if (this.isEmpty()) return 0;

    let count = 0;
    let currentEl = this.head();

    while (currentEl instanceof Element) {
      console.log(`currentEl: `, currentEl)
      count += 1;
      currentEl = currentEl.next()
    }

    return count;
  }

  head() {
    return this.headEl;
  }

  isEmpty() {
    return this.head() === null;
  }

  toArray() {
    let currentEl = this.head();
    let resultArray = [];
    while (currentEl instanceof Element) {
      resultArray.push(currentEl.datum());
      currentEl = currentEl.next();
    }
    return resultArray;
  }

  reverse() {
    let resultLinkedList = new SimpleLinkedList();
    let currentEl = this.head();
    while (currentEl instanceof Element) {
      resultLinkedList.push(currentEl.datum());
      currentEl = currentEl.next();
    }
    return resultLinkedList;
  }

  static fromArray(array) {
    let resultLinkedList = new SimpleLinkedList();

    if (!Array.isArray(array)) return resultLinkedList;

    for (let idx = array.length - 1; idx >= 0; idx--) {
      resultLinkedList.push(array[idx]);
    }

    return resultLinkedList;
  }
}

module.exports = { Element, SimpleLinkedList };


let myLL = SimpleLinkedList.fromArray([1, 2, 3, 4, 5]);
console.log(`myLL: `, myLL)

