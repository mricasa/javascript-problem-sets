/* eslint-disable id-length */
/* eslint-disable max-len */
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

// eslint-disable-next-line no-unused-vars
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


///////////////////////////////////////////////////////////////////////////////
// Stack Machine Interpretation
// Explanation is pretty dense. Visit the webpage for the description
// https://launchschool.com/exercises/026e99f0


/**
 * Rules
 * =====
 * GENERAL DETAILS
 * register: the current value. not part of the stack.
 * stack: stack of values. values are pushed and popped to the stack.
 * To use a value, it is popped from the stack, and then used in the
 * operation
 * Results of operations are stored back in the register
 * (does not seem to be any action that flushes the register)
 *
 * SPECIFIC REQUIREMENTS
 * All operations are integer operations
 * Programs will be supplied via string argument
 * May assume all arguments are valid
 * Initial values of the stack is [], register is 0
 *
 * REQUIRED OPERATIONS or TOKENS
 * n: Place a value, n, in the register. Do not modify stack
 * PUSH: Push a register value onto the stack. Leave the value in register.
 * ADD: Pop a value from the stack and add it to the register value, storing
 *    the result in the register.
 * SUB:  Pop a vlaue from the stack and subtract it from the register value,
 *    storing the result in the register
 * MULT: Pop a value from the stack and multiply it by the register value,
 *    storeing the result in the register
 * DIV: Pop a value from the stack and divide the register value, storing the
 *    integer result back in teh register
 * REMAINDER: Pop a value from the stack and divide the register value by the
 *    stroing the integer remainder of the division back in the register
 * POP: remove the topmost item from the stack and place in the register
 * PRINT: Print the register value.
 */
/*

MULT Example
Stack: [3, 6, 4]
Register: 7

Operation? MULT

Stack: [3, 6]
7 * 4
Register: 28

DC + A
TOKENS as OBJECTS PROPERTIES.

declare a stack initialize to an empty list
declare a register initialize to 0

STRING INTERPRETER
Split input string into an array of words
transform everything in to all caps
Iterate over the words
  If the word isANumber
    reassign the REGISTER to that value (extract this?)
  ELSE (assuming all valid inputs)
    use the token to execute the function call for that operation
END after the entire string is processed
--

FUNCTION: toRegister(N)
  assigns register to number n

FUNCTION: add (similar for all mathematical operations)
  declare the operand and assign it to POP
  Register value = Register value + operand

FUNCTION: print
  log the value of the register

FUNCTION PUSH
  push the register value onto the stack.
  leave value in register

FUNCTION POP
  remove topmost item from the stack and
  PLACE in the register

FUNCTION: isANumber (predicate)
  if the string number is that number as a number, it's a number


  Further Exploration
Refactor the minilang function to include some error handling. In particular,
the function should detect and report empty stack conditions (trying to
use a value from the stack when there are no values), and invalid
tokens in the program. Ideally, the function should return an error
message if an error occurs, or undefined if the program runs successfully.
*/
///////////////////////////////////////////////////////////////////////////////

function isANumber(word) {
  // eslint-disable-next-line no-self-compare
  return (Number(word) === Number(word)); // NaN is not equal to NaN
}


let stack = [];
let register = 0;

let operation = {
  PUSH: function() {
    stack.push(register);
  },
  POP: function() {
    register = stack.pop();
  },
  PRINT: function() {
    console.log(register);
  },
  ADD: function() {
    register += stack.pop();
  },
  SUB: function() {
    register -= stack.pop();
  },
  MULT: function() {
    register *= stack.pop();
  },
  DIV: function() {
    register = Math.floor(register / stack.pop());
  },
  REMAINDER: function() {
    register %= stack.pop();
  }
};


function minilang(string) {
  let commands = string.split(" ");
  commands.forEach(token => {
    if (isANumber(token)) {
      register = Number(token);
    } else {
      operation[token]();
    }
  });

}
// minilang('PRINT');
// minilang('5 PUSH 3 MULT PRINT');
// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// minilang('5 PUSH POP PRINT');
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');


///////////////////////////////////////////////////////////////////////////////
// Word to Digit
// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to
// its corresponding digit character.

/**
 * Input: String
 * Output: String
 *
 * Convert occurrences of number words to corresponding digits
 *
 * Implicit assumptions:
 * input will always be a string
 * number word will not occur near punctuation
 *
 * DC + A
 *
 * Given a string
 * Create simple object numWords with number words mapped to numbers
 * Declare wordsArr and initialize it to the string split into words
 * Iterate over the words
 *    Test whether each word is a property of the numWords object
 *       If yes,
 *         Change the word into the number
 *       Otherwise
 *         leave it alone
 *    Move onto the next iteration until finished.
 */
// Further exploration: Can you refactor the function so that it does not use a
// loop?
// ..... I dont think i will be able to do this until i read the regex book.

const NUM_WORDS = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  ten: '10'
};

function wordToDigit(words) {
  let wordArr = words.split(" ");
  return wordArr.map(word => {
    if (Object.keys(NUM_WORDS).includes(word)) {
      return NUM_WORDS[word];
    } else {
      return word;
    }
  }).join(" ");
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

///////////////////////////////////////////////////////////////////////////////
// Fibonacci Numbers (Recursion)
// Write a recursive function that computes the nth Fibonacci number, where
// nth is an argument passed to the function.

// DC + A
/*
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

F(3) = F(2) + F(1)
F(3) = 1 + 1 = 3

F(4) = F(4 - 1) + F(4 - 2)
  F(3) = 2
  F(2) = 1
  F(4) = 3

Base condition is if n is 2 or 1, return 1

Alorithm

Given a number
If that number is less than or equal to 2
  return 1
Else
  return Fib(that number - 1) + Fib(that number - 2)

*/
///////////////////////////////////////////////////////////////////////////////
// I was studying this using some other curriculum, so this is easy.
// not sure if I could get it otherwise.

// function fibonacci(n) {
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

///////////////////////////////////////////////////////////////////////////////
/*
Fibonacci Numbers (Procedural)
In the previous exercise, we developed a recursive solution for computing
the nth Fibonacci number. In a language that is not optimized for
recursion, some (but not all) recursive functions can be extremely
slow and may require massive quantities of memory and/or stack space.
If you tested for bigger nth numbers, you might have noticed that
getting the 50th fibonacci number already takes a significant amount of
time.

Fortunately, every recursive function can be rewritten as a
non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its
results without using recursion.

1, 1, 2, 3

*/
///////////////////////////////////////////////////////////////////////////////
// function fibonacci(number) {
//   let resultArr = [1, 1];
//   let position = 3;
//   while (position <= number) {
//     let firstTerm = resultArr[resultArr.length - 1];
//     let secondTerm = resultArr[resultArr.length - 2];
//     resultArr.push(firstTerm + secondTerm);
//     position++;
//   }
//   return resultArr.pop();
// }

// // LS solution.
// // not pushing to an array, but dynamically updating the elements of the
// // array.

// // function fibonacci(number) {
// //   let previousTwo = [1, 1];
// //   for (counter = 3; counter <= number; counter++) {
// //     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
// //   }
// //   return previousTwo[1];

// // }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

///////////////////////////////////////////////////////////////////////////////
// Fibonacci Numbers (Memoization)
// Our recursive fibonacci function from an earlier exercise isn't very
// efficient. It starts slowing down with an nth argument value as low as
// 35. One way to improve the performance of our recursive fibonacci function
// (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future
// reuse, instead of computing it from scratch every time it is needed. In the
// case of our recursive fibonacci function, using memoization saves calls to
// fibonacci(nth - 2) because the necessary values have already been computed
// by the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

///////////////////////////////////////////////////////////////////////////////

lineBreak();

let fibonacciMemo = {};

function fibonacci(n) {
  if (n <= 2) return 1;
  if (fibonacciMemo[n]) {
    return fibonacciMemo[n];
  } else {
    fibonacciMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fibonacciMemo[n];
  }
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(39));      // 63245986
console.log(fibonacci(1000));    // 4.346655768693743e+208

