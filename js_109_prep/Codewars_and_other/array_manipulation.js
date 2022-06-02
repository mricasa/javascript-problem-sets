// Array Manipulation

// Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array 

// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

// the desired output is

// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

// Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the resulting array.

// Note: Return a new array, rather than modifying the passed array.

/**
 * 
 * Input: Array
 * Output: Array
 * 
 * Rules
 * =====
 * - Given an array of numbers
 * - Replace every element with the least greater element to its right
 * - Least greatest defined as: 
 *    - Greater than the element
 *    - AND smaller than all remaining elements 
 * - If there is no greater element, replace with -1
 * - Do not mutate the input array
 *
 * Implicit requirements:
 * - Input is always an array
 * - Elements always numbers
 *
 * Test Cases
 * ==========
 * [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]
 * [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]
 * Observe that the last number will always be -1
 *
 * [2, 4, 18, 16, 7, 3, 9, 13, 18, 10 ]
 * [3, 7, -1, 18, 9, 9, 10, 18, -1, -1]
 * Observe that the greatest number is always replaced with -1
 *
 * DC + A
 * ======
 * [8, 58, 71, 3]
 * [8, 58, 71, 3]
 * [58, 71, -1, -1]
 *
 * Alg
 * ===
 * - Input: Array of numbers
 * - Make a copy of the array, initialize to declared resultArray
 * - Iterate through idx in resultArray:
 *    - declare currentNumber (initialize to resultArray[idx])
 *    - Create a slice of remaining numbers to the right (idx + 1 to end)
 *    - Sort the slice numerically, ascending in value
 *    - FIND the first number in slice that is greater than the currentNumber
 *    - If output of FIND is a number
 *      - Re-assign resultArray[idx] to the output of FIND
 *    - If output is undefined
 *      - Re-assign resultArray[idx] to -1
 * - LOOP ENDS after idx out of boundsd
 * - return resultArray
 *
 */

 
function arrayManip(array) {
  let resultArray = [...array];
  resultArray.forEach((currentNum, idx, arr) => {
    let rightside = arr.slice(idx + 1, arr.length);
    rightside.sort((a, b) => a - b);

    let foundNumber = rightside.find(num => num > currentNum);
    arr[idx] = foundNumber || -1;
  })
  return resultArray;
}

console.log(arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]));
 // [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]

// ======================================================
// ======================================================

// Attempting a solution with map

/**
 * - Transform each value using map:
 *    - Create rightSide array (all values to the right of idx + 1)
 *    - Sort rightSide array, ascending by value
 *    - Find first element in rightSide array that is > currentNum 
 *    - Return find() || -1
 */

function arrayManip2(array) {
  return [...array].map((currentNum, idx, arr) => {
    let rightSide = arr.slice(idx + 1).sort((a, b) => a - b);
    return rightSide.find(num => num > currentNum) || -1;
  })
}

console.log(arrayManip2([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]));
