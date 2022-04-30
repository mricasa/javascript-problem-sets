/* eslint-disable no-tabs */
let rlSync = require('readline-sync');
console.log(typeof rlSync);

///////////////////////////////////////////////////////////////////////////////
// Welcome Stranger
// Create a function that takes 2 arguments, an array and an object. The array
// will contain 2 or more elements that, when combined with adjoining spaces,
// will produce a person's name. The object will contain two keys, "title" and
// "occupation", and the appropriate values. Your function should return a
// greeting that uses the person's full name, and mentions the person's title.
///////////////////////////////////////////////////////////////////////////////

// Requirements:
// Arg 1: array, N elements that form a peroson's full name
// Arg 2: two keys, 'title' and 'occupation'
// behavior: return a greeting that uses the person's full name, and title


// let greetings = function(nameArr, occObj) {
//   let fullName = nameArr.join(' ');
//   return `Hello, ${fullName}! Nice to a have a ${occObj.title} ${
//     occObj.occupation} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

///////////////////////////////////////////////////////////////////////////////
// Greeting a user
// Write a program that will ask for user's name. The program will then greet
// user. If the user writes "name!" then the computer yells back to the user.
///////////////////////////////////////////////////////////////////////////////

// let userName = rlSync.question('What is your name?\n')

// if (userName.slice(-1) === '!') {
//   console.log(`GOOD MORNING TO YOU ${userName.toUpperCase()}`);
// } else {
//   console.log(`Good morning to you, ${userName}.`);
// }

///////////////////////////////////////////////////////////////////////////////
// Multiplying Two Numbers
// Create a function that takes two arguments, multiplies them together, and
// returns the result.
///////////////////////////////////////////////////////////////////////////////

// let multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true

///////////////////////////////////////////////////////////////////////////////
// Squaring an Argument (Dependent on Multiplying Two Numbers)
// Using the multiply() function from the "Multiplying Two Numbers" problem,
// a function that computes the square of its argument (the square is the result
// of multiplying a number by itself).
///////////////////////////////////////////////////////////////////////////////

// let square = num => multiply(num, num);

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// // Further Exploration
// // if we wanted generalize this function to a "power to the n" type function:
// // cubed, to the 4th power, etc. How would we go about doing so while
// // still using the multiply() function?

// let powerN = (num, exponent) => {let square = num => multiply(num, num);
//   let product = 1
//   for (i = 1; i <= exponent; i++){
//     product = multiply(product, num);
//   }

//   return product;
// }

// console.log(powerN(2, 2))

// Recursive from LS student
// Square
// const square = a => multiply(a, a);

// // Power
// const power = (n, p) => {
//   if (p <= 1) return n;
//   return multiply(n, power(n, p - 1));
// }

// console.log(power(5, 3) === 125); // logs true
// console.log(power(2, 10) === 1024); // logs true


///////////////////////////////////////////////////////////////////////////////
// Pseudocode lecture test examples
///////////////////////////////////////////////////////////////////////////////

// a method that takes an array of integers, and returns a new array with every
// other element from the original array, starting with the first element.

// Casual Pseudocode
// Given an array of integers
// initialize returnArray
// Iterate over array with index
// eslint-disable-next-line no-tabs
// 	if the index is even, push the element at that index to the return array
// return returnArray

// Formal pseudocode
// Given an array of integers
// SET returnArr
// FOR index = 0; index < arrayInt.length; index++
// eslint-disable-next-line no-tabs
// 	IF index % 2 === 0
// eslint-disable-next-line no-tabs
// 		returnArr << arrayInt[index]
// 	ELSE
// 		continue
// return returnArr

/*
- a function that determines the index of the 3rd occurrence of a given
 character in a string.
For instance, if the given character is 'x' and the string is
'axbxcdxex', the function
should return 6 (the index of the 3rd 'x'). If the given character
does not occur at least
3 times, return null.
*/
// Given string and a character

// 	Transform string into array
// 	initialise  count
// 	Iterate over array
// 		if character is target character & count < 2
// 			add to count
// 		else if count == 2
// 			return index of the character in the list

// 	return null


// 	Formal
// 	Given a string and a target character

// 		let count = 0
// 		let strArr = string.split('')

// 		for char of strArr
// 			IF char is target && count < 2
// 				add to count
// 			else
// 				return index of char
// 		return null

// let indexOfThird = (str, letter) => {
//   let strArr = str.split('');
//   let count = 0;
//   let index = 0;

//   for (char of strArr) {
//     if (char === letter) {
//       count += 1;
//       if (count === 3) {
//         return index;
//       } else {
//         index += 1;
//       }
//     } else {
//       index += 1;
//     }
//   }

//   return null;
// }

// console.log(indexOfThird('tyrranosaurus rex', 'r'));
// console.log(indexOfThird('tyrranosaurus rex', 'v'));

// - a function that takes two arrays of numbers and returns the result of
// merging the arrays. The elements of the first array should become the
// elements at the even indexes of the returned array, while the elements of
// the second array should become the elements at the odd indexes. For
// instance: merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]


// requirements:  take two arrays and merge them. the first array elements
//  will be the even indexes, and the second array elements will be the odd
//indexes

// Given two arrays

// initialize the result
// take the length of 1 array (both are equal length)
// iterating index from 0 to the length of that array - 1
// If the iterator is even, take the first element from array1 (mutate it)
// and add it to the result
// else, take the first element from array2 (mutate it) and add it to the result
// return the result

// Given two arrays

// set returnArr
// set endLength to the size of array1

// for i = 0; i < endLength; i ++
//   IF i is even
// eslint-disable-next-line no-tabs
//   	shift array1 and append it to the returnArr
//   ELSE
// eslint-disable-next-line no-tabs
// 	shift array2 and append to returnArr

// return returnArr


// let merge = (arr1, arr2) => {
//   let returnArr = [];
//   for (i = 0; arr2.length; i++) {
//     if (i % 2 === 0) {
//       returnArr.push(arr1.shift());
//     } else {
//       returnArr.push(arr2.shift());
//     }
//   }
//   return returnArr;
// }

// console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]


///////////////////////////////////////////////////////////////////////////////
// Arithmetic Integer


// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition,
// subtraction, product, quotient, remainder, and power. Do not worry about
// validating the input.
//
// Example
//
//==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

///////////////////////////////////////////////////////////////////////////////
/*
Prompt user to enter first number
store first number
Prompt user to enter second number
store second number


Print the results of 6 operations, 1 per line

*/

// console.log('Enter your first number');
// let num1 = Number(rlSync.question());
// console.log('Enter your second number');
// let num2 = Number(rlSync.question());

// console.log(`${num1} + ${num2} = ${num1 + num2}`);
// console.log(`${num1} - ${num2} = ${num1 - num2}`);
// console.log(`${num1} * ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2} = ${num1 / num2}`);
// console.log(`${num1} % ${num2} = ${num1 % num2}`);
// console.log(`${num1} ** ${num2} = ${num1 ** num2}`);


///////////////////////////////////////////////////////////////////////////////
/* The End Is Near But Not Here
Write a function that returns the next to last word in the String passed
to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.


*/
///////////////////////////////////////////////////////////////////////////////

// let penultimate = (sentence) => {
//   let sentenceArr = sentence.split(" ");
//   return sentenceArr[sentenceArr.length - 2];
// }


// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
Further Exploration
Our solution ignored a couple of edge cases because we explicitly stated
that you
didn't have to handle them: strings that contain just one word, and strings that
contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence.
What edge cases need to be considered? How would you handle those edge cases
without
ignoring them? Write a function that returns the middle word of a phrase or
sentence. It should handle all of the edge cases you thought of.

REQUIREMENTS:
Retrieve middle word from sentence

POTENTIAL EDGECASES:
- No words
- One word
- Even number of words
- Not a word?

Pseudocode:

1. Intake sentence (string)
2. If string is not empty, proceed; else return null
3. Create string array out of string by splitting on spaces
4. If string is one word return the word
5. Otherwise, get the size of the string
6. If the size is even, return a message saying that the string is an even
number of words
7. Otherwise, find the midpoint, which is length over 2, rounded down
8. Return the element of the list at the midpoint index

Formal

Given String

IF (!string.length) return null

LET strArr = string.split(' ')

IF strArr.length === 1 then return string

IF strArr.length  % === 0 then return null

ELSE
LET midpoint = Math.floor(strArr.length / 2);
return strArr[midpoint]

*/

// let midWord = words => {
//   if (!words.length) return null;

//   // if (words.length === 0) return null; //// deals with wrong type
//   //// to handle non-string values.

//   let wordArr = words.split(" ");
//   if (wordArr.length % 2 === 0) return null;

//   let midPt = Math.floor(wordArr.length / 2);
//   return wordArr[midPt];

// }

// console.log(midWord(""));
// console.log(midWord("Asparagus"));
// console.log(midWord("Two bricks and a mule"));
// console.log(midWord("A screaming banshee tee-shirt"));
// console.log(midWord(true));
// console.log(midWord(false));
// console.log(midWord(5000));

///////////////////////////////////////////////////////////////////////////////
/* Exclusive Or
The || operator returns a truthy value if either or both of its operands are
truthy, a falsey value if both operands are falsey. The && operator returns a
 truthy value if both of its operands are truthy, and a falsey value if
 either operand is falsey. This works great until you need only one, but not
 both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes
two arguments, and returns true if exactly one of its arguments is truthy,
false otherwise. Note that we are looking for a boolean result instead of a
truthy/falsy value as returned by || and &&.
*/
///////////////////////////////////////////////////////////////////////////////


// omg this one worked lol.
// You can do math with booleans. wow.

// let xor = (sub1, sub2) => !!sub1 + !!sub2 === 1 ? true: false;

// expected route

// let xor = (sub1, sub2) => {
//   if (sub1 && sub2) {
//     return false;
//   } else if (sub1 || sub2) {
//     return true;
//   }
// }

// let xor = (sub1, sub2) => {
//   if ((sub1 && !sub2) || (!sub1 && sub2)) {
//     return true;
//   }

//   return false;
// }


// let xor = (sub1, sub2) => {
//   return !!((sub1 && !sub2) || (!sub1 && sub2));
// }


// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

///////////////////////////////////////////////////////////////////////////////
/*Odd Lists
Write a function that returns an Array that contains every other element of an
Array that is passed in as an argument. The values in the returned list should
be those values that are in the 1st, 3rd, 5th, and so on elements of the
argument Array.

*/
///////////////////////////////////////////////////////////////////////////////

// let oddities = arr => {
//   let result = [];
//   let alt = true;
//   for (i = 0; i < arr.length;) {
//     if (alt) result.push(arr[i]);
//     alt = !alt;
//     i += 1;
//   }
//   return result;
// }

// let oddities = arr => {
//   let result = [];

//   for (i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

///////////////////////////////////////////////////////////////////////////////
/* Convert a String to a Number!
The parseInt() method converts a string of numeric characters (including an
optional plus or minus sign) to an integer. The method takes 2 arguments
where the first argument is the string we want to convert and the second
argument should always be 10 for our purposes. parseInt() and the Number()
method behave similarly. In this exercise, you will create a function that
does the same thing.

Write a function that takes a string of digits and returns the appropriate
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in
JavaScript, such as String() and Number(). Your function should do this the
old-fashioned way and calculate the result by analyzing the characters in
the string.

*/
///////////////////////////////////////////////////////////////////////////////

/*
Requirements:
Chunk string down by digits place.
Digit index should be mapped to * 10 ^n
Add all numbers together

Maybe start with grabbing the length to understand...
So if 4321 .length is 4, we know that
first digit is number * 10 ** 3
second digit is number * 10 ** 2
third digit is number * 10 ** 1
fourth digit is number * 10 ** 0
sum all together

charCodeAt() mapping
0: 48
1: 49
2: 50
3: 51
4: 52
5: 53
6: 54
7: 55
8: 56
9: 57

= a difference of 48

POWER OF 10 RELATIONSHIP
pattern is
length = L
iter 0 = 10 ** (L - 1)
iter 1 = 10 ** (L - 2)
iter 2 = 10 ** (L - 3)
iter 3 = 10 ** (L - 4)

relationship between the iteration and 10 power is -(+1)


Pseudocode:

split string into digits
begin iteration with i starting at 0, until i is the length of the digit arr,
i++
each iter, is arr[i] converted into a number (charCode - 48)
then we multiply it by the respective power of 10 for the iteration -(+1)

*/

// let stringToInteger = (numberStr) => {
//   let digits = numberStr.split("");
//   const SPAN = digits.length;
//   let convertedNum = 0;

//   for (i = 0; i < SPAN; i++) {
//     let digit = (digits[i].charCodeAt() - 48);
//     convertedNum += (digit * 10 ** (SPAN - (i + 1)));
//   }

//   return convertedNum;
// }

// console.log(stringToInteger("4321"))

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// nice

///////////////////////////////////////////////////////////////////////////////
/*
Convert a String to a Signed Number!
In the previous exercise, you developed a function that converts simple numeric
strings to integers. In this exercise, you're going to extend that function to
work with signed numbers.

Write a function that takes a string of digits and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript,
such as parseInt() and Number(). You may, however, use the stringToInteger()
function from the previous lesson.


*/
///////////////////////////////////////////////////////////////////////////////

// let stringToInteger = (numberStr) => {
//   let digits = numberStr.split("");
//   const SPAN = digits.length;
//   let convertedNum = 0;

//   for (i = 0; i < SPAN; i++) {
//     let digit = (digits[i].charCodeAt() - 48);
//     convertedNum += (digit * 10 ** (SPAN - (i + 1)));
//   }

//   return convertedNum;
// }

// let stringToSignedInteger = (numberStr) => {
//   if (numberStr[0].charCodeAt() < 48) {
//     if (numberStr[0].charCodeAt() ===  45) {
//       return stringToInteger(numberStr.slice(1, numberStr.length)) * -1;
//     } else {
//       return stringToInteger(numberStr.slice(1, numberStr.length));
//     }
//   }
//   return stringToInteger(numberStr);

// }

// // ugly but functional ?

// console.log(stringToSignedInteger("4321")) //=== 4321); // logs true
// console.log(stringToSignedInteger("-570")) //=== -570); // logs true
// console.log(stringToSignedInteger("+100")) //=== 100); // logs true

///////////////////////////////////////////////////////////////////////////////
/*
Convert a Number to a String!
In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're going
to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3,
  and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an expression such
'' + number. Your function should do this the old-fashioned way and construct
string by analyzing and manipulating the number.


*/
///////////////////////////////////////////////////////////////////////////////


// extracting the 10s places.... hmmmm
// use n + 48 and then static String method fromCharCode
// push... or could use str method padend... which is ridiculous; might as well
//    just use array join

// This one is a stumper cuz i don't know math. We should look into it
// peeped the solution and found it. I guess it's fine. trying to
// implement it now.
// not too shabby.

// let integerToString = (num) => {
//   let digitArr = [];
//   do {
//     let numStr = num % 10;
//     digitArr.push(String.fromCharCode(numStr + 48));
//     num = Math.floor(num / 10);
//   } while (num > 0);
//   return digitArr.reverse().join('');
// };


// console.log(integerToString(4321));        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"

///////////////////////////////////////////////////////////////////////////////
/*
Convert a Signed Number to a String!
In the previous exercise, you developed a function that converts
non-negative numbers to strings. In this exercise, you're going to
extend that function by adding the ability to represent negative numbers
as well.

Write a function that takes an integer and converts it to a string
representation.

You may not use any of the standard conversion functions available in
JavaScript, such as String() and Number.prototype.toString().
You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

*/
///////////////////////////////////////////////////////////////////////////////

let integerToString = (num) => {
  let digitArr = [];
  do {
    debugger;
    let numStr = num % 10;
    digitArr.push(String.fromCharCode(numStr + 48));
    num = Math.floor(num / 10);
  } while (num > 0);
  return digitArr.reverse().join('');
};

let signedIntegerToString = (num) => {
  switch (Math.sign(num)) {
    case 1:
      return `+${integerToString(num)}`;
    case -1:
      return `-${integerToString(Math.abs(num))}`;
    default:
      return `${integerToString(num)}`;
  }
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

