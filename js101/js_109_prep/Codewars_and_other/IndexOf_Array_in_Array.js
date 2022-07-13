// Can't complete this because I don't know how to throw an error.

// JavaScript's indexOf does not work with arrays as input. This is because
// [1,2] === [1,2] will return false in JavaScript. Many other languages
// have similar quirks.

// However, sometimes it is useful to search for an Array. Write a function
// that looks for an array within a two-dimensional array and returns the
// index of the first matching element. If there is no match, your
// function should return -1.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1

// You will be required to validate the inputs on the following criteria:

//     each element of the array to be searched should be an array;
//     each sub-array in the two-dimensional array should be of length two; and
//     query should be an array of length two.

// If the inputs are not valid you should throw an Error.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error

/**
Input: 2 dimensional array, query (two-element array)
Output: Number (the index of the input or -1)

Rules
=====
- Overall requirements:
  - Input 1 will be an 2-dimensional array to search through
  - Input 2 will be a subarray to search for
  - If there is a match, return the index location of the subarray
  - If there is not a match, return -1
- Input validation requirements:
  - Each element of the array should be a subarray
  - Each subarray should have a length of 2
  - Query should be an array of length 2

Implicit requirements:
  - We use strict equality for the elements of the subarrays
  - Subarray elements are always numbers
  - Thrown error is not specific
  - Query should always be an array

Examples
========
[[1,2],[3,4],[5,6]] 
Query: [1, 2] => 0
Query: [12, 18] => -1
Query: 5 => throw error

[[1,2],[3,4],[5,6]]    Query: [3, 4]

indexCounter = 0
[1, 2] compared with [3, 4]
    idx0, idx1 === idx0, idx1 ?
    No. increment indexCounter by 1

indexCounter = 1
[3, 4] compared with [3, 4]
    idx0, idx1 === idx0, idx1 ?
    YES, return indexCounter

[[1,2],[3,4],[5,6]]    Query: [0, 0]
....
if indexCounter === length of the searched array return -1

Algorithm
=========
Inputs: 2-level nested array (arr), and an array (search) to search on

- If every element of arr is not an array  (!every => typeof === array), throw an error
- If any subarr in arr is not length of 2, (some => length !== 2) throw an error 
- If search length is not 2,               (length !== 2) throw an error
- If search is not an array                (typeof !== array), throw an error

- Declare an indexCounter initialize it to 0
- Loop until indexCounter is no longer < length of arr
  - Declare currentArr, initialize it to arr[indexCounter]
  - Is currentArr[0] === search[0] && currentArr[1] === search[1]
    - If true, return indexCounter
  - Otherwise, increment indexCounter and return to the top of the loop
- LOOP END

- return -1;

 */

// TIME: 23 minutes to for PEDA 

// Code

var searchArray = function(arrayToSearch, query) {
  if (!arrayToSearch.every(element => Array.isArray(element))) {
    throw 'Error';
  } else if (arrayToSearch.some(element => element.length !== 2)) {
    throw 'Error'
  } else if (query.length != 2 || !Array.isArray(query)) {
    throw 'Error';
  }
  
  for (let idx = 0; idx < arrayToSearch.length; idx++) {
    if (arrayToSearch[idx][0] === query[0] &&
        arrayToSearch[idx][1] === query[1]) return idx;
  }
  return -1;
}

// console.log(searchArray([[1,2],[3,4],[5,6]], [3, 4])); // 1
// console.log(searchArray([[1,2],[3,4],[5,6]], [5, 6])); // 2
// console.log(searchArray([[1,2],[3,4],[5,6]], [144, 4])); // -1

//input validation
console.log(searchArray([[1,2],{},[5,6]], [3, 4])); // error
console.log(searchArray([[1,2],[3,4, 12]], [3, 4])); // error
console.log(searchArray([[1,2],[3,4],[5,6]], 'cat' )); // error

// TIME: 20 minutes on CODE
// Ran into bugs with "every" method.
// WHEN YOU WRITE CODE, especially when using the looping abstractions. Avoid one-liners.
// If you write them as oneliners, you won't be able to pick them apart without adding brackets
// and then The auto insert parens will wreck you hard.