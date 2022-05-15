/* eslint-disable max-len */

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

let pirates = ['blackbeard', 'jim', 'snowball'];
let xMarksTheSpot = pirates.findIndex(x => x === 'heart');
console.log(xMarksTheSpot);

function displayCharCodes(start = 0, end = 1000) {
  for (let counter = start; counter <= end; counter++) {
    let character = String.fromCharCode(counter);
    if (character === '\x00') {
      continue;
    }
    console.log(counter + ': ' + character);
  }
}

displayCharCodes();