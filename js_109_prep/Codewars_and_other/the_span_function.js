/*

18 minutes and 44 seconds

Input: One Array; 1 predicate function
Output: Two Arrays

Rules
=====
- Argument 1 is an array
- Argument 2 is a predicate function
  - A predicate function returns a boolean in response to testing a value
    against a criterion (or criteria)
- Returns two arrays
  - First array is the original array up until the item (exclusive) that caused the first failure of the predicate
  - Second array is the rest of the original array

    
      e.g., if predicate is even numbers
      [2, 4, 6, 7, 8, 10] ->
      [2, 4, 6], [7, 8, 10]

- Do not mutate the original array

Implicit requirements:
- Return value is an array of arrays

- If ALL elements satisfy the criteria of the predicate, return a new
    array that is the value of the original array

- If None of the elements satisfy the predicate,
    the first returned array will be [], followed by the value of the
      rest of the array (which would be identical value-wise to the input
        array) 
- Considering valid inputs always

[Understanding the problem at 6.5 minutes]

DS + A
======
idOdd (returns true if the number is odd)
Run through these values
1, 3, 4, 5, 7
1 is true
3 is true
4 is false || Break (we don't care about the rest of the array)

Alg
===
Given an array and a predicate

- Make a shallow copy of the array
- => Initialize to variable arrayCopy

- Find the index of the first item in the arrayCopy that does not
  satisfy the predicate
  - If -1, set it to 0
  - => Initialize to variable cutoff

return two arrays
- First array is spliced arrCopy, from 0 to cutoff (technically it takes size)
- Second array is the remainder of arrCopy


[5 minutes]
*/



function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

var arr1 = [2,4,6,1,4,8];
var arr2 = [1,4,5,7,6];
var arr3 = [13,17,19,11,21];

function span(array, predicate) {
  let arrCopy = [...array];
  let cutoff = arrCopy.findIndex(num => !(predicate(num)));

  if (cutoff === -1) return [arrCopy, []];

  return [arrCopy.splice(0, cutoff), arrCopy];
}

// 6 minutes, 21 seconds on code


console.log((span(arr1, isEven))) //, [[2,4,6],[1,4,8]]);
console.log((span(arr2, isEven))) //, [[], arr2]);
console.log((span(arr3, isOdd))) //, [arr3,[]]);
