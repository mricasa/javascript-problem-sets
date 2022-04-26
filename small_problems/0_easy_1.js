let rlSync = require('readline-sync');

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Isn't it Odd?
// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// let isOdd = num =>  Math.abs(num) % 2 !== 0;

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (x = 1; x < 100; x += 2) {
//   console.log(x);
// }

// further exploration
// Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

// let x = 1
// while (x < 100) {
//   console.log(x);
//   x += 2;
// }

// for (x = 1; x < 100; x += 1) {
//   if (x % 2 === 1) console.log(x);
// }

// let printOdds = (limit) => {
//   for (x = 1; x < limit; x += 2) {
//     console.log(x);
//   }
// }

// printOdds(6634);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Even Numbers
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// for (x = 2; x <= 99; x += 2) {
//   console.log(x);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// How big is the room?
// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// let lengthM = rlSync.question('Enter the length of the room in meters:');
// let widthM = rlSync.question('Enter the width of the room in meters.');

// let computeArea = (length, width) => length * width;
// let convertSqMtoSqFt = sqMeters => (sqMeters * 10.7639).toFixed(2);

// console.log(`The area of the room is ${computeArea(lengthM, widthM)} 
// (${convertSqMtoSqFt(computeArea(lengthM, widthM))} square feet).`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let bill = Number(rlSync.question('What is the bill?\n'));
// let tipPercent = Number(rlSync.question('What is the tip percentage?\n'));

// let tip = ((tipPercent * 0.1) * bill).toFixed(2);
// let total = (bill + tip);

// console.log(`The tip is $${tip}.`);
// console.log(`The total bill is $${total}.`)

// start using Number.ParseFloat in the future or ParseInt

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let userNum = Number.parseInt(rlSync.question("Enter an integer greater than 0.\n"));

// let numList = [ ...Array(userNum).keys() ].map( i => i + 1);

// let mode = rlSync.question(`Would you like to determine the SUM or the PRODUCT of all numbers between 1 and ${userNum}?\n`).toLowerCase();



// let calcSum = numList => {
//   return numList.reduce( (sum, num) => sum += num, 0 )
// }

// let calcProduct = numList => {
//   return numList.reduce( (prod, num) => prod *= num, 1)
// }

// if (mode === 'sum') {
//   console.log(`The sum of your numbers is ${calcSum(numList)}`);
// } else {
//   console.log(`The product of your numbers is ${calcProduct(numList)}`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Short Long Short
// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let stringMerge = (string1, string2) => {
//   let short = '';
//   let long = '';

//   if (string1.length < string2.length) {
//     short = string1;
//     long = string2;
//   } else {
//     short = string2;
//     long = string1;
//   }

//   return short + long + short;
// }

// console.log(stringMerge('banana', 'apple'));
// console.log(stringMerge('pie', 'kiwi'));
// console.log(stringMerge('', 'xyz'));         // "xyz"


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Requirements:
// If year is evenly divisible by 4 AND NOT evenly divisible by 100
// If it is evenly divisble by 100, it is not a leap year UNLESS the year is also evenly divisible by 400

// let isLeapYear = year => {
//   if ((year % 4 === 0) && (year % 100 !== 0)) return true;
//   if ((year % 100 === 0) && (year % 400 === 0)) return true;

//   return false;
// }

// leapYears = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048]

// for (x of leapYears) {
//   console.log(isLeapYear(x));
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Leap Years (Part 2)
// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let isLeapYear = year => {
//   if (year >= 1752) {
//     if ((year % 4 === 0) && (year % 100 !== 0)) return true;
//     if ((year % 100 === 0) && (year % 400 === 0)) return true;
  
//     return false;

//   } else {
//     if (year % 4 === 0) return true;

//     return false;
//   }

// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// reduce doesn't seem to work
// let multisum = num => {
//   let numArr = [ ...Array(num).keys()].map(i => i + 1);
//   // console.log(numArr)

//   // hey... i have no idea why reduce doesn't work with a conditional here.

//   return numArr.reduce((sum, element) => {
//     if (element === 3) {
//       console.log(element);
//       return sum += element;
//     }
//   }
//   , 0);
  
// }
// maybe something to do with how we create the array using spread? let's keep trying...

// let multisum = num => {
//   let numArr = []
  
//   for (x = 1; x <= num; x++) {
//     numArr.push(x);
//   }

//   console.log(numArr);

//   return numArr.reduce((sum, val) => {
//     console.log(val);
//     if (val % 3 === 0) {
//       return sum += val;
//     }
//   }, 0);
// }

// oh wow... ok, apparently when you return nothing from a reduce function, you get an undefined. Using undefined as an operand gives us NaN. gonna try with filter then. 


// let multisum = num => {
//   let numArr = [ ...Array(num).keys()].map(i => i + 1)
//       .filter(value => (value % 3 === 0) || (value % 5 === 0));
//   return numArr.reduce((sum, val) => sum += val);
// }


// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

///////////////////////////////////////////////////////////////////////////////

// UTF-16 String Value
// Write a function that determines and returns the UTF-16 string value of a 
// string passed in as an argument. The UTF-16 string value is the sum of the 
// UTF-16 values of every character in the string. (You may use 
//   String.prototype.charCodeAt() to determine the UTF-16 value of a character.)


///////////////////////////////////////////////////////////////////////////////

let utf16Value = str => {
  let strArr = str.split('');
  return strArr.reduce((sum, char) => sum += char.charCodeAt(), 0);
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////