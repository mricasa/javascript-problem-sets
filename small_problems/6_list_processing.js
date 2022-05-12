/* eslint-disable max-len */
function lineBreak() {
  console.log("\n==========================================\n");
}

///////////////////////////////////////////////////////////////////////////////
/**Sum Of Digits
Write a function that takes one argument, a positive integer, and returns the
sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum. */
///////////////////////////////////////////////////////////////////////////////

// function sum(number) {
//   return number.toString().split("").reduce((sum, num) => {
//     return sum + Number(num);
//   }, 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

///////////////////////////////////////////////////////////////////////////////
/**
 * Alphabetical Numbers
Write a function that takes an array of integers between 0 and 19 and returns
an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Example:


 */
///////////////////////////////////////////////////////////////////////////////

let vals = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let toWord = {};

for (let [index, element] of vals.entries()) {
  toWord[index] = element;
}

let toNumber = Object.fromEntries(Object.entries(toWord).map((entry) => {
  return [entry[1], entry[0]];
}));

console.log(toWord["2"]);
console.log(toWord["0"]);
console.log(toNumber['eighteen']);

function alphabeticNumberSort(numberList) {
  return numberList.map((number) => toWord[number]).sort().map(word => {
    return toNumber[word];
  });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Good job lol. but you will need to redo this once you learn sort
// Need to hit the course content at this point.

///////////////////////////////////////////////////////////////////////////////
// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

/**
 * Input: Array 1, Array 2
 * Output: Array
 *
 * Explicit requirements:
 *  Arrays contain a list of numbers
 *  Output array is a single-level list of numbers
 *  Neither argument will be an empty array
 *  Numbers are products of all combinations of number pairs
 *  Returned array should be sorted in ascending order
 * Implicit requirements:
 *  Number pairs do not need to be unique pairings (2 x 4, and 4x 2) are
 *   different
 *  Input will always be two arrays
 *  Returns a new array
 *
 * DS + A
 * [1, 2], [3, 2, 1] ->
 * [3, 2, 1], [6, 4, 2] ->
 * [1, 2, 2, 3, 4, 6]
 *
 * Given two arrays
 * Declare result, assign to empty array
 * Loop over elements in array 1
 *  Declare a products variable, initialize to empty array
 *  Declare firstNumber as the element in array 1
 *  Loop over elements in array 2
 *    Declare secondNumber as the element in array 2
 *    Multiply the firstNumber and secondNumber together
 *    Add the product to the products array
 *    Return to the start of the loop
 *  End when all of the array 2 elements are processed.
 *  Add the products array to the result
 *  Return to the start of the outer loop
 *  End when all of the array 1 elements are processed.
 * Return the result as a single level array sorted in ascending order
 */
///////////////////////////////////////////////////////////////////////////////


lineBreak();

// function multiplyAllPairs(array1, array2) {
//   let result = [];
//   array1.forEach(firstNumber => {
//     let products = [];
//     array2.forEach(secondNumber => {
//       products.push(firstNumber * secondNumber);
//     });
//     result.push(products);
//   });
//   result = result.flat()
//   return result.sort((a, b) => a - b);
// }

// we could have pushed directly to result. This could have been apparent,
// but we were locked in by our data structures example to think about
// having subarrays as the intermediary step. all good

function multiplyAllPairs(array1, array2) {
  let result = [];
  array1.forEach(firstNumber => {
    array2.forEach(secondNumber => {
      result.push(firstNumber * secondNumber);
    });
  });
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]


lineBreak();
///////////////////////////////////////////////////////////////////////////////
// Leading Substrings
// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first
// letter of the word, and the list should be ordered from shortest to
// longest.

/**
 * Input: String
 * Output: Array of strings
 *
 * What is a substring? string subcomponents of the overall string, and
 *  string iteslf
 * We are considering length for the sort, but should we also consider lexico-
 *  ordering of the string characters?
 * How shall we handle empty string arguments?
 * Do we assume that the input is always a string?
 *
 * Explicit requirements:
 *  Return an array of all substrings from a string beginning with the
 *   First Letter of the word
 *  list should be ordered in the shortest length to longest
 *
 * Implicit requirements:
 *  After length, use lexiciographic ordering, ascending
 *  Input will always be a string
 *  If the string is empty, return an empty array?
 *  The string itself is a substring
 *
 * =========
 * DC + A
 * 'cat'
 * c, ca, cat
 *
 * Given a string
 * Declare result, initialize to an empty array
 * Loop break condition will be the length of the string.
 * Declare a looping variable, ending index.
 * Loop over the array of characters with ending index
 *  1. First character of the string to result
 *        increment ending index
 *  2. First and second character of the string to result
 *        increment ending index
 *  3. First, second, and third character of the string to result
 *        increment ending index
 * End of loop when ending index is equal to the length of the string
 * sort result by length (it is already sorted in this way by the alg)
 * return the result
 * =========
 */

//  Rewrite leadingSubstrings using list processing functions. That is,
//  convert the string into an array of some sort and use functions like
//  map, filter, or reduce to get the desired substrings. (You will also
//   need to use join.) Try not to use forEach as that is too similar to
//   the for loop approach.
///////////////////////////////////////////////////////////////////////////////

// function leadingSubstrings(string) {
//   let result = [];
//   for (let endIndex = 1; endIndex <= string.length; endIndex++) {
//     result.push(string.slice(0, endIndex));
//   }
//   return result;
// }

// Further exploration (using list processing)
/**
 * Given a string
 * make an Array of characters of the string, then
 * Transform it using the declaring item, currentIndex, and the array itself
 * Loop over character elements
 * Let endIndex = currentIndex + 1;
 *  Declare an subarr spanning from from array's index 0 to currentIndex + 1;
 *  Conver the subarr to string, and return it
 * Loop ends after all characters are processed
 *
 * Iteration 1, index 0: character: 'c' -> string: 'c'
 * Iteration 2, index 1: character: 'a' -> string: 'ca'
 * Iteration 3, index 2: character: 't' -> string: 'cat'
 *
 */

// function leadingSubstrings(string) {
//   let charArr = string.split("");
//   return charArr.map((_, idx) => {
//     return charArr.slice(0, idx + 1).join('');
//   });
// }

// !! KEY TAKEAWAY: Just realized that the third parameter, array, is not necc.
// required because we could just used the variable pointing to the array as the
// identifier. I wonder in which situations it could be advantageous to using
// the parameter array?
// I suppose if the list processing function were called on a collection literal
// that you would certainly need a way to refer to the array itself since we
// would not have a name.
//

// actually not too shabby, but definitely takes a bit more time to plan.
// function leadingSubstrings(str) {
//   let arr = str.split('');
//   let newArray = [];

//   arr.reduce((a,b) => {
//     console.log('a at the start of callback:', a);
//     a.push(b);
//     console.log('b inside map: ', b);
//     newArray.push(a.join(''));
//     console.log('a at the end of callback', a);
//     return a;
//   }, []);

//   return newArray;
// }

// function leadingSubstrings(string) {
//   let charArr = string.split('');
//   return charArr.reduce((result, currentChar) => {
//     let substring = result.slice(-1) + currentChar;
//     return result.concat(substring);
//   }, []);
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

lineBreak();

///////////////////////////////////////////////////////////////////////////////
// All Substrings
// Write a function that returns a list of all substrings of a string. Order
// the returned list by where in the string the substring begins. This means
// that all substrings that start at index position 0 should come first, then
// all substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise

/**
 * Input: string
 * Output: array of strings
 *
 * Explicit requirements:
 *   Returns a list of ALL substrings
 *   order by what position the substring begins (ie., in abc, substrings
 *    of a go first, b goes second, c goes last)
 *   After ordering by substring start, order by shortest to longest
 *   May use previously created function
 * Implicit requirements:
 *   Will always be a string
 *
 *
 * 'abc'
 * a, ab, abc
 * b, bc,
 * c
 *
 * 'fish'
 * f, fi, fis, fish
 * i, is, ish
 * s, sh
 * h
 *
 * Need to pass in substring chunks
 * abc. starting: 0. ending: 4
 * bc. starting: 1. ending: 4
 * c. starting: 2. ending: 4
 *
 * fish. starting: 0
 * ish. starting 1.
 * sh. starting 2.
 * h. starting 3.
 *
 *
 * Algorithm
 * Given a string
 * declare a result variable and initialize to []
 * loop using starting index to divide the string..
 *    for each iteration, get a chunk of the string from starting index
 *       to the end of the string.
 *    pass the chunk into the leading substrings method
 *    add the result to result
 * END the loop once the starting index is equal to the length of the string.
 * flatten the result variable
 * return result variable
 */

//  Further Exploration
//  Rewrite substrings using list processing functions. That is, convert
//  the string into an array of some sort and use functions like map, filter,
//  or reduce to get the desired substrings. (You will also need to use join.)
//  Try not to use forEach as that is too similar to the for loop approach.
///////////////////////////////////////////////////////////////////////////////


// function leadingSubstrings(string) {
//   let charArr = string.split("");
//   return charArr.map((_, idx) => {
//     return charArr.slice(0, idx + 1).join('');
//   });
// }

// function substrings(string) {
//   let result = [];
//   for (startingIndex = 0; startingIndex < string.length; startingIndex++) {
//     let currentString = string.slice(startingIndex);
//     result = result.concat(leadingSubstrings(currentString));
//   }
//   return result;
// }


//Further Exploration

/**
 * Given a string
 * split the string into an array of characters
 * Transform each character in the array to substrings
 * Loop with a starting index
 *    slice chars from array from starting index until end
 *    join the chars, and pass them to the substrings functions
 *    the return of the substrings functions will be in array form, but return
 *    it to map anyway (will flatten later)
 * END loop once we have moved through entire index
 * flatten the array
 */

// function substrings(string) {
//   let charArr = string.split("");
//   return charArr.map((_, idx, array) => {
//     let substr = array.slice(idx).join("");
//     return leadingSubstrings(substr);
//   }).flat()
// }

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

///////////////////////////////////////////////////////////////////////////////
// Palindromic Substrings
// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters
// that reads the same forward and backward. The substrings in the returned
// list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous
// exercise.

// For the purpose of this exercise, you should consider all characters and
// pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and
// 'Abc-bA' are not. In addition, assume that single characters are not
// palindromes.

/**
 * Input: String
 * Output: Array
 *
 * Explicit requirements:
 *    Output array contains palindromes (palindromes read the same forward and
 *     backward)
 *    Substring palindromes in the array should be in order of appearance
 *    Duplicates should be included multiple times
 *    Palindromes are case sensitive
 *    Single letters are not paldindromes
 *    non-alphabetic characters should also be considered
 * Implicit requirements:
 *    Input will always be a string
 *    Input will never be an empty string
 *
 * DC & A
 *
 * 'madam'
 * Substrings (array)
 * m, ma, mad, mada, madam
 * a, ad, ada, adam
 * d, da, dam,
 * a, am,
 * m
 * -> ['madam', 'ada']
 *
 * Given a string
 * declare result and initialize to empty array
 * Extract all the substrings out of the string
 * Looping over each substring, is it a palindrome?
 *    If yes, add it to the result
 *    If no, ignore it
 * End when we have iterated over all substrings
 * return result
*/
///////////////////////////////////////////////////////////////////////////////

function palindromes(string) {
  let substrings = retrieveSubstrings(string);
  return substrings.filter(substring => {
    return isPalindrome(substring);
  });
}

function isPalindrome(string) {
  if (string.length === 1) return false;
  return (string === string.split("").reverse().join(""));
}

function leadingSubstrings(string) {
  let charArr = string.split("");
  return charArr.map((_, idx) => {
    return charArr.slice(0, idx + 1).join('');
  });
}

function retrieveSubstrings(string) {
  let result = [];
  for (let startingIndex = 0; startingIndex < string.length; startingIndex++) {
    let currentString = string.slice(startingIndex);
    result = result.concat(leadingSubstrings(currentString));
  }
  return result;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

///////////////////////////////////////////////////////////////////////////////
// Sum of Sums
// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array. Examine the examples to see
// what we mean. You may assume that the array always contains at least one
// number.

/**
 * Input: array of numbers
 * Output: Number
 *
 * Explicit requirements:
 *    Sum of sums of each leading subsequence
 *    Single number is the result
 * Implicit requirements:
 *    Always an array of numbers
 *    Array will never be empty
 *
 * DC + A
 *
 * Example 1 (List of numbers)
 * 3 5 2
 * (3) + (3 + 5) + (3 + 2) -> 21
 *
 * Example 2
 * 4
 * (4) -> 4
 *
 * Example 3
 * 3 5 2
 *                                 indices         index range
 * 3 + 0          = 3               0                 0, 1
 * 3 + 5          = 3 + 8           0, 1              0, 2
 * 3 + 5 + 2      = 3 + 8 + 10      0, 1, 2           0, 3
 *
 * Algorithm
 * Given a list of numbers
 * Declare a result variable, it will return the sum of leading sums
 * Set the firstNumber to the first element of the array
 * Declare a counter and set it to 0
 * For the length of the array, we will create leading sums
 *  - For the 0th iteration, the sum is the first number, itself. add it to
 *    the result variable
 *  - Each successive iteration will be the first number + the elements at the
 *    respective iteration indices. Add each sum to the result variable
 *  End once all elements are processed
 * Return the result variable
 */
///////////////////////////////////////////////////////////////////////////////

// function sumOfSums(numberArr) {
//   let result = 0;
//   for (let endIndex = 1; endIndex <= numberArr.length; endIndex++) {
//     let subsequence = numberArr.slice(0, endIndex);
//     result += subsequence.reduce((sum, num) => sum + num);
//   }
//   return result;
// }

// function sumOfSums(array){
//   let n=0;
//   let sum=0;
//   for (let i of array){
//     n=n+i;
//     sum+=n;
//   }

//   console.log(sum);

// }

// sumOfSums([3, 5, 2]);

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));  // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


///////////////////////////////////////////////////////////////////////////////
// Grocery List
// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains
// a fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
// we return an array that contains 3 apples, 1 orange, and 2 bananas.
///////////////////////////////////////////////////////////////////////////////