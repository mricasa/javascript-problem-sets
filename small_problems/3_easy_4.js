///////////////////////////////////////////////////////////////////////////////
/*
How Old is Teddy?
Build a program that randomly generates Teddy's age, and logs it to the
console. Have the age be a random number between 20 and 120 (inclusive).
*/
///////////////////////////////////////////////////////////////////////////////

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor((Math.random() * (max - min + 1)) + min);

// function displayAge() {
//   console.log(`Teddy is ${getRandomIntInclusive(20, 120)} years old!`);
// }

// displayAge();


///////////////////////////////////////////////////////////////////////////////
/*
Searching 101
Write a program that solicits six numbers from the user and logs a message
that describes whether the sixth number appears among the first five numbers.
*/

///////////////////////////////////////////////////////////////////////////////

// const readline = require('readline-sync');

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// let numArr = [];

// prompt("Enter the 1st number:");
// numArr.push(readline.prompt());

// prompt("Enter the 2nd number:");
// numArr.push(readline.prompt());

// prompt("Enter the 3rd number:");
// numArr.push(readline.prompt());

// prompt("Enter the 4th number:");
// numArr.push(readline.prompt());

// prompt("Enter the 5th number:");
// numArr.push(readline.prompt());

// prompt("Enter the 6th number:");
// numArr.push(readline.prompt());

// if (numArr.slice(0,5).includes(numArr[5])) {
// eslint-disable-next-line max-len
//   prompt(`The number ${numArr[5]} appears in ${String(numArr.slice(0, 5))}.`);
// } else {
// eslint-disable-next-line max-len
//   prompt(`The number ${numArr[5]} does not appear in ${String(numArr.splice(0,5))}`);
// }

///////////////////////////////////////////////////////////////////////////////
/*
When Will I Retire?
Build a program that logs when the user will retire and how many more years
the user has to work until retirement.
*/
///////////////////////////////////////////////////////////////////////////////

// const readline = require("readline-sync");
// let currentYear = new Date().getFullYear();

// function prompt(message) {
//   console.log(`=>${message}`);
// }

// prompt("What is your age?")
// let userAge = readline.prompt();

// prompt("At what age would you like to retire?");
// let retirementAge = readline.prompt();
// let yearsWork = Number(retirementAge) - Number(userAge)

// eslint-disable-next-line max-len
// prompt(`It's ${currentYear}. You will retire in ${currentYear + yearsWork}.`);
// prompt(`You have only ${yearsWork} left to go!`);

///////////////////////////////////////////////////////////////////////////////
/*
Palindromic Strings (Part 1)
Write a function that returns true if the string passed as an argument is a
palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter.
*/
///////////////////////////////////////////////////////////////////////////////

// const isPalindrome = function(word) {
//   let wordArr = word.split('');
//   return word === wordArr.reverse("").join("");
// };

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false
// console.log(isPalindrome('356653'));              // true

///////////////////////////////////////////////////////////////////////////////
/*
Palindromic Strings (Part 2)
Write another function that returns true if the string passed as an argument
is a palindrome, or false otherwise. This time, however, your function should
be case-insensitive, and should ignore all non-alphanumeric characters. If you
wish, you may simplify things by calling the isPalindrome function you wrote
in the previous exercise.

===============
Requirements
===============
Ignore alphanumeric characters
ignore case state

coerce to lowercase
and clean out non-alphanumerics into a condensed string


*/
///////////////////////////////////////////////////////////////////////////////
// const isPalindrome = function(word) {
//   let wordArr = word.split('');
//   return word === wordArr.reverse("").join("");
// };

// function isRealPalindrome(word) {
//   word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return isPalindrome(word);
// }
// console.log(isRealPalindrome('madam')          );     // true
// console.log(isRealPalindrome('Madam')          );     // true
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true
// console.log(isRealPalindrome('356653')         );     // true
// console.log(isRealPalindrome('356a653')        );     // true
// console.log(isRealPalindrome('123ab321')       );     // false


///////////////////////////////////////////////////////////////////////////////
/*
Palindromic Numbers
Write a function that returns true if its integer argument is palindromic,
or false otherwise. A palindromic number reads the same forwards and backwards.
*/
///////////////////////////////////////////////////////////////////////////////

// const isPalindrome = function(word) {
//   let wordArr = word.split('');
//   return word === wordArr.reverse("").join("");
// };


// function isPalindromicNumber(num) {
//   return isPalindrome(String(num));
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

///////////////////////////////////////////////////////////////////////////////
/*
Running Totals
Write a function that takes an array of numbers and returns an array with
the same number of elements, but with each element's value being the running
total from the original array.
*/
///////////////////////////////////////////////////////////////////////////////

// function runningTotal(numArr) {
//   let result = [];
//   let acc = 0;
//   let iter = 0;
//   while (iter < numArr.length) {
//     acc += numArr[iter];
//     result.push(acc);
//     iter++;
//   }

//   return result;
// }

// function runningTotal(numArr) { // further exploration
//   let sum = 0;
//   return numArr.map(num => {
//     sum += num;
//     return sum;
//   });
// }
// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

///////////////////////////////////////////////////////////////////////////////
/*
Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more space
separated words and returns an object that shows the number of words of
different sizes.

Words consist of any sequence of non-space characters.
*/
///////////////////////////////////////////////////////////////////////////////

// function wordSizes(words) {
//   let result = {};
//   if (words.length === 0) return {};
//   words.split(" ").forEach(element => {
//     if (!result[element.length]) {
//       result[element.length] = 1;
//     } else {
//       result[element.length] += 1;
//     }
//   });
//   return result;
// }


// console.log(wordSizes('Four score and seven.'));                       //
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  //
// console.log(wordSizes("What's up doc?"));                              //
// console.log(wordSizes(''));                                            //

///////////////////////////////////////////////////////////////////////////////
/*
Letter Counter (Part 2)
Modify the wordSizes function from the previous exercise to exclude
non-letters when determining word size. For instance, the word size of "it's"
is 3, not 4.
*/
///////////////////////////////////////////////////////////////////////////////

// function wordSizes(words) {
//   if (!words) return {};

//   let wordArr = words.split(" ").map(word => word.toLowerCase()
//     .replace(/[^a-z]/g, ""));

//   return wordArr.reduce((result, word) => {
//     let size = String(word.length); // the bug was here. missing exp conv
//     if (!result[size]) {
//       result[size] = 1;
//     } else {
//       result[size] += 1;
//     }
//     return result;
//   }, {});
// }


// console.log(wordSizes('Four score and seven.'));                       //
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  //
// console.log(wordSizes("What's up doc?"));                              //
// console.log(wordSizes(''));                                            //

// Key takeaway here is that you should remember to explicitly convert your
// data types. Addition of object properties will automatically coerce
// the key name into a string.
// The bug in this code was that we were seeing if the array returned
// by Object.keys() contained a numeric values.
// The array only held string representations of number lengths.

///////////////////////////////////////////////////////////////////////////////
/*
Letter Swap
Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.

You may assume that every word contains at least one letter, and that the
string will always contain at least one word. You may also assume that each
string contains nothing but words and spaces, and that there are no leading,
trailing, or repeated spaces.

========
pseudocode
========
split into array of words
transform words by flipping the first and last letter of each word
  let first, last = word first and word last
  first + middle slice + last
join array with space

*/
///////////////////////////////////////////////////////////////////////////////
function swap(sentence) {
  if (sentence.length === 1) return sentence;
  let wordArr = sentence.split(" ").map(word => {
    let [first, last] = [word[0], word[word.length - 1]];
    return last + word.slice(1, -1) + first;
  }
  );

  return wordArr.join(" ");
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"