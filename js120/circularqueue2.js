/* A rolling buffer is a circular queue that has slots that store arbitrary objects. When we reach the end of the queue, it loops back around to the first position.

When we are adding elements to the queue, the next element always fills in the next space immediately available after the last added element. 

When we remove elements from teh queue, the oldest element is always removed.


WHEN THE QUEUE IS FULL
When the queue is full, the oldest element is removed, and that slot is replaced with the newest element.



A B C D E F
1 2 3 4 5 6
A B C D E F
7 2 3 4 5 6 
A B C D E F
7 8 3 4 5 6


A B C D E F   Delete the oldest (1)
1 2 3 4 5  
A B C D E F   Where do we resume? To the right of the recent element, always
  2 3 4 5
A B C D E F   Remove oldest
  2 3 4 5 6
A B C D E F
    3 4 5 6

A B C D E F   Because we can only ever remove the oldest, the location of where to resume setting values will 
              not change
7 8 3 4 5 6

A B C D E F   Remove oldest (2x)
7 8     5 6

A B C D E F   Insertion resumes after item 8, always.
7 8 9   5 6


How do we track the oldest item? 
The oldest item is the oldest item until it is removed. When it's removed, the next position becomes the oldest item. 

A B C D E F  And what if there's only one element?
  1

When we remove the oldest item, there is now no oldest item.
Need to consider empty states.

*/

class CircularQueue {
  constructor(size) {
    this.queue = new Array(size).fill(null);
    this.next = 0;
    this.oldest = undefined;
    this.length = this.queue.length;
  }

  enqueue(obj) {
    this.queue[this.next] = obj;
    this.next = this.increment(this.next);
    if (this.queue[this.next] !== null) this.oldest = this.next;
  }

  dequeue() {
    let val = this.queue[this.oldest] 
    this.queue[this.oldest] = null;
    if (this.isEmpty()) {this.oldest = undefined} else {
      this.oldest = this.increment(this.oldest);
    }
    return val;
  }

  increment(idx) {
    return (idx + 1)% this.length;
  }

  isEmpty() {
    return this.queue.every(ele => ele === null);
  }

  isFull() {
    return !this.isEmpty();
  }
} 

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(`queue // `, queue)

console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);


// let queue = new CircularQueue(3)
// console.log(`queue // `, queue)
// queue.add(1)
// console.log(`queue // `, queue)
// queue.add(2)
// console.log(`queue // `, queue)
// queue.add(3)
// console.log(`queue // `, queue)
// queue.add(4)
// console.log(`queue // `, queue)
// queue.remove()
// console.log(`queue // `, queue)