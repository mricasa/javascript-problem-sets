/* 

arrayToList
- build up the linked list structure when given array
  [1,2,3] as an argument

listToArray
- produces an array from a list

helper: prepend
- takes an element and a list and creates a new
  list that adds the elemetn to the front of the 
  input list

helper: nth
- takes a list and number, and returns the element at a given position, or undefined if there is no such element
  - can be made recursively
*/

function arrayToList(arr) {
  let arrCopy = [...arr];

  let head = { value: arr[0], next: null };
  let last = head;

  for (let idx = 1; idx < arr.length; idx++) {
    console.log(`arr[idx]: `, arr[idx])
    let currentNode = { value: arr[idx], next: null };
    last.next = currentNode;
    last = currentNode;
  }

  return head;
}

function listToArray(list) {
  let currentNode = list;
  let result = [];
  while (currentNode !== null) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return result;
}

function prepend(element, list) {
  return { value: element, next: list };
}

function nth(n, list) {
  let currentN = 0;

  function walkList(list) {
    if (currentN === n) return list.value;
    if (list === null) return undefined;
    currentN += 1;
    return walkList(list.next);
  }

  return walkList(list);
}

let list = arrayToList([1, 2, 3]);

console.log(`list // `, list);

console.log(`listToArray(list) // `, listToArray(list));

let longerList = prepend('a', list);

console.log(`nth() // `, nth(3, list));


