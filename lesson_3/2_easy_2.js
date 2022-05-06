/* eslint-disable max-len */
// Question 1
// Given a string, return a new string that replaces every occurrence of
// the word "important" with "urgent":

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let answer = advice.replace("important", "urgent");
// console.log(answer);

/*
Question 2
The Array.prototype.reverse method reverses the order of elements in an array, and
Array.prototype.sort can rearrange the elements in a variety of ways, including
descending. Both of these methods mutate the original array as shown below. Write two
distinct ways of reversing the array without mutating the original array. Use reverse
for the first solution, and sort for the second.
*/


// let numbers = [1, 2, 3, 4, 5];
// let numbersReversed = numbers.slice().reverse();
// console.log(numbers);
// console.log(numbersReversed);

// let reversedNumbers = new Array;
// numbers.forEach(num => {
//   reversedNumbers.unshift(num);
// });

// console.log(numbers);
// console.log(reversedNumbers);

/*
Question 3
Given a number and an array, determine whether the number is included in the array.

*/
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

/*
Question 4
Starting with the string:
*/

// let famousWords = "seven years ago...";
// // show two different ways to put the expected "Four score and " in front of it.

// let famousPhrase = "Four score and " + famousWords;
// console.log(famousPhrase);

// famousPhrase = "Four score and ".concat(famousWords);
// console.log(famousPhrase);

/*
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at
index 2, so that the array becomes [1, 2, 4, 5].
*/

// let nums = [1, 2, 3, 4, 5];

// delete nums[2];
// console.log(nums);
// // oh weird. leaves an empty item.
// // well i am stumped.
// // well no easy way. it's apparently splice. no problem.

// nums = [1, 2, 3, 4, 5];
// nums.splice(2, 1);
// console.log(nums);

// err... apparently splice is exactly what you are supposed to use lol;

/**Question 6
Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Create a new array that contains all of the above values, but in an un-nested format:

*/

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// let bedrock = flintstones.flat();
// console.log(bedrock);
// works but hm... exercise a bit unclear. we'll try to use methods to add

// let flintstones = ["Fred", "Wilma"];
// flintstones = flintstones.concat(["Barney", "Betty"]);
// flintstones = flintstones.concat(["Bambam", "Pebbles"]);

// console.log(flintstones);

// can also use push with the spread operator
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(...["Barney", "Betty"]);
// flintstones.push(...["Bambam", "Pebbles"]);
// console.log(flintstones);

/*
Question 7
Consider the following object:
Create an array from this object that contains only two elements: Barney's name and
Barney's number:
*/

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// console.log(Object.entries(flintstones)[2]);

//trying with filter now.

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let result = Object.entries(flintstones).filter(x => x[0] === 'Barney').shift();
// console.log(result);

/*
Question 8
How would you check whether the objects assigned to variables numbers and
table below are arrays?
*/

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

/**Back in the stone age (before CSS), we used spaces to align things on the
 * screen. If we have a 40-character wide table of Flintstone family members,
 * how can we center the following title above the table with spaces?

 */

// let SPACES = 40;
// let title = "Flintstone Family Members";
// let paddedSize = Math.floor((SPACES - title.length) / 2)
// let padded = title.padStart(title.length + paddedSize).padEnd(title.length + (paddedSize * 2));

// console.log(padded);


/**
 * Question 10
Write a one-line expression to count the number of lower-case t characters
in each of thefollowing strings:

how to count a specific char with one line, hm.
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// console.log(statement1.match(/t/g).length);
// console.log(statement2.match(/t/g).length);
// err... null will ruin this unfortunately


console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);