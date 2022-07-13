/**
 * Input: Number
 * Output: Number
 * 
 * Rules
 * =====
 * Explicit requirements:
 * - Return the maximum rotation of a number
 * - Rotation is to move the first digit to the end of a
 *    number, then to shift the other digits down.
 * - Maxiumum rotation is to
 *  - First, rotate the entire number
 *  - Next, rotate all digits to the right of the first
 *  - Next, rotate all digits to the right of the first 2
 *  - " . . . " of the first 3 . . . 
 *  - Finally, you will need to rotate just the last
 *     two digits.
 *  - After rotating those, you have achieved max rotation
 * 
 * Implicit requirements:
 * - Input will always be a Number
 * - If the input is a single digit, the digit is returned
 * - The number will be an integer
 * - Leading zeros may get dropped
 * - If the number is two digits, the maximum rotation is
 *    one rotation
 * - No empty arguments
 *
 * DC + A 
 * ======
 * 735291 (rotate the all digits ->)
 * = 352917
 * 
 * 3 52917 (rotate all but the first digit)
 * => 329175
 * 
 * 32 9175 (rotate all but the first two digits)
 * => 321759
 * 
 * 321 759 (rotate all but the first three)
 * => 321597
 * 
 * 3215 97 (rotate all but the first 4)
 * => 321579
 *
 * 3 2 1
 * - Rotate 3 to the right of 1
 * - Move the rotated numbers to the left
 * 
 * 2 1 3
 * - Lock the left digit
 * - Perform the rotation on the remaining two numbers
 * - Move the rotated numbers to the left to rejoin 3
 *
 * DC + A
 *
 * -Given a number
 * -Convert the number to a string, split into an array of chars
 * Iterate over the array of chracters, passing in an index starting
 *  from 0.
 *    - Call rotation at position, passing the array and idx
 *    - Increment idx by 1
 * - Continue looping until the starting index is the second to
 *    last index of the passed in number
 * -join the digits
 *  into a string, convert it to a number, and return it.
 *
 * Rotation at position (mutating)
 * - Given an array, and a position (position is the index that
 *    needs to be rotated)
 * - Targeted element for rotation is the element at the index
 * - Use position to splice the character
 * - push the character to the end of the array
 * - return the array
 * 
 */

 function maxRotation(number) {
  let numArr = number.toString().split("");
  
  for (let idx = 0; idx <= [numArr.length - 2]; idx++) {
    rotateAtIndex(numArr, idx);
  }

  return Number(numArr.join(""))
}

function rotateAtIndex(array, idx) {
  let rotated = array.splice(idx, 1);
  array.push(...rotated);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


// Word to Digit
// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

/**
 * Input: string
 * Output: string
 * 
 * Rules
 * =====
 * Explicit requirements:
 * - Take a string as an argument and return a string
 * - Return string has every occurrence of a "number word" 
 *   replaced with its corresponding digit character
 * Implicit requirements:
 * - Number words will be integers
 * - Number words will range from 0 to 9
 * - Punctuation must not be left out from the output string.
 * - Input will always be a string
 * - If no number words, return copy of the input string.
 * - Punctuation will always be period (.)
 * - (will not need to use regex on the assessment)
 *
 * DC + A
 * ======
 * String -> Array of chars -> String
 *
 * Number dicitonary object
 * - Create an array of number words, 0 to 9
 * - keys are words, values are integers
 *
 * Main function
 * - Given a string
 * - Split string by "."
 * - Transform the array separated by . , passing sentences
 *   - Transform each subarray (sentences), passing words
*       - If the word, lowercased, is a a property in number dict
*         - return the value referenced by the property
*       - Otherwise, return the word
*    - Inner loop end
 * - Outer loop end
 * - Join array with " " and then "."
 */

let numberDictionary = {
  zero: '0', 
  one: '1',
  two: '2',
  three: '3',
  four: '4', 
  five: '5', 
  six: '6', 
  seven: '7', 
  eight: '8', 
  nine: '9' 
}

function wordToDigit(string) {
  return string.split(".").map(sentence => {
    return sentence.split(" ").map(word => {
      if (numberDictionary.hasOwnProperty(word)) {
        return numberDictionary[word];
      } else {
        return word;
      }
    }).join(" ");
  }).join(".");
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// Fibonacci Procedural

/**
 * Input: Number (n)
 * Output: Number (the nth Fibonacci number)
 * 
 * Rules
 * =====
 * Explicit requirements:
 * - Take a number, n, that is the place in the Fib sequence
 * - Return the Fib number at that place in the sequence
 * - Fibonacci: Sequence of numbers in which each number
 *   is the sum of the previous two numbers
 * - Sequence starts with 1, 1 (first and second numbers)
 *
 * Implicit requirements:
 * - Input is always a number
 * - The number is an integer
 * - If passed 0, return undefined ( there is no 0th number )
 * 
 * 
 * 
 * DC + A
 *    1, 1, 2, 3, 5, 8, 13 ...
 *    F(1) = 1
 *    F(2) = 1
 *    F(3) = 2
 *    F(4) = 3
 *    . . . .
 *
 * F(5)
 * 1 1
 * New right num is 2
 * 1 2
 * New right num is 3
 * 2 3
 * New right num is 5
 * 3 5
 * 
 * Given a number (place)
 * If the number is 1 or 2
 *   return 1
 * Declare leftFibNum, initialize to 1
 * Declare rightFibNum, initialize to 1
 * Declare counter, initialized to 3
 * Start to loop, end with counter is === place
 *  - declare sum, sum left and right fib numbers
 *  - Reassign left num to right num
 *  - Reassign right num to the sum
 *  - increment counter by 1
 * Repeat the loop 
 * Return rightFibNum
 */

 function fibonacci(place) {
  if (place <= 2) return 1;

  let leftNum = 1;
  let rightNum = 1;

  for (let counter = 3; counter <= place; counter++) {
    [leftNum, rightNum] = [rightNum, leftNum + rightNum];
  }

  return rightNum;
}

 console.log(fibonacci(20));       // 6765
 console.log(fibonacci(50));       // 12586269025
 console.log(fibonacci(75));       // 2111485077978050
 console.log(fibonacci(80));       // 2111485077978050

// ROT13
// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

/**
 * Input: String
 * Output: String
 * 
 * Rules
 * =====
 * Explicit requirements
 * - ROT13: Replaces a letter with the 13th letter after it
 *   in the alphabet
 *      A -> N
 *      L = Y
 *
 * - The inverse of the rule is also true. If we are on the
 *   14th char of the alphabet, its code is 13 chars before
 *   it
 *      N -> A
 *
 * - Take a string and return a string the alphabetical
 *   characters substituted with their code
 * - Characters of interest are alphabetical only
 * - 
 * Implicit requirements
 * - Inputs that are Empty strings return empty strings
 * - Inputs without any alphabetical chars returned as is
 * - Input will always be a string
 * - Case is preserved across the original char and the code
 *
 * DC + A
 * abc -> pon
 * a B z -> n O m (case preserved)
 * ?!? -> ?!?
 *
 * We can use the UTF code table rather than building a dict
 *
 * A is 65; N is 78; Z is 90
 * a is 97; n is 110 ; z is 122
 *
 * Given a string
 * Declare arrayChars initialize to the string split to chars
 * Declare a result, and assign it to the map result below
 * Iterate over the characters in the array, transforming them
 * - If the char is not alphabetical, return the char
 * - If the character is upperCased
 *     - Lowercase the character
 *     - Rotate by13
 *     - Uppercase the character, and return
 * - If the char is lowercased
 *     - Rotate by 13
 *     - return the character
 * Join the result by character 
 * 
 * RotateBy13
 * - Given a character (must be lowercased)
 * - Declare code, initialize to charCodeAt 
 * - If the char code is < 78
 *   - Add 13 to the charcode
 * - else if the code is >= 78
 *   - subtract 13 to the charCode
 *
 * isNotAlphabetical
 * - given a character
 * - test against /[^a-z]/i
 *
 */
//> String.fromCharCode('a'.charCodeAt() + 13)
//  'n'
//  > String.fromCharCode('N'.charCodeAt() - 13)
//  'A'

function rot13(string) {
  let arrChars = string.split("");
  let result = arrChars.map(char => {
    if (isSpecialChar(char)) return char;
    
    if (char === char.toUpperCase()) {
      return rotateChar(char.toLowerCase()).toUpperCase();
    } else {
      return rotateChar(char);
    }
  })

  return result.join("");
}

function rotateChar(char) { // takes lowercased chars only
  let code = char.charCodeAt();
  code += code < 110 ? 13 : -13; 

  return String.fromCharCode(code);
}

function isSpecialChar(char) {
  return /[^a-z]/i.test(char);
}

console.log(rotateChar('a'))
console.log(rotateChar('n'))


console.log(isSpecialChar('a'))

console.log(rot13("EBG13 rknzcyr."))

console.log(rot13("@$#@(*$(@ ))."))
console.log(rot13("This is my first ROT13 excercise!"))

/** Count letters in a string
 * Input: String
 * Output: Hash
 *
 * Rules
 * =====
 * Explicit requirements:
 * - Count lowercase characters
 * - Returns an object
 *  - Keys are the letter character
 *  - VaLues are the count
 * 
 * Implicit requirements:
 * - Input will always be a string
 * - If an empty string, return an empty object?
 * - If non-alphabetic character, do not count
 * - Assuming all strings will be a single word, no whitespace, and
 *    no special characters
 * - Appears that keys are sortted alphabetically
 *
 * DC + A
 * "abc"
 * {a: 1, b: 1, c: 1}
 * 
 * "AbCddd"
 * {b: 1, d: 3}
 *
 * Alg
 * ===
 * Given a string
 * Declare a countObj and initialize to an empty object
 * Declare charArray, initialize to result of spliting string into chars
 * Iterate over charArray passing each character
 *  - If the character is lowercase
 *    - Is the character a key in object?
 *      - If no: Create key for the char, and initialize to 1
 *      - If yes: Increment value count at key by 1
 * END loop when all characters are processed
 * Return the empty object
 *
 */

// function letterCount(string) {
//   let count = {};
//   let charArray = string.split("");

//   charArray.forEach(char => {
//     if (char !== char.toLowerCase()) return;
  
//     count[char] = count[char] || 0;
//     count[char] += 1;

//   })
//   return count;
// }



function letterCount(string) {
  return string.split("").reduce((obj, char) => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
    return obj;
  }, {});
}

// Ternary is also quite nice
// const letterCount = s => s
//   .split('')
//   .reduce((accum, value) => {
//     accum[value] = accum[value] ? accum[value] + 1 : 1
//     return accum
//   }, {})

console.log(letterCount("codewars")); //, {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
console.log(letterCount("activity")); //, {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
console.log(letterCount("arithmetics")); //, {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
console.log(letterCount("traveller")); //, {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
console.log(letterCount("daydreamer")); //, {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});


///////////////////


///////////////////


/**
 * Input: String
 * Output: String
 * 
 * Rules
 * =====
 * Return string where:
 * - First and last chars remain in orginal place
 * - chars between are sorted alphabetically
 * - Punctuation remains at the same place as it
 *    started
 * 
 *
 * Assumptions:
 * - Words are separated by single spaces
 * - only spaces separate words, special chars 
 *   do not (tik)
 * - Puntuation is limited to:
 *      - ' , .
 * - Ignore capitalization
 * - One character strings are returned as is
 * - Two char strings are returned as is
 * - Must handle a full sentence (the chars of
 *    each word are sorted; not of the
 *      whole sentence)
 *
 * DC + A
 * ======
 * "i" -> "i"
 * "me" -> "me"
 *
 * you've
 * -dcba -> -dbca (if special char at start, it is ignored, and we still lock the first alphabetical char)
 *
 * -dcba (edge case, special char starts)
 * -, d, c, b, a
 * [-] ; [d] ; [c, b] ; [a]
 *
 * 'card-carrying' -> caac-dinrrryg
 * Find the first and last LETTER of the word
 * 
 * Then identify the chars in the middle of
 * the word.
 *    [c], [caac] [-] [dinrrry] [g]
 * 
 * Save the index location of the special character (splice it in later)
 *
 * join the letters that are alphabetical
 * [c], [caacdinrrry] [-] [g]
 * 
 * sort them
 * [c], [aacdinrrry] [-] [g]
 *
 * join alphabetical words caacdinrrry
 * 
 * splice in special character if there is one
 * caac-dinrrry
 *
 * Alg
 * ===
 * Given a string / sentence
 * declare result
 * If sentence, iterate over each word, transform each word
 * - call the scrambler per word
 * - return the result of the scrambled word
 * Join the resulting transformed words and assign to result 
 *
 * else: it's a single word
 *  - call scrambler
 *  - assign to result
 * 
 * return resul
 *
 * Scrambler
 * - given a word
 * - Split the word into characters
 * - Declare middleChars, initialize to empty array
 * - Declare specialChars = initialize to empty array (will be [idx, char])
 * - Declare firstLetter
 * - Declare lastLetter
 * - Iterate over each character with index
 *   - If character is not alphabetical, add it to spcecialChars with idx
 *   - If character is alphabetical AND firstLetter is falsy
 *        Assign the character to firstLetter
 *   - Else, add each character to the middleChars
 * - Loop ends
 * - pop the end of middleChars and assign to lastLetter
 * - Sort middleChars
 * - unshift first character, push last character to middleChars
 * - For each in special chars
 *    - Insert specialChars at respective location of middleChars using idx
 * - return middleChars joned together as a string
 *
 * caac-ds
 * c aacd s
 * [4, "-"]
 * .splice(4, 0, "-")
 * caac-ds
 * 
 */

 function ScrambleWords(sentence) {
  return sentence.split(" ").map(word => {
    return scramble(word);
  }).join(" ")
}

function scramble(word) {
  if (word.length <= 2) return word;

  let charArr = word.split("");
  let midChars = [];
  let firstChar;
  let lastChar;
  let specials = [];

  for (let idx = 0; idx < charArr.length; idx++) {
    let char = charArr[idx];

    if (/[^a-z]/.test(char)) {
      specials.push([idx, char]);
      continue;
    }

    if (!firstChar) {
      firstChar = [char];
      continue;
    };

    midChars.push(char)
  }
  lastChar = [midChars.pop()];
  midChars.sort();
  
  let result = firstChar.concat(midChars, lastChar);

  specials.forEach(([idx, element]) => result.splice(idx, 0, element));
  return result.join("");
}

console.log(scramble('!'))

console.log(ScrambleWords('professionals'))

// , 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')

console.log(ScrambleWords('i'))

// , 'i', 'Must handle single charater words')
console.log(ScrambleWords('me'))

// , 'me', 'Must handle 2 charater words')
console.log(ScrambleWords('you'))

// , 'you', 'Must handle 3 charater words')
console.log(ScrambleWords('card-carrying'))
// , 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
console.log(ScrambleWords("shan't"))

// , "sahn't", 'Punctuation should remain at the same place as it started')
console.log(ScrambleWords('-dcba'))

// , '-dbca', 'Must handle special character at the start')
console.log(ScrambleWords('dcba.'))

// , 'dbca.', 'Must handle special character at the end')

console.log(ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."));

// ), "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')
//   })

//  Detect Pangram

/**
 * Input: string
 * Output: boolean
 * 
 * Rules
 * =====
 * Explicit req
 * - Pangram is a sentence that contains every single letter
 *   of the alphabet at least once
 * - Case is not relevant
 * - Ignore numbers, ignore punctuation
 * 
 * Implicit req
 * - Valid inputs? Is a string always?
 * - Will not be an empty string?
 *
 * DC + A
 * ======
 * Create an array of all letters (lowercase is fine)
 * Given a string
 * Declare charArray, intiialize to string split into chars
 * Iterate over charArray, passing characters
 * - declare char to lowercase of passed character
 * - declare idxChar as the result of finding the idx of
 *    that character in our array of letters
 * - if there is an index
 *   - Splice out the letter at that index
 * - else
 *   - continue
 * END when all the entire charArray has been passed
 *
 * return the negation of the array of all letters
 *   ( if our letterArr empty, it's a pangram ; 
 *      otherwise, it's not a pangram)
 *
 * ALTERNATIVE
 * Given a string
 * declare an lettersObject
 * Declare a charArray, init to string split into chars
 * Iterate over the array of chars, passing char:
 * - if the character is alphabetical
 *   - Lower case the character
 *   - Use character as a key in lettersObject
 *   - Create key (or re-assign existing key) and assign to true
 * END when we have iterated over all characters in char
 * array
 *
 * Retrieve the keys from letters object as array
 * If the length of the key array is 26, return true
 *    else false
 */


 function isPangram(string){
  let lettersObject = {};
  let charArray = string.split("");

  for (let idx = 0; idx < charArray.length; idx++) {
    let char = charArray[idx].toLowerCase();
    if (/[a-z]/.test(char)) lettersObject[char] = true;
  }

  let numKeys = Object.keys(lettersObject).length;
  return numKeys === 26;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// true

console.log(isPangram("This is not a pangram."));
//false