/* eslint-disable indent */
// function prompt(msg) {
//   console.log(msg);
// }
// prompt(':)');

///////////////////////////////////////////////////////////////////////////////
/*
Cute Angles
Write a function that takes a floating point number representing an angle
between 0 and 360 degrees and returns a string representing that angle in
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
degrees, a single quote (') to represent minutes, and a double quote (") to
represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

==========
Pseudocode
==========

Whole number becomes degrees
Remaining decimal * 60 becomes minutes
Remaining decimal of minutes calculation * 60 becomes the seconds

// testing the math
// let testNum = 76.73;
// let testDegrees = Math.floor(testNum);
// prompt(`Degrees are ${testDegrees}. Should be 76.`)
// let remainder = testNum - testDegrees;
// prompt(`The remainder is ${remainder}`);
// let testMinutes = Math.floor(remainder *= 60);
// prompt(`Minutes are ${testMinutes}. Should be 43.`);
// remainder -= testMinutes;
// let testSeconds = Math.floor(remainder * 60);
// prompt(`Seconds are ${testSeconds}. Should be 48.`)

calculate Degrees, Minutes, Seconds
  Given a float
  let workingNum = the float

  let degrees = floor working number
  workingNum -= degrees

  let minutes = floor working number *= 60
  workingNum -= minutes

  let seconds = workingNum * 60

  return arry [degrees, minutes, seconds];

Fancy printer


*/
///////////////////////////////////////////////////////////////////////////////

// function dms(angle) {
//   let [degrees, minutes, seconds] = calcAngles(angle);
//   return (`${degrees}°${minutes}'${seconds}"`);

// }

// function calcAngles(angle) {
//   let degrees = Math.floor(angle);
//   angle -= degrees;
//   let minutes = Math.floor(angle *= 60); // not sure whether
//   // the operator assignment here is good form or not
//   angle -= minutes;
//   let seconds = Math.floor(angle * 60);

//   return [degrees, minutes, seconds].map(number => String(number)
//     .padStart(2, "0"));
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"
// console.log(dms(53.3108));

///////////////////////////////////////////////////////////////////////////////
/*
Combining Arrays
Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two. There should be no
duplication of values in the returned array, even if there are duplicates
in the original arrays. You may assume that both arguments will
always be arrays.

PLAN
Take in two arrays
declare result []
iterate over each array
  if number in result continue

*/

///////////////////////////////////////////////////////////////////////////////

// brute force declarative
// function union(arr1, arr2) {
//   let result = [];
//   for (iter = 0; iter < arr1.length; iter++) {
//     if (result.includes(arr1[iter])) continue;
//     result.push(arr1[iter]);
//   }

//   for (iter = 0; iter < arr2.length; iter++) {
//     if (result.includes(arr2[iter])) continue;
//     result.push(arr2[iter]);
//   }

//   return result;
// }


// trying out some other methods that are maybe less ugly
// function union(arr1, arr2) {
//   let mergedArr = arr1.concat(arr2);
//   return mergedArr.reduce((result, num) => {
//     if (!result.includes(num)) result.push(num);
//     return result;
//   }, []);
// }

// can you get it to work with filter though?
// function union(arr1, arr2) {
//   let mergedArr = arr1.concat(arr2);
//   return mergedArr.filter(num => {
//     return mergedArr.includes(num);
//   });
// }

// we actually cannot because the conditional should
// actually be whether or not a number appears more
// than one time.
// There is no builtin funtionaliity for counting
// in a collection in JS. (or Ruby's .one?)
// Our above attempt gives either a blanket true
// or blanket false for all values.


// console.log(union([1, 3, 5], [3, 6, 9]));


///////////////////////////////////////////////////////////////////////////////
/*
Halvsies
Write a function that takes an array as an argument and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd
number of elements, place the middle element in the first half array.

=====
let arr = ARGUMENT.slice()
Get midpoint as length of arr / 2, rounded UP for splice
subarr = arr.SPLICE(w, midpt)
return [subarr1, passed_in]
*/
///////////////////////////////////////////////////////////////////////////////

// function halvsies(array) {
//   let arrCopy = array.slice();
//   let midPoint = Math.ceil(arrCopy.length / 2);
//   return [arrCopy.splice(0, midPoint), arrCopy];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

///////////////////////////////////////////////////////////////////////////////
/*
Find the Duplicate
Given an unordered array and the information that exactly one value in the
array occurs twice (every other value occurs exactly once), determine which
value occurs twice. Write a function that will find and return the duplicate
value that is in the array.

=======
Given an array


initialize count object (remember to use implicit conversions)
iterate over each value
  if the value is not a key in count object, create a key and assign it to 1
  if the value is in count object, it means that it has a value of 1
  return the value
(technically we could use an array for this, since we don't really care
about the value in the object; only that we have seen the element before.
but I think it's fine practice.)

(Dug real deep on this problem. Well done)
*/
///////////////////////////////////////////////////////////////////////////////
// function findDup(arr) {
//   let counts = {};
//   for (let iter = 0; iter < arr.length; iter++) {
//     if (counts.hasOwnProperty(String(arr[iter]))) {
//       return arr[iter];
//     } else {
//       counts[arr[iter]] = 1;
//     }
//   }
// }

// can also just use truthiness of attempting to reference a property
// rather than has Own property predicate

// function findDup(arr) {
//   let counts = {};
//   for (let iter = 0; iter < arr.length; iter++) {
//     if (counts[arr[iter]]) {
//       return arr[iter];
//     } else {
//       counts[arr[iter]] = 1;
//     }
//   }
// }

// interesting LS solution uses the array method .find()
// find will return the first element that satisfies a testing function
// here we are looking for ONE duplicated element

// function count(array, element) { // note that this is referred to as a helper
//   // function. what is a helper function. what isn't a helper function?
//   let count = 0;
//   array.forEach(number => {
//     if (number === element) {
//       count += 1;
//     }
//   });
//   return count;
// }

// function findDup(array) {
//   return array.find((element) => count(array, element) === 2);
// }


// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//   38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//   14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//   78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//   89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//   41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//   55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//   85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//   40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));

///////////////////////////////////////////////////////////////////////////////
/*
Combine Two Lists
Write a function that combines two arrays passed as arguments, and returns a
new array that contains all elements from both array arguments, with each
element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the
same number of elements.
*/
///////////////////////////////////////////////////////////////////////////////

// function interleave(arr1, arr2) {
//   let result = [];
//   for (let iter = 0; iter < arr1.length; iter++) {
//     result.push(arr1[iter], arr2[iter]);
//   }
//   return result;
// }

// trying forEach

// function interleave(arr1, arr2) {
//   let result = [];
//   let arrOneIndex = 0;
//   let arrTwoIndex = 1;

//   arr1.forEach(element => {
//     result[arrOneIndex] = element;
//     arrOneIndex += 2;
//   });

//   arr2.forEach(element => {
//     result[arrTwoIndex] = element;
//     arrTwoIndex += 2;
//   });
//   return result;
// }

// Thanks I hate it. But yeah, it works

// trying map. thanks I hate it too.

// function interleave(arr1, arr2) {
//   let result = [...new Array(arr1.length * 2).keys()];
//   return result.map((_, index) => {
//     if (index % 2 === 0) {
//       return arr1.shift();
//     } else {
//       return arr2.shift();
//     }
//   });
// }

// flat is a nice trick though

// function interleave(arr1, arr2) {
//   return arr1.map((_, index) => {
//     return [arr1[index], arr2[index]];
//   }).flat();
// }

// reduce is nice... but there's some weird stuff going on around
// using push vs. concat, and where the return is placed.
// added to need to explore note (figured it out, below)

// Note that we must return the return value of the concat method
// If we add a new return
// statement at the end for the object result, it would not work
// since concat returns a new arr and is non mutating. result
// has not changed.
//
// function interleave(arr1, arr2) {
//   return arr1.reduce((result, _, index) => {
//     return result.concat(arr1[index], arr2[index]);
//   }, []);
// }

// The typeerror for the code below is that the function .push does not
// exist for result, which I find a bit strange.
// In debugger it definitely works (You should have continued the execution).
// In cany case, if we returned the return from push we would be
// returning the wrong value anyway (the new length of the arr).
//
// Note that we can use push if we add a new explicit return
// for the mutated result on the following line.

// OK I found it.
// So if we return the push, as expected, we get the number 2 upon the
// first iteration.
// When the second iteration begins, result is assigned to the number 2.
// and the numbers do not have the method push.

// function interleave(arr1, arr2) {
//   return arr1.reduce((result, _, index) => {
//     debugger;
//     return result.push(arr1[index], arr2[index]);
//   }, []);
// }


// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
// [1, "a", 2, "b", 3, "c"]

///////////////////////////////////////////////////////////////////////////////
/*
Multiplicative Average
Write a function that takes an array of integers as input, multiplies all of
the integers together, divides the result by the number of entries in the
array, and returns the result as a string with the value rounded to three
decimal places.

=====
Given a series of number in array form
multiply the numbers together (reduce)
divide the product by the number of entries (divide by the length)
return as a string with the value rounded to three decimal places (toFixed)
*/
///////////////////////////////////////////////////////////////////////////////


// note that toFixed already returns as a string
// function multiplicativeAverage(numArr) {
//   let product = numArr.reduce((product, num) => product * num, 1);
//   return (product / numArr.length).toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/** Multiply Lists
 * Write a function that takes two array arguments, each containing a list of
 * numbers, and returns a new array that contains the product of each pair
 * of numbers from the arguments that have the same index. You may assume that
 * the arguments contain the same number of elements.
 */


// function multiplyList(arr1, arr2) {
//   return arr1.map((num1, index) => {
//     let num2 = arr2[index];
//     return num1 * num2;
//   });
// }
// console.log(multiplyList([3, 5, 7], [9, 10, 11]));

/**List of Digits
 * Write a function that takes one argument, a positive integer, and
 * returns a list of the digits in the number.

 */

// function digitList(num) {
//   return String(num).split("").map(numStr => Number(numStr));
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

/**
 * How Many?
Write a function that counts the number of occurrences of each
element in a given array. Once counted, log each element
alongside the number of occurrences. Consider the words case
sensitive e.g. ("suv" !== "SUV").
 */

// function countOccurrences(vehiclesArr) {
//   let counts = {};
//   vehiclesArr.forEach(function(vehicle) {
//     if (counts.hasOwnProperty(vehicle)) {
//       counts[vehicle] += 1;
//     } else {
//       counts[vehicle] = 1;
//     }
//   });

//   Object.keys(counts).forEach(key => {
//     console.log(`${key} => ${counts[key]}`);
//   });

// }


// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// Array Average
// Write a function that takes one argument, an array of integers,
// and returns the average of all the integers in the array, rounded
// down to the integer component of the average. The array will never
// be empty, and the numbers will always be positive integers.

// function average(arr) {
//   return Math.floor(arr.reduce((sum, num) => {
//     return sum + num;
//   }, 0) / arr.length);
// }


// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

