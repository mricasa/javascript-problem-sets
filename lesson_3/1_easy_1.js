/* eslint-disable max-len */
// Practice Problems: Easy 1

///////////////////////////////////////////////////////////////////////////////
/*
*** === Question 1 === ***
Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

Answer:
To question 1, no the code will not raise an error. This bracket notation
assignment will create an index key of 6 and assign it to the value of 5.
The length property of the array will be updated to the highest index + 1 (7),
and the indices 3 through 5 will be "declared" by not initialized to any values.
Correct terminology: The JS engine will treat array slots 3 through 5 as
empty slots.

To the bonus question, numbers[4] will return undefined.
///////////////////////////////////////////////////////////////////////////////
*** === Question 2 ===
How can you determine whether a given string ends with an exclamation mark( ! )?

A: You can use slice to to look at the last char and see if it is equal to "!"
*/

// function exclamationMarkPresent(string) {
//   return (string.slice(-1) === "!");
// }

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
// console.log(exclamationMarkPresent(str1));
// console.log(exclamationMarkPresent(str2));

// Can also use the string method endsWith

// console.log(str1.endsWith('!'));
///////////////////////////////////////////////////////////////////////////////
/*
Question 3
Determine whether the following object of people and their age contains an
entry for 'Spot':
*/

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// ages.hasOwnProperty('Spot');

///////////////////////////////////////////////////////////////////////////////

/*
Question 4
Using the following string, create a new string that contains all lowercase
letters except for the first character, which should be capitalized.

*/

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// munstersDescription = munstersDescription[0].toUpperCase() +
//   munstersDescription.slice(1).toLowerCase();
// console.log(munstersDescription);

///////////////////////////////////////////////////////////////////////////////

/*
Question 5
What will the following code output?

console.log(false == '0'); //=> true
console.log(false === '0'); //=> false

*/

///////////////////////////////////////////////////////////////////////////////
/*
Question 6
We have most of the Munster family in our ages object:
*/

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// //Add entries for Marilyn and Spot to the object:
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);
// console.log(Object.entries(ages));

/*
Question 7
Determine whether the name Dino appears in the strings below --
check each string separately):
*/

// eslint-disable-next-line max-len
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(/Dino/.test(str1));
// console.log(/Dino/.test(str2));
// console.log(str2.indexOf('Dino'));

// Question 8
// How can we add the family pet, "Dino", to the following array?

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// Question 9
// In the previous problem, our first answer added 'Dino' to the array like this:
// How can we add multiple items to our array? ('Dino' and 'Hoppy')

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy");
// console.log(flintstones);

// Question 10
// Return a new version of this sentence that ends just before the word house.
// Don't worry about spaces or punctuation: remove everything starting from the
// beginning of house to the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// newString = advice.slice(0, advice.indexOf('house'));
// console.log(newString);