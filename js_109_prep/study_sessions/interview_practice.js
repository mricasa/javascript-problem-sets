/*

/*
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
*/


//Nolan
// let progressions2 = array => {
//   let progressions = 0;
//   for (let idx = 0; idx <= array.length - 3; idx++) {
//     for (let idx1 = idx + 1; idx1 < array.length; idx1++) {
//       let difference = array[idx1] - array[idx];
//       if (array.includes(array[idx1] + difference)) {
//         progressions++;
//       }
//     }
//   }
//   return progressions;
// };

// // Test Cases
// console.log(progressions2([1, 2, 3, 5, 7, 9])); // 5
// console.log(progressions2([1, 2, 3, 4, 5]));    // 4
// console.log(progressions2([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

/* Emma
Problem:
- given a sorted array of integers 
- return the number of arrays of 3 elements, with equal differences between the elements, that can be formed from the numbers in the given array

  Rules:
  - the array will be sorted 
  - the array elements will be unique 

Examples & test cases:

  Edge Cases:
  


Data structures:
  Input:
  - array of numbers
  Intermediary:
  - array of subarrays of 'arithmetic progressions'
  Output:
  - number

Notes:
Solution 1:
- create an array of all subarrays of the given array that are 3 elements long
- sort each array smallest to largest 
- filter for only those where (element at index 1 - elem at index 0) is equal to ((element at index 1 - elem at index 0))
- return the length


Algorithm:
Solution2:
- declare function progressions which takes one array argument, arr
- create a "maxDifference" variable which is (second last element of the arr) - first element of the array
- create an empty arr 'results'
- iterate over arr. For each element:
  - loop from 1 to maxDifference(outer loop). On each iteration:
      - create an empty array, progressionArr, 
      - set a variable, currentNum, to 0
      - add current index to first element of arr
      - if this number is in arr, add it to progressionArr. If progressionArr length is 3, push progressionArr to results array
      - if the number is not in arr, continue to the next iteration 
- return the length of the results array
*/ 


/*
Input: An array of numbers
Output: Number

Rules [23 minutes to solve]
===========================
- Set: 3 numbers
- Arithmetic progression: Set of elements that increment by the same value
- Return the number of arithmetic progressions of size 3 that are possible from a list

Implicit requirements
- Must be of size 3


Examples
========
1, 2, 3, 5

By 1...
1 2 3

By 2...
1 3 5

By 3... None

= 2 Possible sequences




Alg
===
- Given an array of numbers
- Declare step limit and initialize it to last element - first element value
- Declare sequenceContainer

- Loop over the numbers in array
  - (Declare startIdx initialized to 0 (increments by 1 while idx is < array length - 2))

  - Declare firstVal, initialiize to the value of array at startingIdx
  - Declare rightSide, initialize to a slice of numbers to the right of the start (.slice(startIdx + 1))

  - Loop over step, initialize to 1, while step is < stepLimit (increment by 1 on each iteration)
    - Call secondAndThird (firstVal, step, and rightside)
    - => extract to secondThirdValues (will be an array of the other two values or false)

    - if secondThirdValues
        is truthy, push to [firstVal].concatenated with secondThirdValues to sequenceContainer
        if false, move onto the next iteration through step
  - END inner loop
- END outer loop

- Return the length of sequence container

================
Helper: secondAndThird (firstVal, step, otherNums)

- Let secondValue = firstVal + step;
- Let thirdValue = firstVal + (step * 2)

- find secondValue in array
- find of thirdValue in array

- If both were found, resturn as a nested array [secondValue, thirdValue];
- else return false
--
*/

/*


Input: An array of numbers
Output: Number

Rules [23 minutes to solve]
===========================
- Set: 3 numbers
- Arithmetic progression: Set of elements that increment by the same value
- Return the number of arithmetic progressions of size 3 that are possible from a list

Implicit requirements
- Must be of size 3


Examples
========
1, 2, 3, 5

By 1...
1 2 3

By 2...
1 3 5

By 3... None

= 2 Possible sequences


Example 2
=========
[1, 2, 3, 5, 7, 9] ==> 5

By 1:
1, 2, 3

By 2:
1, 3, 5
3, 5, 7
5, 7, 9

By 4:
1, 5, 9



1 2 3 5 7 9

1... any in [2 3 5 7 9] === 1 + 2? Yes
3... any in [5 7 9] === 3 + 2? Yes
5... Subset of 3. End

1... any in [2 3 5 7 9] === 1 + 3? No

1... any in [2 3 5 7 9] ==== 1 + 4. Yes
5... any in [7 9]       ==== 5 + 4. Yes


Ceiling for arithmeticStep is the difference between first and last element (trivial)

Alg
- Given an array of numbers
- Declare step limit and initialize it to last element - first element value
- Declare sequenceContainer

- Loop over the numbers in array
  - (Declare startIdx initialized to 0 (increments by 1 while idx is < array length - 2))

  - Declare firstVal, initialiize to the value of array at startingIdx
  - Declare rightSide, initialize to a slice of numbers to the right of the start (.slice(startIdx + 1))

  - Loop over step, initialize to 1, while step is < stepLimit (increment by 1 on each iteration)
    - Call (firstVal, step, and rightside)
    - => extract to secondThirdValues (will be an array of the other two values or false)

    - if secondThirdValues
        is truthy, push to [firstVal].concatenated with secondThirdValues to sequenceContainer
        if false, move onto the next iteration through step
  - END
- END

- Return the length of sequence container

================
Helper: secondAndThird (firstVal, step, otherNums)

- Let secondValue = firstVal + step;
- Let thirdValue = firstVal + (step * 2)

- find secondValue in array
- find of thirdValue in array

- If both were found, resturn as a nested array [secondValue, thirdValue];
- else return false
--
*/





function findSecondThird(firstVal, step, otherNums) {
  let secondVal = firstVal + step;
  let thirdVal = firstVal + (step * 2);

  return (otherNums.includes(secondVal) && otherNums.includes(thirdVal));
}

function progressions(array) {
  let progressionCount = 0;
  
  for (let startingIdx = 0; startingIdx < array.length - 2; startingIdx++) {
    let firstVal = array[startingIdx];
    let rightSide = array.slice(startingIdx + 1);

    for (let step = 1; step < array[array.length - 1]; step++) {
      let sequence = findSecondThird(firstVal, step, rightSide);
      if (sequence) progressionCount += 1;
    }
  }

 return progressionCount;
}

console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

