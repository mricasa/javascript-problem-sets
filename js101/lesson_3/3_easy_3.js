/**
 * Practice Problems: Easy 3
 * Question 1
Write three different ways to remove all of the
elements from the following array:
 */

let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);


/**
 * Question 2
What will the following code output?
 */

// console.log([1, 2, 3] + [4, 5]);
// "1,2,34,5"

/**
 * Question 3
What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

> hello there

Variables store primitive values at a memory location reserved for
each variable.

str1 and str2 hold different values and are independent of one another.
 */

/**
 * Question 4
 * What will the following code output?

  let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
  let arr2 = arr1.slice();
  arr2[0].first = 42;
  console.log(arr1);

  The output will be [{ first: "value1" }, { second: "value2" }, 3, 4, 5]

  Objects are mutable and variables can become aliases for the same object if
  one is assigned to another. Here, however, slice() is called on arr1
  during the initialization to the variable arr2. slice() returns a new
  array, so it is a different object.

  AH I was wrong about this. I didnt read closely enough. The true output
  would be

  [{ first: 42 }, { second: "value2" }, 3, 4, 5]
  because although they are different objects now, they still share elements.

  cool LS diagram and explanation:

  Internally, arr1 looks something like this after line 1 runs:


+---------+             +---------------------+
| pointer | ----------> | { first: "value1" } |
+---------+             +---------------------+
| pointer | -----+
+---------+      |
|    3    |      |      +----------------------+
+---------+      +----> | { second: "value2" } |
|    4    |             +----------------------+
+---------+
|    5    |
+---------+

After calling slice and initializing the copy to arr2:

   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> | { first: "value1" } | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+

After reassigning the object element's property 'first'

   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> |    { first: 42 }    | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+
 */

/**
 * The following function unnecessarily uses two return statements to
 * return boolean values. Can you rewrite this function so it only has
 * one return statement and does not explicitly use either true or false?


 */

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return (color === "blue" || color === "green")
// }

// function isColorValid(color) {
//   return (['blue','green'].includes(color));
// }

// console.log(isColorValid('blue'));
// console.log(isColorValid('magenta'));