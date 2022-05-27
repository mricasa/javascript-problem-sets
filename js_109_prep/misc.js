// JS100 JS Basics: Variable Scope- What's my value?

// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a); // => ReferenceError: Cannot access 'a' before initialization
//     let a = 2;
//     console.log(a);
//   }
// }

// myFunction();

// a change

/** You should use validation checks when you cannot guarantee that the data passed into a function will be valid. For instance, if we aren't sure if the data being passed might be an empty array or wrong data type, we want to create a guard clause to handle that.
 *
 */

// let zoo  = [
//   {trex: 1, raptors: 3, lions: 4},
//   {rabbits: 4, zebra: 3, gazelle: 10},
//   {monkeys: 4}
// ]

// let zooSelect = zoo.filter(animalPen => {
//   return Object.keys(zoo).some(animal => 'lions');
// })

// console.log(zooSelect[0] === zoo[0])


// ///////////////////////////////////////////////////////////////////////////////
// I was studying this using some other curriculum, so this is easy.
// not sure if I could get it otherwise.

// function fibonacci(n) {
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

///////////////////////////////////////////////////////////////////////////////
/*
Fibonacci Numbers (Procedural)
In the previous exercise, we developed a recursive solution for computing
the nth Fibonacci number. In a language that is not optimized for
recursion, some (but not all) recursive functions can be extremely
slow and may require massive quantities of memory and/or stack space.
If you tested for bigger nth numbers, you might have noticed that
getting the 50th fibonacci number already takes a significant amount of
time.

Fortunately, every recursive function can be rewritten as a
non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its
results without using recursion.

1, 1, 2, 3

*/
///////////////////////////////////////////////////////////////////////////////
// function fibonacci(number) {
//   let resultArr = [1, 1];
//   let position = 3;
//   while (position <= number) {
//     let firstTerm = resultArr[resultArr.length - 1];
//     let secondTerm = resultArr[resultArr.length - 2];
//     resultArr.push(firstTerm + secondTerm);
//     position++;
//   }
//   return resultArr.pop();
// }

// // LS solution.
// // not pushing to an array, but dynamically updating the elements of the
// // array.

// function fibonacci(number) {
//   let previousTwo = [1, 1];
//   for (counter = 3; counter <= number; counter++) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }
//   return previousTwo[1];

// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

///////////////////////////////////////////////////////////////////////////////
// Fibonacci Numbers (Memoization)
// Our recursive fibonacci function from an earlier exercise isn't very
// efficient. It starts slowing down with an nth argument value as low as
// 35. One way to improve the performance of our recursive fibonacci function
// (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future
// reuse, instead of computing it from scratch every time it is needed. In the
// case of our recursive fibonacci function, using memoization saves calls to
// fibonacci(nth - 2) because the necessary values have already been computed
// by the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

///////////////////////////////////////////////////////////////////////////////


// let fibonacciMemo = {};

// function fibonacci(n) {
//   if (n <= 2) return 1;
//   if (fibonacciMemo[n]) {
//     return fibonacciMemo[n];
//   } else {
//     fibonacciMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     return fibonacciMemo[n];
//   }
// }


// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765
// console.log(fibonacci(39));      // 63245986
// console.log(fibonacci(1000));    // 4.346655768693743e+208