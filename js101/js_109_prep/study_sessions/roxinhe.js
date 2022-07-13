

// list all the unique variables in this program and their scope,
// and explain them

// let x = 14;

// function foo(x) {
//   if (x > 10) {
//     let x = 8;
//     console.log(x);
//   } else {
//     bar(x);
//   }
// }

// console.log(x); 
// foo(x);         
// console.log(x); 
// foo(6);         
// console.log(x); 

// function bar(y) {
//   if (y < 10) {
//     x = 24;
//   }
// }

// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }

// myFunction();

var arr = [1, 2, 3, 4, 5];
const k = `Dont' change me`;
let result = arr.map((n, k) => k = n * 2);
console.log(result)
console.log(arr === result);