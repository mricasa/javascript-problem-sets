/* eslint-disable max-len */
///////////////////////////////////////////////////////////////////////////////
/**
 * Double Char (Part 1)
Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.
 */
///////////////////////////////////////////////////////////////////////////////

// function repeater(string) {
//   return string.split("").map(char => char + char).join("");
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

///////////////////////////////////////////////////////////////////////////////
/**Double Char (Part 2)
Write a function that takes a string, doubles every consonant character in
the string, and returns the result as a new string. The function should
not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace. */
///////////////////////////////////////////////////////////////////////////////

// let regex = /[^0123456789aeiouAEIOU !.-]/; // grossest looking regex ever lol
// function doubleConsonants(string) {
//   return string.split("").map(char => {
//     if (regex.test(char)) {
//       return char + char;
//     } else {
//       return char;
//     }
//   }).join("");
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

///////////////////////////////////////////////////////////////////////////////
/**
 * Reverse Number
Write a function that takes a positive integer as an argument and returns
that number with its digits reversed.
 */
///////////////////////////////////////////////////////////////////////////////

// function reverseNumber(num) {
//   return Number(num.toString().split('').reverse().join(''));
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// eslint-disable-next-line max-len
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

///////////////////////////////////////////////////////////////////////////////
/**
 * Get The Middle Character
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.
 */
///////////////////////////////////////////////////////////////////////////////

// function centerOf(string) {
//   let midPoint = Math.floor(string.length / 2);
//   return string.length % 2 === 0 ? string.slice(midPoint - 1, midPoint + 1) :
//     string[midPoint];
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

///////////////////////////////////////////////////////////////////////////////
/**
 * Always Return Negative
Write a function that takes a number as an argument. If the argument is a
positive number, return the negative of that number. If the argument is a
negative number, return it as-is.
 */
///////////////////////////////////////////////////////////////////////////////

// function negative(number) {
//   if (Math.sign(number) === -1) return number;
//   return number * -1;
// }


// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));    // -0

// // ls solution is more intuitive

// let negativeLS = number => Math.abs(number) * -1;
// console.log(negativeLS(5));     // -5
// console.log(negativeLS(-3));    // -3
// console.log(negativeLS(0));    // -0


///////////////////////////////////////////////////////////////////////////////
/**Counting Up
Write a function that takes an integer argument and returns an array
containing all integers between 1 and the argument (inclusive), in
ascending order.

You may assume that the argument will always be a positive integer.
 */
///////////////////////////////////////////////////////////////////////////////

// function sequence(number) {
//   return [...new Array(number).keys()].map(num => num + 1);
// }

// will try the imperative for loop as well since it has been some time

// function sequence(number) {
//   let result = []
//   for (num = 1; num <= number; num++) {
//     result.push(num);
//   }
//   return result;
// }

// console.log(sequence(5));
// console.log(sequence(3));
// console.log(sequence(1));

// can you use forEach or map in your solution? Why or why not?
// We generally would not be able to unless we first created a helper
// array. We were able to call map above on the array created using
// the spread operator on a new array and keys property.
// But I think the broader concept here is that since forEach and map
// are looping abstractions that loop on the number of elements in an
// array, it would not be practical to use them for this exercise
// since we start with an empty array.
// Without using the spread new Array and keys, I suppose we could
// use forEach on an array with empty slots and use the iterator to
// assign each element.
// this would not, however, be compatible with map, which would not
// perform transformations on empty slots.

/**
 * Name Swapping
Write a function that takes a string argument consisting of a first name,
a space, and a last name, and returns a new string consisting of the last
name, a comma, a space, and the first name.
 */

// function swapName(name) {
//   let nameArr = name.split(" ");
//   if (nameArr.length > 2) {
//     return nameArr.splice(-1) + ", " + nameArr.join(" ");
//   }
//   return nameArr.reverse().join(", ");
// }
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

/**
 * Further Exploration
What if the person has one or more middle names? Refactor the current
solution so that it can accommodate this; the middle names should be
listed after the first name:
 */

// eslint-disable-next-line max-len
// console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

// you could have used pop instead of slice too


///////////////////////////////////////////////////////////////////////////////
/**
 * Sequence Count
 * Create a function that takes two integers as arguments. The first argument
 * is a count, and the second is the starting number of a sequence that your
 * function will create. The function should return an array containing the
 * same number of elements as the count argument. The value of each element
 * should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0,
the function should return an empty array.
 */
///////////////////////////////////////////////////////////////////////////////

// function sequence(times, step) {
//   let result = [];
//   let multiple = step;
//   for (count = 1; count <= times; count++) {
//     result.push(multiple);
//     multiple += step;
//   }
//   return result;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

///////////////////////////////////////////////////////////////////////////////
// Reverse It (Part 1)
// Write a function that takes a string argument and returns a new string
// containing the words from the string argument in reverse order.
///////////////////////////////////////////////////////////////////////////////

// function reverseSentence(sentence) {
//   return sentence.split(" ").reverse().join(" ");
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

///////////////////////////////////////////////////////////////////////////////

// function reverseWords(words) {
//   return words.split(" ").map(word => {
//     if (word.length > 5) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   }).join(" ");
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

///////////////////////////////////////////////////////////////////////////////
/**
 * Reversed Arrays
Write a function that takes an Array as an argument and reverses its elements
in place. That is, mutate the Array passed into this method. The return value
should be the same Array object.

You may not use Array.prototype.reverse().
 */
///////////////////////////////////////////////////////////////////////////////

// function reverse(series) {
//   return series.map((_, idx, arr) => {
//     return arr[arr.length - (idx + 1)];
//   });
// }
//looks like map returns a copy...

// function reverse(series) {
//   let values = series.slice();
//   series.forEach((_, idx) => {
//     series[idx] = values[values.length - (idx + 1)];
//   });

//   return series;
// }

// LS solution uses a left and right index, array destructuring, and a stop
// condition of already assigning half the array

// function reverse(arr) {
//   let leftIndex = 0;
//   let rightIndex = (arr.length - 1);
//   let midpoint = arr.length / 2;

//   while (leftIndex < midpoint) {
//     [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
//     leftIndex += 1;
//     rightIndex += -1;
//   }

//   return arr;
// }


// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true


///////////////////////////////////////////////////////////////////////////////
/*
Matching Parentheses?
Write a function that takes a string as an argument and returns true if all
parentheses in the string are properly balanced, false otherwise. To be properly
balanced, parentheses must occur in matching '(' and ')' pairs.

======
Requirements
======
Must start with open parens
must end with closed parens
number of open parens must match closed parens

parse string for ( & )
if ) is first, return false;
if ( is last, return false

count each type, if they are equal, return true
otherwise return false

*/

// be aware of differences between for in (index) and for of (values)
function isBalanced(string) {
  let symbols = string.match(/[()]/g);
  if (symbols === null) return true;
  if (symbols[0] === ")" || symbols[symbols.length - 1] === "(") return false;

  let counts = [0, 0];
  for (let char of symbols) {
    if (/[(]/.test(char)) {
      counts[0] += 1;
    } else {
      counts[1] += 1;
    }
  }
  return counts[0] === counts[1];

}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

