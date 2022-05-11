function lineBreak() {
  console.log('==================================');
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

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function isUppercase(string) {
  if (!string) return true;
  let charArr = string.split("");
  let result = true;
  for (let counter = 0; counter < charArr.length; counter++) {
    let character = charArr[counter];
    if (!ALPHABET.includes(character)) continue;
    if (!(character === character.toUpperCase())) result = false;
  }
  return result;

}
console.log(isUppercase('t'));
// declarative solution using filter and every. much faster than using
// the general for loop.
function isUppercase2(string) {
  if (string.length === 0) return true;
  let charArr = string.split("");
  let alphabeticChars = charArr.filter(char => ALPHABET.includes(char));
  return alphabeticChars.every(char => char === char.toUpperCase());
}
console.log(isUppercase2('t'));

function isUppercase3(string) {
  return (string === string.toUpperCase());
}

console.log(isUppercase3('t'));               // false
console.log(isUppercase3('T'));               // true
console.log(isUppercase3('Four Score'));      // false
console.log(isUppercase3('FOUR SCORE'));      // true
console.log(isUppercase3('4SCORE!'));         // true
console.log(isUppercase3(''));                // true


lineBreak();

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
function removeVowels(array) {
  const VOWELS = 'aeiou';
  if (array.length === 0) return [];
  let result = [];
  for (let counter = 0; counter < array.length; counter++) {
    let currentStringChars = array[counter].split("");
    let noVowels = "";
    for (let counter = 0; counter < currentStringChars.length; counter++) {
      let character = currentStringChars[counter];
      if (VOWELS.includes(character.toLowerCase())) continue;
      noVowels = noVowels.concat(character);
    }
    result.push(noVowels);
  }
  return result;
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// Declarative solution
function removeVowels2(array) {
  const VOWELS = /[AEIOU]/gi; // global and case insensitive flags
  return array.map(string => {
    return string.replace(VOWELS, "");
  });
}

console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

lineBreak();

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

//Solution B
// function letterCaseCount(string) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};
//   string.split("").forEach(char => {
//     if (isAlphabetical(char)) {
//       if (char === char.toLowerCase()) {
//         counts.lowercase += 1;
//       } else {
//         counts.uppercase += 1;
//       }
//     } else {
//       counts.neither += 1;
//     }
//   })
//   return counts;
// }

// helper function
// function isAlphabetical(character) {
//   let code = character.toLowerCase().charCodeAt();
//   return (code >= 97 && code <= 122);
// }

// REGEX solution (ls)
// Note the use of || shortcircuiting to screen out null values returned by
// match during assignment of the object value variables

function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];
  return {
    lowercaseChars: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }