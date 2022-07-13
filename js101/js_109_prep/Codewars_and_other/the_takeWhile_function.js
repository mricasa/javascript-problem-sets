/*
Input: Array & and predicate function
Output: Array

Rules
=====
- Predicate function can be any predicate (a function that returns true or false after testing some criterion)
- Return the longest prefix of elements such that the predicate is true for each element
- Prefix: The beginning elements of an array (or whole array if applicable)
- Do not mutate the original sequence

Implicit requirements
=====================
- What if all array members return true from the predicate?
- Will the argument always be valid?
- How will we deal with empty arrays?
  - We will create a guard clause for these

DS & A
======
2 4 6 8 10 passed to isEven
T T T T F
=> [2, 4, 6, 8]

Algorithm
=========
- Given an array of values and a predicate function
- Declare a returnArray function, initialize to an empty array
- Iterate over values in array
  - Pass value as an argument to the predicate. Predicate returns...
    - If true: Push the value to returnArray
    - If false: break
- END loop once all values are processed
- Return returnArray
    

*/


function takeWhile (arr, pred) {
  let returnArray = [];
  
  for (let idx = 0; idx < arr.length; idx++) {
    let value = arr[idx];
    if (pred(value)) returnArray.push(value);
    else break;
  }
  
  return returnArray;
}


// alternative solutions use slice rather than adding elements one by one
// because we are look at a simple criterion
// 



function takeWhile2 (arr, pred) {
  for (let idx = 0; idx < arr.length; idx++) {
    let value = arr[idx];

    if (!pred(value)) return arr.slice(0, idx);
  }

  return arr;
}

let isEven = num => num % 2 === 0;

console.log(takeWhile2([2,4,6,7,11], isEven));
console.log(takeWhile2([2,8,6], isEven));


