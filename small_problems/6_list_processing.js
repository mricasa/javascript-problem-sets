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