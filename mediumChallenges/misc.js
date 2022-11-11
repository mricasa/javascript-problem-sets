/* A file for practice */

/* Linked List
A list is a data structure composed of nodes. Each node in the list has a property that is assigned to the datum/item, and a property that points to the next node in the list.

The list can be accessed by starting with the head of the list and working our way down.

Lists in javascript look like this...

*/

let list;

list = {
  value: 1, next: {
    value: 2, next: {
      value: 3, next: {
      }
    }
  }
}

// cool.

// Reversing a linked list
/* Reverse a linked list such that all the nodes have pointers that instead point back to the element that originally preceded it. 

For an example, if this was our starting linked list

1 -> 2 -> 3 -> 4 -> 5 -> null
reverse it into 
5 -> 4 -> 3 -> 2 -> 1 -> null
*/


list = {
  value: 1, next: {
    value: 2, next: {
      value: 3, next: {
        value: 4, next: {
          value: 5, next: null,
        }
      }
    }
  }
}

/* below we have an example of the easiest to walk through a list. Basically, we declare a currentNode, that we will use to keep track of where we currently are in the list. At the end of each iteration, we'll need to move onto the next node in the list, so we change the binding of the currentNode to the next node in the list, the object referenced by the next property. */

let listToArray;
listToArray = function (head) {
  let arr = [];
  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return arr;
}

// here we have that solution again but with a for loop specification
listToArray = function (head) {
  let arr = [];
  for (let currentNode = head; currentNode; currentNode = currentNode.next) {
    arr.push(currentNode.value);
  }
  return arr;
}
console.log(listToArray(list));


/* let's talk about reversing that linked list again.
We'll still use the fundamental of walking through the list... that is,
moving through the list until our currentNode is null. But the difference here
is that we'll be mutating each node along the way to point back to the node that
we last visited in the sequence.

So here's an example 

1 -> 2 -> 3 -> 4 -> 5 ->

We'll start with our currentNode as the head as usual. During our visit, we'll want
to change the node's next value to point to point back to the node before. What was
the node before? Well, since this is the first node and we know that we would want our 
reversed list to end with null, we can say that it points back to null..

Where and how are we keeping track about what came before? Well, we'll have to do it outside
of the for loop since we want to track it persistently through each iteration.

And we come across another issue, right, when we want to update our current node to traverse
to the next... well... when we get to that line, the next value has already been mutated
to reverse its direction. Ok so, we can save the reference to the next node first then with 
a local variable.

That way we can change it freely ok

*/

function reverseLinkedList(head) {
  let previous = null; // we'll keep track of what the last node was here!
                        /// starting with it at null
  let currentNode = head;

  while (currentNode) {
    let nextStop = currentNode.next; // we'll be mutating our next property so we need to save it here
    currentNode.next = previous; // point back to the last node we visited
    previous = currentNode;      // So that we can access this node on our next  iteration
    currentNode = nextStop; // missed it here. you habitually typed in next instead of what you really needed
  }

  return previous; // we can't return currentNode because it is null by this point in the execution
}

let reversedList = (reverseLinkedList(list)) // that's what i'm talking about.

console.log(`reversedList: `, reversedList)

console.log(listToArray(reversedList))