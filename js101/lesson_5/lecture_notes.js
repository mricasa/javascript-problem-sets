/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */

function breakline() {
  console.log('\n|======================================================|\n');
}
breakline();


// [1, 5, 7, 3].sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// });

//How would you sort the following array by the lengths of each word?

// let words = ['go', 'ahead', 'and', 'jump'];
// console.log(words.sort((a, b) => {
//   return a.length - b.length;
// }));

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -4;
  } else if (a > b) {
    return 20;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]


// scores is an array of subarrays that each contain three elements.
// Suppose this is an array that represents the scores for three players
// in a game of three rounds. We want to sort the players in ascending
// order of their total score. In effect, we want to get the following
// return value: [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];


let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

console.log(scores.sort((a, b) => {
  let totalA = a.reduce((total, x) => total + x);
  let totalB = b.reduce((total, x) => total + x);
  return totalA - totalB;
}));

// misc fibonacci

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

//
//misc practice

// let pirates = ['blackbeard', 'jim', 'snowball'];
// let xMarksTheSpot = pirates.findIndex(x => x === 'heart');
// console.log(xMarksTheSpot);

// function displayCharCodes(start = 0, end = 1000) {
//   for (let counter = start; counter <= end; counter++) {
//     let character = String.fromCharCode(counter);
//     if (character === '\x00') {
//       continue;
//     }
//     console.log(counter + ': ' + character);
//   }
// }

// displayCharCodes();

//
// misc practice problem... debugged some problematic code on form posts
//

// Your solution currently assigns newArr to the following array: [2, 3, 5],
// when the goal of this practice problem is to create a new array of new
// objects with the same keys as the original array, but with their values
// incremented by 1.

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(subObj => {
//   return Object.fromEntries(
//     Object.keys(subObj).map(key => {
//       return [key, subObj[key] + 1];
//     })
//   );
// }));

// let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

// let obj = {};

// yikes
// for (let idx in arr) {
//   let newObj = {};
//   let key = arr[idx][0];
//   let value = arr[idx][1];
//   newObj[key] = value;
//   obj = Object.assign(obj, newObj);
// }

// console.log(obj);

// practicing how to convert array to object using reduce.
// one of my favorite ways to convert without fromEntries :D
let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let arrObj = arr.reduce((accum, subarr) => {
  accum[subarr[0]] = subarr[1];
  return accum;
}, {});

console.log(arrObj);

// sorting by length
let words = ['go', 'ahead', 'and', 'jump'];
console.log(words);
words.sort((a, b)=> a.length - b.length);

console.log(words);

//Suppose this is an array that represents the scores for three
// players in a game of three rounds. We want to sort the players
// in ascending order of their total score. In effect, we want to
// get the following return value: [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];


scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
console.log(scores);
scores.sort((a, b) => {
  let totalA = a.reduce((sum, num) => sum + num);
  let totalB = b.reduce((sum, num) => sum + num);
  return totalA - totalB;
});

console.log(scores);


// How would you sort numbers in decreasing numeric value?

arr = [1, 2, 3, 4, 5]
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);

arr = [1, 500, 1200, 9000, 44451];
arr.sort((a, b) => {
  if (a < b) return 1;
  else if (a > b) return -1;
  else return 0;
});
console.log(arr);

console.log([2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}));

// JS does not have an explicit method for deep copying objects. How can
// we do it indirectly? Make a deep copy of the nested data structure below.

// arr = [{ b: 'foo' }, ['bar']];
// arrCopy = [...arr];
// arrDeepCopy = JSON.parse(JSON.stringify(arr));
// arr[0].b = 'fudge sundae';

// console.log(arr[1] === arrCopy[1]);

// Object.freeze(arrCopy[1]);
// arr[1][0] = 'brad';

///////////////////////////////////////////////////////////////////////////////
// ============================================================================
///////////////////////////////////////////////////////////////////////////////
// Working with Callback Functions


// What's happening in this seemingly-simple piece of code? Take it apart and try to describe every interaction with precision.
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined

/**
 * method forEach is called on the two layer data struture [[1, 2], [3, 4]]
 * forEach passes the first element [1, 2] as an argument to the callback
 * The local variable of the callback arr is initialized to [1, 2]
 * JS references the element at index 0, and passes it as an argument to the log method.
 * Undefined is returned.
 * forEach does nothing with the return value, and moves unto the next element.
 * ehh
 * not too shabby
 */
// LS solution:
// We use the multi-dimensional array [[1, 2], [3, 4]] to call forEach. Each inner array is passed to the callback, in turn, and assigned to the parameter arr. We then use the element reference operator, [], to get the value at index 0 of the array. On the first invocation of the callback, arr[0] returns 1, and on the second, it returns 3. In each invocation, console.log outputs a string representation of the value returned by arr[0]. Since this is a single statement callback, the callback's return value is the return value of console.log(arr[0]), which is undefined. forEach doesn't do anything with that returned value though. Finally, no matter what the callback returns, forEach always returns undefined.


// Example 2
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

/*
==============================================================================
Action  |   Performed on  |  Side Effect  |  Return Value | Return Value Used?
==============================================================================
method      outer array          none         new array           No      
call                         
(map)

callback        each             none         undefined        yes, by map
execution     subarray                                      for transformation

element         each             none        Element at         yes, by
reference      subarray                     index 0 of the     console.log
.                                             subarray
method        element at      outputs string                    yes, used to
call          index 0         representation   undefined        determine the
(console.log)   of subarr     of a Number                    callback's return
.                                                                  value

(doing the rest of these on the tablet)
*/
// (switching back to here)
// example 5
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/**
 * We call map on the two-layer data structure, [[1, 2], [3, 4]]. Each subarray is
 * passed by map to the callback. We then call an inner map on each subarray,
 * and pass the elements of each subarray to an inner callback function.
 * The inner callback function declares the local variable num, initializing it to
 * each element, and returns the product of the mathematical operation num times 2.
 * This return value is used by the callback function to determine its return value,
 * which is used by map for transformation. After iterating over both elements
 * of a subarray, inner map returns a new array, which is used by the outer
 * callback. The outer callback returns the new array to map, which uses it
 * for transformation.
 *
 * The result of this example will be [[2, 4], [6, 8]]
 */


breakline();
// Practice problems
console.log('Practice Problems');

// Practice Problem 1
// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));

// Practice Problem 2
// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sortedBooks = books.sort((a, b) => {
  let aYear = Number(a.published);
  let bYear = Number(b.published);
  return aYear - bYear;
});

console.log(sortedBooks);

// Practice Problem 3
// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3])

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);

breakline();

// Practice Problem 4
// For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[arr2.length - 1] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[obj2.a.a.length - 1] = 4;
console.log(obj2);

breakline();
// Practice Problem 5
// Consider the following nested object:
// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.keys(munsters).reduce((totalAge, munster) => {
  if ((munsters[munster]).gender === 'male') {
    return totalAge + munsters[munster].age;
  } else {
    return totalAge;
  }
}, 0));

// Practice Problem 6
// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

Object.entries(munsters).forEach(munster => {
  let [name, description] = munster;
  console.log(`${name} is a ${description.age}-year-old ${description.gender}.`);
});

// Practice Problem 7
// Given the following code, what will the final values of a and b be? Try to answer without running the code.

// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2; 
// arr[1][0] -= a; 

//Practice Problem 8
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(array => {
//   array.forEach(element => {
//     element.split("").forEach(character => {
//       if (/[aeiou]/i.test(character)) {
//         console.log(character);
//       }
//     });
//   });
// });

// Practice Problem 9
// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let result = arr.map(subarr => {
  if (subarr.every(element => isNaN(element))) {
    return subarr.slice().sort();
  } else {
    return subarr.slice().sort((a, b) => Number(a) - Number(b));
  }
});

console.log(result);
breakline();
// Problem 10
//Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

result = arr.map(subarr => {
  if (subarr.every(ele => typeof ele === 'string')) {
    return subarr.slice().sort((a, b) => {
      if (a < b) return 1;
      else if (a > b) return -1;
      else return 0;
    });
  } else {
    return subarr.slice().sort((a, b) => b - a);
  }
});

console.log(result);

breakline();
// Problem 11
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
result = JSON.parse(JSON.stringify(arr)).map(obj => {
  return Object.fromEntries(Object.entries(obj).map(entry => [entry[0], entry[1] + 1]));
});

console.log(result);
console.log(result === arr);

breakline()
// without making a deep copy...

arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
result = arr.map(obj => {
  let newObject = {};
  Object.keys(obj).forEach(key => {
    newObject[key] = obj[key] + 1;
  });
  return newObject;
});

console.log(arr);
console.log(result);
console.log(arr === result);

breakline()

// Practice Problem 12
// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

result = arr.map(subarr => {
  return subarr.filter(ele => ele % 3 === 0);
});

console.log(result);
breakline();
//Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

result = arr.sort((a, b) => {
  let sumOddA = a.reduce((sum, num) => {
    if (num % 2 === 1) return sum + num;
    return sum;
  }, 0);

  let sumOddB = b.reduce((sum, num) => {
    if (num % 2 === 1) return sum + num;
    return sum;
  }, 0);

  return sumOddA - sumOddB;
});

// can actually use filter instead of a conditional with reduce

result = arr.sort((a, b) => {
  let aSum = a.filter(num => num % 2 === 1).reduce((sum, num) => sum + num, 0);
  let bSum = b.filter(num => num % 2 === 1).reduce((sum, num) => sum + num, 0);

  return aSum - bSum;
});

console.log(result);

// Practice Problem 14
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

/**
 * Input: object
 * Output: array
 *
 * Rules
 * Return array with Colors of the Fruits, and Sizes of the vegetables
 * colors of the fruits should be Capitalized
 * sizes of the vegetables should be in UPPERCASE
 * 
 * Implicit:
 * order of the array values should be in the order of the fruits/ veggies of the
 * original object.
 *
 * DC + A
 *
 * Example 1
 *
 * Starting structure
 *    {grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
 *    carrot: {type: 'vegetable', colors: ['orange'], size: 'medium'}}
 * Extracted array of values:
 *    [{ type: 'fruit', colors: ['red', 'green'], size: 'small' },
 *     { type: 'vegetable', colors: ['orange'], size: 'medium'  }
 *    ]
 * If a fruit, extract the colors
 *    ['red', 'green']
 *    Then transform them into capitalized strings
 *    ['Red', 'Green']
 * If a vegetable, get the size
 *    'medium'
 *    And change the value to allcaps
 *    'MEDIUM'
 * Resulting array: [['Red', 'Green'], 'MEDIUM']
 *
 * 
 * We won't need the keys (fruit names)
 * Colors will remain an array (elements will need to be transformed)
 *
 * Alg.
 * Given an object
 * Declare listObjects and initialize it to the values of the given object
 * Call a transform method on listObjects and pass each snack (object)
 *    if the snack is a fruit
 *        return the transform of the snack's colors
 *            each color should be capitalized
 *    if the snack is a vegetable
 *        return the size in ALLCAPS.
 * That should do it?
 * 
 */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

result = Object.values(obj).slice().map(snack => {
  if (snack.type === 'fruit') {
    return snack.colors.map(color => color[0].toUpperCase() +
                                     color.slice(1, color.length));
  } else {
    return snack.size.toUpperCase();
  }
});

console.log(result);

breakline();
// Practice Problem 15
// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

result = arr.filter(obj => {
  return Object.values(obj).every(arr => arr.every(num => num % 2 === 0));
});

console.log(result);

// Practice Problem 16
// Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.

// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// let arrayObject = (Object.fromEntries(arr));
// console.log(arr[2][1] === arrObj.sea);

// imperative solution
arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let myObject = {};

arr.forEach(([key, value]) => {
  myObject[key] = value;
});

console.log(myObject);


// Practice Problem 17
// A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no arguments and returns a string that contains a UUID.

/**
 * Input: None
 * Output: String
 *
 * Rules
 * Explicit requirements:
    * String is a total of 32 hexadecimal characters
    * Output string is broken into 5 sections
    * 8 - 4 - 4- 4 -12
    * Hexadecimal characters are
    *     Digits 0 - 9
    *     Letters a - f
 * Implicit requirements:
 *    The sections of the output string my begin with either a letter or number
 *    There is no particular pattern for sequencing digits or letters
 *
 * Output example: 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
 * ============
 * DC + A
 * ============
 * 8-4-4-4-12
 * [[#, #, #, #, #, #, #, #], [# x 4], [# x 4], [# x 4], [# x 12]]
 * Eh. sure I guess.
 * 
 * Possible values per slot:
 *    0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (10 numbers)
 *    a, b, c, d, e, f (6 letters)
 *    = 16 total options
 *    = keys 0 through 15
 * 
 * No input
 * declare HEXADIGITS object and init to the hexadecimal value pairs
 * declare sizes array and init to [8, 4, 4, 4, 12]
 * Construct a 2-layer nested array
 * call map on the sizes array, looping through each element (the size of the section)
 *    declare a result array
 *    loop until the size of the return array is that of the specified element
 *        declare a randomNumber init to a random value
 *        push it to the return array
 *    Join the result array as a string
 *    Return the string
 * Result of the map will be a 2-layer array.
 * return a string with hyphens inserted between each subarray
 *
 * Randomize number:
 *    math floor of random * 16
 * 
 */
breakline();

const HEXADIGITS = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f'
};
function randomHexChar() {
  let randomValue = Math.floor(Math.random() * 16);
  return HEXADIGITS[randomValue];
}

function generateUUID() {
  let sizes = [8, 4, 4, 4, 12];
  let sections = sizes.map(ele => {
    let stringArr = [];
    for (let counter = 0; counter < ele; counter++) {
      stringArr.push(randomHexChar());
    }
    return stringArr.join('');
  })
  let [term1, term2, term3, term4, term5] = sections;
  return `${term1}-${term2}-${term3}-${term4}-${term5}`;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());