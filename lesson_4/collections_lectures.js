/* eslint-disable*/

let str = 'The grass is green'
console.log(str.slice(4, 9));

let ottawa = ['ted', 'balloon', {cupcakes: 43}];
let georgia = ottawa.slice();
console.log(ottawa);
georgia[2].cupcakes += 100;
georgia.push('georgia only')
console.log(ottawa);
console.log(georgia);

let george = [4, 1958];
george[0] + 10;
console.log(george);

let jerry = [4, 1954];
jerry[1] += 10;
console.log(jerry);

// String methods

console.log('jake'.concat(' and finn'));
let the_dog = 'jake';

console.log(the_dog.concat(' and finn'));
console.log(the_dog); // strings are immutable

console.log(the_dog + " and finn");

let bear = 'little bear'
console.log(bear.concat('and mama bear', ' and papa bear'));

console.log('malkovich'.includes('john'));
console.log('malkovich'.includes('kovich'));

console.log('malkovich'.includes('kovich', 4));
// this returns false since the starting index to search from is 4.

console.log('One potato, two potato, three potato, four'.split(', '));

// notice that when we pass "," instead of ", ", that the elements contain
// white space.
console.log('One potato, two potato, three potato, four'.split(','));

console.log(typeof 'cat'.charAt(-1));
// passing an out of bounds index to charAt will return an empty string.
// this a unique behavior compared to using bracket notation, which
// would return undefined

console.log(typeof 'cat'[-1]);

console.log('ha'.repeat(10));

// this is just a miscellaneous codewars exercise
function descendingOrder(n){
  return Number(n.toString().split("").sort((a, b) => {
    return b - a}).join(""));
}

console.log(descendingOrder(123));

//

// let many = [...new Array(9000).keys()];
// console.log(many.length);
// console.log(many.slice(499, 720));

// while (many.length > 0) {
//   console.log(many.pop());
// }

// console.log(many);

let result = 0;
let times = 10;

while (times > 0) {
  result += 10;
  times -= 1;
}

console.log(result);

for (count = 0; count < 10;) {
  console.log(count);
  count++;
}

let petStore = {
  snakes: 10,
  birds: 22,
  dogs: 8,
  cats: 7
}

for (key in petStore) {
  console.log(key);
}

// // wat. for of actually does not work to get values. getting a type error that petStore is
// // not iterable. I wonder if we could change something to make it
// // iterable...
// anywho... could use for/of for iterating over arrays since their indices are
// iterable. but obviously other iterators work out of the box anyway for arrays.
// for (value of petStore) {
//   console.log(value);
// }

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}

let pets = Object.keys(numberOfPets);
let counter = 0;
while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}

// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log('Exiting...');
//     break;
//   }
// }

let number;
do {
  number = Math.floor(10 * Math.random());
  console.log(number);

} while (number !== 5);


// PEDAC Lecture. Practice
// PROBLEM:return

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

/**
 * Clarification questions:
 * What is a palindrome?
 * Should we consider case when determining if something is a palindrome?
 * How shall we deal with empty strings? 
 * Can we assume it is always a string?
 * If the input string has UPPERCASE, shall we preserve its state in the result?
 * 
 * 
 * input: string
 * output: string (new object)
 * rules
 *  EXPLICIT REQUIREMENTS:
 *  Every palindrome in the sentence must be UPPERCASE in the result
 *  Palindromes are case sensitive (e.g., dad is not equal to DaD)
 * 
 *  IMPLICIT REQUIREMENTS: (implicitly understood per the test case)
 *  If the result is an empty string, return an empty string.
 */
// // PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/** What is a substring?
 * What is a palindrome? 
 * Is the expected output an array or a string of substrings?
 * how shall we handle empty strings? as empty arrays?
 * If there is no palindromic substring, return an empty array
 * 
 * Input: string
 * Output: array (new)
 * EXPLICIT REQUIREMENTS
 *   Elements should be individual substrings that are palindromes
 *   Palindromes are case sensitive
 *   If there are no palindromes, return an empty array

 * IMPLICIT REQUIREMENTS
 *   If the input is an empty string, return an empty array
 *   (paldindromes must have at least a length of 2)
 * 
 * ALGORITHM
 * declare a result variable initialized to an empty array
 * extract substrings that are at least a length of 2 from string 
 * Iterate over substrings
 *  if substring = substring reversed, push it to the result var
 * return the result
 * 
 * Extracting the substrings
 * 
 * 
 * 
 * substrings of halo
 * substring | indices
 * ha           (0, 1)
 * hal          (0, 2)
 * halo         (0, 3)
 * al           (1, 2)
 * alo          (1, 3)
 * lo           (2, 3)
 * 
 * declare substrings result, init to empty array
 * Starting from index 0 of a string
 *  Per Index while index is 2 away from the end of the length of the array
 *    create an end index, initialized to the current index + 2
 *    Inner loop: until the end index is equal to the string length (the end of the string)
 *      substring will be a slice of the string spanning from the index to the end index
 *      push the substring to the substrings result
 *      increment the end index by 1
 *    end loop
 *    increment the starting index by 1
 *  Outer loop ends
 * return result
 * 
 * Formal Pseudo attempt
 * 
 * Given string
 * 
 * LET substringResult = [];
 *   FOR (LET index = 0; index <= string.length - 2; index++)
 *    LET endingIndex = index + 2;
 *    WHILE (endingIndex <= string.length)
 *      substringResult.push(string.slice(index, endingIndex);
 *      endingIndex += 1;
 *    END
 *   END
 *  RETURN subString result
 * END
 */


// made it happen, but skipped the rest of the algorithm step since you wanted to verify
// the logic. heh.
function retrieveSubstrings(string) {
  let result = [];
  for (let startIndex = 0; startIndex <= string.length - 2;) {
    let endIndex = startIndex + 2;
    while (endIndex <= string.length) {
      result.push(string.slice(startIndex, endIndex));
      endIndex += 1;
    }
    startIndex++;
  }
  return result;
}

function palindromeSubstrings(string) {
  let palindromes = [];
  let substrings = retrieveSubstrings(string);
  substrings.forEach(string => {
    if (string === string.split("").reverse().join("")) {
      palindromes.push(string);
    }
  })
  return palindromes;
  }
// console.log(retrieveSubstrings('halo'));
// console.log(retrieveSubstrings('supercalifragilisticexpialidocious'));
// console.log(palindromeSubstrings("abcddcbA"));
console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// console.log(palindromeSubstrings("palindrome"))
// console.log(palindromeSubstrings(""))


//////

function sumOfRow(row) {
  let lastRow = sequenceGenerator(row).pop();
  return lastRow.reduce((sum, num) => sum + num);
}

function sequenceGenerator(row) {
  let result = [];
  let currentNumber = 2;

  // refactored the while loops into for loops
  for (let currentRow = 1; currentRow <= row; currentRow += 1) {
    let subArray = [];

    for (let numElements = 0; numElements < currentRow; numElements += 1) {
      subArray.push(currentNumber);
      currentNumber += 2;
    }
    result.push(subArray);
  }
  return result;
}

console.log(sequenceGenerator(2));
console.log(sequenceGenerator(3));

console.log(sumOfRow(2));
console.log(sumOfRow(3));
console.log(sumOfRow(4));
console.log(sumOfRow(40));

//


function getMiddle(string) {
  let midpoint = Math.ceil(string.length / 2);
  if (string.length % 2 === 0) return string.slice(midpoint - 1 , midpoint + 1)
  return string.slice(midpoint -1 , midpoint);
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));