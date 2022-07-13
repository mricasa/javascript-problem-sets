/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
function lineBreak() {
  console.log('\n==================================\n');
}

///////////////////////////////////////////////////////////////////////////////
// Uppercase Check
// Write a function that takes a string argument and returns true if all of
// the alphabetic characters inside the string are uppercase; false otherwise.
// Ignore characters that are not alphabetic.

/**
 * Input: String
 * Output: Boolean
 * ====================
 * Explicit Requirements:
 *   if all characters are uppercase, return true
 *   else, return false
 *   Ignore characters that are not alphabetic
 * Implicit Requirements:
 *   Input will always be a string
 *   If passed an empty string, return true
 *   If a string does not have any alphabetic characters, return true x
 */

/**
 * Data structure
 *
 * Example 1
 * 'Four Score'
 * ['F', 'o', 'u', 'r', 's'] ...
 * Iterate over individual characters.
 *
 * =========
 * Algorithm
 * =========
 * [Imperative version]
 * Given a string
 * Declare the array charArr and initialize it to an array containing the string
 * characters;
 * If the size of the array is 0, the result is true. End function.
 * Declare a counter and initialize to 0
 * Iterate over the array of characters
 *    If the character is not an alphabetical character, continue
 *    If the character is equal to the uppercase version of the character,
 *    continue;
 *    If the character is not equal to the uppercase version of the character,
 *    return false;
 *
 * [Declarative version]
 * Given a string
 * if the length of the string is 0, return true
 * Declare the array charArr and intiialize it to an array containing the string
 *  characters;
 * Declare a new array, containing only characters that are alphabetical
 * if everything in the new array is uppercase, return true; otherwise false
 *
 * LS Version....... apparently you don't need to screen anything or convert to
 * array. Data structure locked me into thinking about arrays
 * Happy I got the practice though. Maybe we should think about exploring
 * different data structures during that step
 *
 * Given a string
 * Return whether the string is all caps
*/

// const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// function isUppercase(string) {
//   if (!string) return true;
//   let charArr = string.split("");
//   let result = true;
//   for (let counter = 0; counter < charArr.length; counter++) {
//     let character = charArr[counter];
//     if (!ALPHABET.includes(character)) continue;
//     if (!(character === character.toUpperCase())) result = false;
//   }
//   return result;

// }
// console.log(isUppercase('t'));
// declarative solution using filter and every. much faster than using
// the general for loop.
// function isUppercase2(string) {
//   if (string.length === 0) return true;
//   let charArr = string.split("");
//   let alphabeticChars = charArr.filter(char => ALPHABET.includes(char));
//   return alphabeticChars.every(char => char === char.toUpperCase());
// }
// console.log(isUppercase2('t'));

// function isUppercase3(string) {
//   return (string === string.toUpperCase());
// }

// console.log(isUppercase3('t'));               // false
// console.log(isUppercase3('T'));               // true
// console.log(isUppercase3('Four Score'));      // false
// console.log(isUppercase3('FOUR SCORE'));      // true
// console.log(isUppercase3('4SCORE!'));         // true
// console.log(isUppercase3(''));                // true


// lineBreak();

///////////////////////////////////////////////////////////////////////////////
// Delete Vowels
// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed.

// Does this return a new array?
// Is it case insensitve?

/**Problem
 * Input: Array of strings
 * Output: Array of strings
 *
 * Explciit Requirements:
 *  Vowels are aeiou
 *  Result is an array of strings
 *  Result strings are the same string values except for vowels
 * Implicit Requirements:
 *  Case does not matter in removing the values
 *  If passed an empty array, return an empty array
 *  Arrays will always contain strings
 *  Return a new string rather than mutate
 *
 *
 * DS + A
 * ['abc'] -> ['bc']
 * ['ABC', 'AEIOU'] -> ['bc', '']
 *
 * Algorithm (Imperative)
 * Given an array of strings
 * declare constant VOWELS and init to aeiou
 * Declare a result and intialize an empty array. This will contain
 *  our array of strings less the vowels
 * Loop over each string in array
 *  Initialize a noVowels string
 *  Per string, make it an array, and loop over each character
 *    lowercase the char
 *    If the character is a vowel, move onto the next iteration
 *    If it is not a vowel, concatenate it to noVowels
 *  End when we have processed each character
 *  Add noVowels string to the result as an element
 *  Move onto the next strings, and repeat the iteration over characters.
 * End after done with all strings in the input array
 * Return our result
 *
 * Algorithm (Declarative)
 * Given an array of strings
 * Iterate over each string and transform them
 *  Remove vowelsconsole.log('==========================');

 * Remove vowels: replace values with blankspace
 */

// Imperative solution
// function removeVowels(array) {
//   const VOWELS = 'aeiou';
//   if (array.length === 0) return [];
//   let result = [];
//   for (let counter = 0; counter < array.length; counter++) {
//     let currentStringChars = array[counter].split("");
//     let noVowels = "";
//     for (let counter = 0; counter < currentStringChars.length; counter++) {
//       let character = currentStringChars[counter];
//       if (VOWELS.includes(character.toLowerCase())) continue;
//       noVowels = noVowels.concat(character);
//     }
//     result.push(noVowels);
//   }
//   return result;
// }


// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// Declarative solution
// function removeVowels2(array) {
//   const VOWELS = /[AEIOU]/gi; // global and case insensitive flags
//   return array.map(string => {
//     return string.replace(VOWELS, "");
//   });
// }

// console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// lineBreak();

///////////////////////////////////////////////////////////////////////////////
// Lettercase Counter
// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.

/**
 * Input: String
 * Output: Object
 *
 * Explicit Requirements:
 *  Count the characters that are:
 *    Uppercase
 *    Lowercase
 *    Neither (chars that are not alphabetical chars)
 *  Output will be an object with properties are the labels of char type
 *  Values that are the acutal counts
 *
 * Implicit Requirements:
 *  An object with the 3 properties will be always be
 *   returned when the string is empty or when there are
 *   no upcase / lowercase characters;
 *  Assuming that the input will always be a string
 *  Whitespace is considered a neither character
 *
 * DC + A
 * '123' -> { lowercase: 0, uppercase: 0, neither: 3};
 * 'AbC1' -> { lowercase: 1, uppercase: 2, niether: 1}
 *
 * Algorithm (Imperative)
 * ======================
 * Given a string;
 * Declare a result object counts and initialize properties for lowercase,
 *  uppercase and neither. Set all the properties to 0;
 * Loop over the characters in the string;
 *  If the character is lowercase, increment the count by 1
 *  If uppercase, increment the count by 1
 *  If neither, increment the count by 1
 * End the loop
 * Return the result object
 *
 * (Solution B)
 * =====================
 * I think it would have to be the same, but we use forEach
 */

///////////////////////////////////////////////////////////////////////////////

// imperative
// this had a ternary for the incrementation of lowercase vs. uppercase
// it was pretty but it exceed the 80 char count :(
// function letterCaseCount(string) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};
//   for (let counter = 0; counter < string.length; counter++) {
//     let char = string[counter];
//     if (isAlphabetical(char)) {
//       if (char === char.toLowerCase()) {
//         counts.lowercase += 1;
//       } else {
//         counts.uppercase += 1;
//       }
//     } else {
//       counts.neither += 1;
//     }
//   }
//   return counts;
// }

// Can this be refactor to get rid of the nested if statement?
// eww... idk... technically, yes, we did get rid of it
// but it isn't really what I expected.

// function letterCaseCount(string) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};
//   for (let counter = 0; counter < string.length; counter++) {
//     let char = string[counter];
//     if (!isAlphabetical(char)) {
//       counts.neither += 1;
//       continue;
//     };
//     if (char === char.toLowerCase()) {
//       counts.lowercase += 1;
//     } else {
//       counts.uppercase += 1;
//     }
//   }
//   return counts;
// }
///////////////////////////////////////////////////////////////////////////////
//Solution B
//ef it i'll use the ternary

// function letterCaseCount(string) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};
//   string.split("").forEach(char => {
//     if (!isAlphabetical(char)) {
//       counts.neither += 1;
//       return;
//     }
//     // eslint-disable-next-line space-infix-ops
//     char === char.toLowerCase() ? counts.lowercase += 1 :counts.uppercase += 1;
//   });
//   return counts;
// }
// function isAlphabetical(character) {
//   let code = character.toLowerCase().charCodeAt();
//   return (code >= 97 && code <= 122);
// }

// REGEX solution (ls)
// Note the use of || shortcircuiting to screen out null values returned by
// match during assignment of the object value variables

// function letterCaseCount(string) {
//   let lowercaseChars = string.match(/[a-z]/g) || [];
//   let uppercaseChars = string.match(/[A-Z]/g) || [];
//   let neitherChars = string.match(/[^a-z]/gi) || [];
//   return {
//     lowercaseChars: lowercaseChars.length,
//     uppercase: uppercaseChars.length,
//     neither: neitherChars.length
//   };
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }\

// lineBreak();

///////////////////////////////////////////////////////////////////////////////
// Capitalize Words
// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent
// characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.
///////////////////////////////////////////////////////////////////////////////

/*
Input: String
Output: String

Explicit Requirements:
  - First character of every word is capitalized
  - remaining characters are lowercase
  - Word is defined as any sequence of non-whitespace characters

Implicit Requirements:
  - input is always a string
  - when an empty string, return an empty string
  - If the word begins with a non-alphabetic character, do not capitalize the
    first letter of the word;

Alg
  Given a string
  declare a result array (will convert it to string later)
  split into list of words (word is any sequence on non-whitespace chars)
  iterate over list, processing each word
    declare variable first letter and set it to the first character of word
    declare variable remainder and set it to the word less the first character
    Concatenate the first letter, capitalized and the remainder
    Push the concatenated string to the result array.
    Continue these steps for each word
  END
  return result array converted into a string.
 */

// function wordCap(string) {
//   let result = [];
//   let wordArr = string.split(" ");
//   wordArr.forEach(word => {
//     let firstLetter = word[0];
//     let remainder = word.slice(1);
//     result.push(firstLetter.toUpperCase() + remainder);
//   });
//   return result.join(" ");
// }

// Map
// function wordCap(string) {
//   return string.split(" ").map(word => {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   }).join(" ");
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


// lineBreak();

///////////////////////////////////////////////////////////////////////////////
// Swap Case
// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.
///////////////////////////////////////////////////////////////////////////////
/*

============
Input: String
Output: String

Explicit requirements:
- Lowercase letters become uppercased
- Uppercase letters become lowercased
- All other characters should not change

Implicit requirements:
- Input will always be a string

Algorithm
=========
Given a string

Split the string into array
Transform each letter
If uppercase, lowercase it
If lowercase, uppercase it
Convert the array back to a string
return the transformation

*/

// function swapCase(string) {
//   return string.split("").map(char => {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   }).join("");
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// // LS strategy uses lexical order if ((char >= 'a') && (char <= 'z'))

// lineBreak();


///////////////////////////////////////////////////////////////////////////////
// Staggered Caps (Part 1)
// Write a function that takes a string as an argument and returns that string
// with a staggered capitalization scheme. Every other character, starting from
// the first, should be capitalized and should be followed by a lowercase or
// non-alphabetic character. Non-alphabetic characters should not be changed,
// but should be counted as characters for determining when to switch between
// upper and lower case.
///////////////////////////////////////////////////////////////////////////////

/*
Input: String
Return: String

Explicit Req:
  The first letter should be capitalized (and every other)
  The second letter should be lowercased (and every other)
  Non-alphabetic chars are not changed but they are counted as chars for
    determining when to switch between upper and lower case

Implicit Req:
  The input is always a string
  empty strings returned as is

Algorithm

Given a string
convert the string to an array of characters
Iterate over each character in the array, transforming each one
  If the index is even, attempt to capitalize the letter.
  Otherwise, attempt to lowercase the letter.
Join the transformation into a sentence and return it.
*/

// let staggeredCase = function(string) {
//   let characters = string.split("");
//   return characters.map((char, idx) => {
//     if (idx % 2 === 0) {
//       return char.toUpperCase();
//     } else {
//       return char.toLowerCase();
//     }
//   }).join("");
// };

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// lineBreak();

///////////////////////////////////////////////////////////////////////////////
// Staggered Caps (Part 2)
// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.
///////////////////////////////////////////////////////////////////////////////

/*
Explicit Req:
  The first letter should be capitalized (and every other)
  The second letter should be lowercased (and every other)
  Non-alphabetic chars are not changed but they ARE NOT counted as chars for
    determining when to switch between upper and lower case

Implicit Req:
  The input is always a string
  empty strings returned as is

Algorithm

Given a string
convert the string to an array of characters
declare a flag upCaseFlag and set it to true
loop over the string of characters, performing a transformation
  if the chararcter is not alphabetic, skip it
  otherwise
    if the upCaseFlag is true
      capitalize the character
      set the flag to false
    if the upCaseFlag is false
      lowercase the letter
      set the flag to true
join the resulting array into a sentence string and return it

*/

// function staggeredCase(string) {
//   let charArray = string.split("");
//   let upcaseFlag = true;

//   return charArray.map(char => {
//     if (/[^a-z]/i.test(char)) {
//       return char;
//     }
//     if (upcaseFlag) {
//       upcaseFlag = !upcaseFlag;
//       return char.toUpperCase();
//     } else {
//       upcaseFlag = !upcaseFlag;
//       return char.toLowerCase();
//     }
//   }).join("");
// }

// console.log(staggeredCase("I Love Launch School!") );
// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// Further Exploration
// Modify this function so the caller can determine whether non-alphabetic
// characters should be counted when determining the upper/lowercase state.
// That is, you want a function that can perform the same actions that this
// function does, or that operates like the previous version.

function staggeredCase2(string, countOthers = true) {
  let charArray = string.split("");
  let upcaseFlag = true;

  return charArray.map(char => {
    if (/[^a-z]/i.test(char)) {
      if (countOthers === true) upcaseFlag = !upcaseFlag;
      return char;
    }
    if (upcaseFlag) {
      upcaseFlag = !upcaseFlag;
      return char.toUpperCase();
    } else {
      upcaseFlag = !upcaseFlag;
      return char.toLowerCase();
    }
  }).join("");
}

console.log(staggeredCase2("There $will #be  no 77 difference"));
console.log(staggeredCase2("There $will #be  no 77 difference", false));

console.log(staggeredCase2("ignore 7 the numbers"));
console.log(staggeredCase2("ignore 7 the numbers", false));

// spent a lot of time trying to debug here because there was
// no difference between the two calls.
// There was nothing wrong with the code itself.
// The problem was that there was
// an even number of non-alphabetic chars between each letter lol.
// Please pay attention to your test cases!

lineBreak();

///////////////////////////////////////////////////////////////////////////////
// How long are you?
// Write a function that takes a string as an argument and returns an array that
// contains every word from the string, with each word followed by a space and
// the word's length. If the argument is an empty string or if no argument is
// passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a
// single space.
///////////////////////////////////////////////////////////////////////////////

/*
Input: string
Output: array

Explicit requirements:
  array should have every word
  every word shall be followed by the word's length (length property)
  If arg is an empty string or no arg is past, the function returns an empty
    array

Implicit requirements
  input will be a string

Algorithm
=========
given a sentence

split sentence into an array of words
guard against missing arguments or empty array arguments
iterate over the array of words, transforming each one
  concatenate the word to the word's length
  return the concatenation
return resulting transformation
*/

// function wordLengths(sentence) {
//   if (!sentence || sentence.length === 0) return []; // note this is redundant
// // an empty string will also be treated as falsy
//   return sentence.split(" ").map(word => {
//     return word + ' ' + word.length;
//   });
// }

// console.log(wordLengths('cow sheep chicken'));
// console.log(wordLengths('baseball hot dogs and apple pie'));
// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// console.log(wordLengths(''));     // []
// console.log(wordLengths());        // []

// arguments object test

// function expression works
// let wordLengths = function(arg) {
//   console.log(arguments);
//   console.log(arguments.length);
// };
// arrow functions indeed do not have access to arguments
// let wordLengths = words => {
//   console.log(arguments);
//   console.log(arguments.length);
// };
// console.log(wordLengths(''));
// console.log(wordLengths());

// console.log(wordLengths('cow sheep chicken'));
// console.log(wordLengths('baseball hot dogs and apple pie'));
// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// console.log(wordLengths(''));     // []

lineBreak();

///////////////////////////////////////////////////////////////////////////////
// Search Word (Part 1)
// Write a function that takes two arguments, a word and a string of text, and
// returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided, and that
// all word breaks are spaces. Thus, some words will include punctuation such
// as periods and commas.
///////////////////////////////////////////////////////////////////////////////

/**
 * Input: string, string
 * Output: Number
 *
 * Explicit requirements:
 *  word and text inputs always provided
 *  word breaks are spaces
 *  some words will include punctuation such as periods and commas
 * Implicit assumptions:
 *  Words are not equal to words with punctuation
 *  Words are CASE-INSENSITIVE
 *
 * Algorithm
 * declare variable to store the pattern to search for word
 * check the string number of matches to the pattern, returning an array
 * call and return length on that array
 *
 */

function searchWord(word, text) {
  if (!word || !text) return 0;
  let pattern = new RegExp(`\\b${word}\\b`, 'gi'); // finally got it to work!
  let result = text.match(pattern) || [];
  return result.length;
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('sed', 'icecicle')); // 0

// Further Exploration
// The current solution matches the word even when it is just a part of a bigger
// word, instead of a whole word by itself. For example, when searching for
// 'qui' in the text, this solution would also return 'quia' as a match
// Can you refactor the current solution so that it only matches whole words?
// In addition to this, can you also include input validation to handle cases in
// which one or both arguments are missing?

// refactored above

console.log(searchWord('qui', text)); // should return 4, not 13
console.log(searchWord('sed'));
console.log(searchWord());


//**======================================================================**//
// Key takeaway: use stackoverflow. The template literal required double backslash
// so that the anchor could be passed to the constructor.

// Key takeaway 2: we have declarative knowledge that \ is used to inform JS
// that the next character is not syntactical, but in practice we were not
// able to draw on it. This is a limitation of only drilling declarative knowledge
// and concepts. It helps, but we often need to have experienced it firsthand
// to properly draw upon our knowledge.
//**======================================================================**//

lineBreak();
///////////////////////////////////////////////////////////////////////////////
// Search Word (Part 2)
// The function from the previous exercise returns the number of occurrences
// of a word in some text. Although this is useful, there are also situations
// in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and some text as
// arguments, and returns the text with every instance of the word highlighted.
// To highlight a word, enclose the word with two asterisks ('**') on each side
// and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').
///////////////////////////////////////////////////////////////////////////////

function highlightWord(word, text) {
  if (!word || !text) return 0;
  let pattern = new RegExp(`\\b${word}\\b`, 'gi');
  let result = text.replace(pattern, `**${word.toUpperCase()}**`);
  return result;
}

console.log(highlightWord('sed', text));

