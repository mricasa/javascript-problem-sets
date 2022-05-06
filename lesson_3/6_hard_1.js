/* eslint-disable*/

/** Will the following functions return the same results?

 */

// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());

// No. the first will return the object as expected. the second will return
// undefined because the return statement stands alone without
// returning an expression.
// note that JS inserts a semicolon automatically in the second to denote the
// end of a statement.

/**Question 2
What does the last line in the following code output?

 */

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // => {first: [1, 2]}

// Question 3
// Given the following similar sets of code, what will each code snippet print?

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// A & B: The code within is local reassignment and non-mutating.
// C: Splice will mutate the passed in array objects in place.

/**
 * Question 4
 * Ben was tasked to write a simple JavaScript function to determine
 * whether an input string is an IP address using 4 dot-separated numbers,
 * e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines
whether a string is a numeric string between 0 and 255 as required for
IP numbers and asked Ben to use it. Here's the code that Ben wrote:
 */

/*
Alyssa reviewed Ben's code and said, "It's a good start, but you
missed a few things. You're not returning a false condition, and
you're not handling the case when the input string has more or less than
4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."


*/

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) return false;

//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// console.log(isDotSeparatedIpAddress('carrot')); //=> false
// console.log(isDotSeparatedIpAddress('1.1.1.1')); //=> true
// console.log(isDotSeparatedIpAddress('1.1.3')); //=> false
// console.log(isDotSeparatedIpAddress('1.1.3.222')); //=> true
// console.log(isDotSeparatedIpAddress('1.1.apple.123')); //=> false