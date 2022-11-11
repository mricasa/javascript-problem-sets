class Element {
  constructor(datumVal, nextEl = null) {
    this.datumVal = datumVal;
    this.nextEl = nextEl;
  }
  datum() {
    return this.datumVal;
  }
  isTail() {
    return this.nextEl === null;
  }
  next() {
    return this.nextEl;
  }
}

class SimpleLinkedList {


  push(value) {
    let newElement = new Element(value, this.head());
    this.headEl = newElement;
  }

  head() {
    return this.headEl || null;
  }

  pop() {
    let oldHeadEl = this.head();
    this.headEl = oldHeadEl.next();
    return oldHeadEl.datum();
  }

  size() {
    let size = 0;
    let currentEle = this.head();
    while (currentEle instanceof Element) {
      size += 1;
      currentEle = currentEle.next();
    }
    return size;
  }

  peek() {
    if (this.head() === null) return null;
    return this.head().datum()
  }

  isEmpty() {
    return this.head() === null;
  }

  static fromArray(array = []) {
    let resultLinkedList = new SimpleLinkedList();

    if (!Array.isArray(array)) return resultLinkedList;
    for (let idx = array.length - 1; idx >= 0; idx--) {
      resultLinkedList.push(array[idx]);
    }

    return resultLinkedList;
  }

  reverse() {
    let resultLinkedList = new SimpleLinkedList();

    let currentEle = this.head();
    while (currentEle instanceof Element) {
      resultLinkedList.push(currentEle.datum())
      currentEle = currentEle.next();
    }

    return resultLinkedList;
  }

  toArray() {
    let result = [];
    let currentEle = this.head();

    while (currentEle instanceof Element) {
      result.push(currentEle.datum());
      currentEle = currentEle.next()
    }
    return result;
  }
}

module.exports = { SimpleLinkedList, Element }

let list
list = SimpleLinkedList.fromArray([1, 2]);
console.log(`list.size(): `, list.size())
// reversedList and list need not be the same object
reversedList = list.reverse();

console.log(reversedList.peek())
console.log(reversedList.head().next().datum())
console.log(reversedList.head().next().isTail())