function lineBreak() {
  console.log('\n///////////////////////////////\n');
}

///////////////////////////////////////////////////////////////////////////////
// Rotation (Part 1)
// Write a function that rotates an array by moving the first element to the
// end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

/**
 * Return the same array or a new array? New array
 * Argument will always be an array?
 *
 * Input: Array
 * Output: Array
 *
 * Explicit Requirements:
 * do NOT mutate original array
 * Move first element to the end of the array
 * Element other than the first element should not be moved
 * If the array is empty, return an empty array
 * If input is not an array, return undefined
 *
 * Implicit requirements:
 * New array
 *
 * DC + A
 *
 * [] -> []
 * 'cat' -> undefined
 *
 * a, b, c -> b, c, a
 * [1, 2, 3, 4] -> [2, 3, 4, 1]
 *
 * Given an array, arr
 * If input is not an array, return undefined
 * If the array is empty, return empty
 *
 * Declare a result, initialize to an empty array
 * Declare firstElement, initialize it to the first element of arr
 * declare remainingArr, initialize it to the rest of arr (no first element)
 * Join firstElement and remainingArr and push it the result
 * return result
 *
 */
///////////////////////////////////////////////////////////////////////////////

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  return array.slice(1).concat(array[0]);
}
console.log(rotateArray(3532));
console.log(rotateArray([]));


let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

lineBreak();
///////////////////////////////////////////////////////////////////////////////
// Rotation (Part 2)
// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the
// end and shift the remaining digits to the left.

/**
 * Input: Number, Number (count)
 * Output: Number
 *
 * Rules
 * =====
 * Explicit:
 *    Count signifies the number of places the digit is from the end
 *    The rotation is to the end of the number
 *    If there is 1 count to rotate, it effectively results in no rotation
 *    When we rotate a digit from the middle,the other numbers are shifted to
 *      the left
 * Implict:
 *    Argument will be a number
 *    When passed a single digit number, a copy of the number is returned
 *
 * DS + A
 *
 * 1234, count of 1
 * 123 4
 * 1234
 *
 * 1234, Count of 2
 * 1243
 *
 * 1234, Count of 3
 * 1342
 *
 * 1234, Count of 3
 * 12 4, 3
 * 124, 3
 * 1243
 *
 * Given two numbers, a number and count
 *    Declare numArray and convert the numbers to a string of digits
 *    Declare rotatedNumber and assign to COUNT places from end
 *    Extract (remove) from the numArray the number at COUNT places from the end
 *    Appended rotatedNumber to the end of numArray
 *    Return numArray
 *
 * Extracting the rotatedNumber
 *    [1,2,3,4,5], Count = 3
 *    [1,2], [4,5], 3
 *    [1,2,4,5], 3
 *
 * Extracting rotatedNumber, and returning the leftside of the array
 *    Given the numArray and count
 *    NumArray will have to be divided into two parts
 *    Declare partOne and assign it to the first part, ending at index COUNT
 *    Declare partTwo and assign it to the rest, starting with the first number
 *     after rotatedNumber
 *    Merge partOne and PartTwo
 *    Return the new Array
 */
///////////////////////////////////////////////////////////////////////////////
// function rotateRightmostDigits(number, digits) {
//   let numArray = number.toString().split("");
//   let rotatedNumber = numArray.slice(-digits, -digits + 1); // array
//   let rightSide = numArray.splice(-digits + 1);
//   numArray.pop();
//   return Number(numArray.concat(rightSide, rotatedNumber).join(""));
// }

// uh doii... rough day today
// we were supposed to use the method from the previous exercise
// We did not recognize that we could essentially create an input
// that would be appropriate for rotateArray (second half begins with
// the first number for rotateArray)
// ok job anyway. here we go

/**
 * after you halve the strings, you can use the rotateArray method
 * to rotate the right half
 *
 */

function rotateRightmostDigits(number, digits) {
  let numArray = number.toString().split("");
  let rightSide = rotateArray(numArray.splice(-digits));
  return Number(numArray.concat(rightSide).join(""));
}

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917


///////////////////////////////////////////////////////////////////////////////
// Rotation (Part 3)
// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place
// and rotate the final two digits to get 321579. The resulting number is
// called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns
// the maximum rotation of that integer. You can (and probably should)
// use the rotateRightmostDigits function from the previous exercise.

/**
 * Input: Number
 * Output: Number
 *
 * Rules:
 * Explicit:
 *  Leading zeroes can be dropped
 *  Rotate the whole number
 *  Rotate digits to the right of the first ONE digit
 *  Rotate digits to the right of the first TWO digits
 *  Rotate digits to the right of the first THREE digits
 *  ... and so on
 *  Return a number
 *
 *
 * DC + A
 * Input = 735291
 * locked|rotated
 *       |735291
 * 3     |52917
 * 32    |9175
 * 321   |759
 * 3215  |97
 * Result = 321579
 *
 * Given a number
 * Declare numArr and initialize it to the number converted to a string and
 *  split into digits.
 * Set rotationMax to length of the number - 1
 * -----Declare a result and initialize it to an empty array-----
 * Declare currentRotation and set to 0.
 * while currentRotation is less than rotationMax
 *    Declare lockedSide to a slice of numArr ending at currentRotation
 *    Declare rotatedSide to a slice of numArr starting from currentRotation
 *    Rotate rotatedSide
 *    Reassign numArr to lockedSide merged with rotatedSide
 *    Increment currentRotation
 * Return numArr
 *
 * [redoing the alogorithm to see where we can lead into rotate rightmost]
 * Obviously, it is:
 *
 * locked|digits | #
 *       |735291   6
 * 3     |52917    5
 * 32    |9175     4
 * 321   |759      3
 * 3215  |97       2
 *
 * Loop with rotatedDigits initialized as numArr.length
 *  number = rotateRightmostDigits(number, rotatedDigits)
 * BREAK when rotatedDigits === 2
 */
///////////////////////////////////////////////////////////////////////////////

// function maxRotation(number) {
//   let numArr = number.toString().split("");
//   let rotationMax = numArr.length - 1;
//   for (let rotation = 0; rotation < rotationMax; rotation++) {
//     let locked = numArr.slice(0, rotation);
//     let right = rotateArray(numArr.slice(rotation));
//     numArr = locked.concat(right);
//   }
//   return Number(numArr.join(""));
// }
// something is wrong. found it. was double incrementing

// redoing by calling rotateRightmostDigits. That was easy!

// function maxRotation(number) {
//   let rotatedCount = number.toString().length;
//   for (;rotatedCount >= 2; rotatedCount--) {
//     number = rotateRightmostDigits(number, rotatedCount);
//   }
//   return number;
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

// lineBreak();