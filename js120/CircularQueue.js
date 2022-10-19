// so i somehow managed to get this to work, but i think i need to recisit
// took an hour or so to wrap my head around, and annoyed.
// 9/10/22


/* 
...



  recent object.
      puts immediately to the position that follows this object

   oldest object
      get will remove the oldest object in queue, always.

   When the buffer is full

   Adding a new object req. getting rid of an old object.
     this follows the oldest object rule.
     the object replaces the oldest object.


A B C

1
1 2
  2
  2 3
4 2 3
4   3
4 5 3
4 5 6
7 5 6
7   6
*/


class CircularQueue {
  constructor (size) {
    this.queue = new Array(size).fill(null);
    this.next = 0;
    this.old = 0;
  }

  increment(position) {
    return (position + 1) % this.queue.length;
  }

  enqueue(obj) {
    
     if (this.isFull()) {
      this.queue[this.old] = obj;
      this.next = this.increment(this.next)
      this.old = this.increment(this.old);   
     // console.log(this)
   
     } else {
      this.queue[this.next] = obj;
      if (this.isFull()) {
        this.next = this.old;
      } else {
        this.next = this.increment(this.next);
      }
      //console.log(this)
     }
  
    }
  

  dequeue() {
   // console.log(`dequeue`);
    if (this.isEmpty()) return null;    
    let val = this.queue[this.old]
    this.queue[this.old] = null;
    this.old = this.increment(this.old);
    //console.log(this);
    return val;
  }

  isEmpty() {
    return this.queue.every(ele => ele === null);
  }

  isFull() {
    return this.queue.every(ele => ele);
  }
}

// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue('a');


let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
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




//queue.dequeue(); //BUG
// console.log(`queue // `, queue)

// enqueue(obj) {
//   if (this.isEmpty()) {
//     this.queue[this.new] = obj;
//     this.old = this.new;
//     this.new = this.new;
//     console.log(this)

//   } else if (this.isFull()) {
//     this.queue[this.old] = obj;
//     this.new = this.old;
//     this.old = this.increment(this.old);   
//     console.log(this)
 
//   } else { 
//     this.queue[this.increment(this.new)] = obj;
//     this.new = this.increment(this.new);
//    // console.log(this)

//   }
// }
