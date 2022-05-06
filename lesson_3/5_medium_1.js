/* eslint-disable max-len */
/**
 * Practice Problems: Medium 1
 * Question 1
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the
days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock!
10 times, with each line indented 1 space to the right of the line above it.
The output should start out like this:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
*/

// function displayFlintstones() {
//   let words = "The Flintstones Rock!";
//   for (let times = 0; times < 10; times++) {
//     console.log(" ".repeat(times) + words);
//   }
// }

// displayFlintstones();

/**
 * Question 2
Starting with the string:
Return a new string that swaps the case of all of the letters:
"The Munsters are creepy and spooky."
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

 */

// let isLowerCase = char => char.charCodeAt() > 90;

// let munstersDescription = "The Munsters are creepy and spooky.";

// console.log(munstersDescription.split('').map(char => {
//   if (isLowerCase(char)) {
//     return char.toUpperCase();
//   } else {
//     return char.toLowerCase();
//   }
// }).join(""));

// LS way is much simpler with using the conditional
// if char === char.toUpperCase() lol
// welp that makes sense.

/**
 * Question 3
 * Alan wrote the following function, which was intended to
 * return all of the factors of number:
 *
 * Alyssa noticed that this code would fail when the input
 *is 0 or a negative number, and asked Alan to change the
 loop. How can he make this work without using a do/while
 loop? Note that we're not looking to find the factors for
 0 or negative numbers, but we want to handle it gracefully
 instead of raising an exception or going into an infinite loop.

 Bonus: What is the purpose of number % divisor === 0 in that code?

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
 */

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(50));
// console.log(factors(0));
// console.log(factors(-50));

// the purpoose of number % divisor === 0 is to determine whether the
// number is an integer (factor) or not.

/**
 * Question 4
Alyssa was asked to write an implementation of a rolling buffer. You
can add and remove elements from a rolling buffer. However, once the
buffer becomes full, any new elements will displace the oldest elements
in the buffer.

She wrote two implementations of the code for adding elements to the
buffer. In presenting the code to her team leader, she said "Take
your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the
method she used to add an element to the buffer?
 */

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

/**
 * Yes, there's a difference.
 * in the first implementation, she uses push, which will mutate
 * the buffer such that we are able to make lasting changes
 * from within the function
 * in the second, she uses concat. This returns a shallow copy
 * of the buffer each time the function is called.
 * that means that the changes from within this function won't have
 * any lasting impact in the outerscope.
 */
/**
 * Question 5
 * What will the following two lines of code output? */

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// The first will output 0.9.
// the second would output ....true??
// wat

// LS:
// If you thought that the outputs would be 0.9 and true,
// respectively, you were wrong. JavaScript uses floating
// point numbers for all numeric operations. Most floating
// point representations used on computers lack a certain
// amount of precision, and that can yield unexpected
// results like these.

// 0.8999999999999999
// false

/**Question 6
What do you think the following code will output? */

// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// False. NaN is not equal to NaN.
// How can you reliably test?
// Number.isNaN()

/**
 * What is the output of the following code?


 */

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

// uhhh
// I would say 34. The assignment operator within the function
// should not mutate someNumber because primitives are pass by
// value. Meaning that answer is still = 42 after the variable
// declaration of newAnswer.
// coo

/**
 * Question 8
One day, Spot was playing with the Munster family's home computer,
and he wrote a small program to mess with their demographic data:

Copy Code
 */

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }


// After writing this function, he typed the following code:

// messWithDemographics(munsters);

//Before Grandpa could stop him, Spot hit the Enter key with his tail.
// Did the family's data get ransacked? Why or why not?

// I would believe that no, it did not get ransacked. The reason why
// is that I am pretty sure that Object.values returns a new array
// containing values of the object. That new array is not linked
// to the original object.


// Ok, apparently I am wrong.
// SO I think what is actually the case is that, yes, there is a new array
// being returned.
// HOWEVER. because the array elements are objects, they are actually the
// same objects referenced by each of the name properties in munsters.
// Thus any changes to those objects will be be reflected in all places
// that also have references to them.

// console.log(munsters);
// let grandpaRef = munsters.Grandpa;

// messWithDemographics(munsters);

// console.log(munsters);
// console.log(grandpaRef);

// going to try to see what happens if the name values are primtiives
// rather than objects.
// indeed there is no change.

// let munsters = {
//   Herman: 3,
//   Lily: 12,
//   Grandpa: 400,
//   Eddie: 7,
//   Marilyn: 9
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(age => {
//     age += 42;
//   });
// }

// messWithDemographics(munsters);
// console.log(munsters);

/**Question 9
Function and method calls can take expressions as arguments. Suppose
we define a function named rps as follows, which follows the classic
rules of the rock-paper-scissors game, but with a slight twist: in
the event of a tie, it just returns the choice made by both players. */

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// // What does the following code output?
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// paper

/**
 * Question 10
Consider these two simple functions:
 */

// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// bar(foo());

// // the answer is no