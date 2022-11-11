// function delayLog() {
//   let count = 1;
//   for (;count <= 10; count++) {
//     setTimeout(() => console.log(count), count * 1000);
//   }
// }

// delayLog();

/* ya what happens when count is in the outer scope? well, in this case... the for loop still finishes executing.... except that, each callback created would have in its closure the same outer scoped variable count... which is bound to the same value...

hm another way to think of this is that we create the 10 callback functions upon each iteration of the forloop, but all callback functions created have a reference to the same outerscoped variable.

now, if we use let to declare our counter variable in the loop specification, that variable is created upon each time the block executes, and for each block execution we have a new local variable such that each callback function has in its closure the lcoal variable delay that was in scope when 

*/

/* the code below demonstrates the difference  */
let closures = [];
for(let i = 0; i <2 ; i++) {
  closures.push(function() {
    console.log(i) ;
  })
}

closures[0]();
closures[1]();

// /*  */
// console.log('\3\n')
// setTimeout(function() {   //1
//   console.log('Once');    //5
// }, 1000);

// setTimeout(function() {   //2
//   console.log('upon');    //7
// }, 3000);

// setTimeout(function() {   //3
//   console.log('a');       //6
// }, 2000);

// setTimeout(function() {   //4
//   console.log('time');    //8
// }, 4000);

// console.log('\n\n');

// setTimeout(function() {
//   setTimeout(function() {
//     q(); // 7
//   }, 15);

//   d(); // 3

//   setTimeout(function() {
//     n(); 5
//   }, 5);

//   z();  // 4
// }, 10);

// setTimeout(function() {
//   s();   // 6
// }, 20);

// setTimeout(function() {
//   f();  // 2
// });

// g();    // 1

console.log('\n\n');

/* Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. It should wait for the indicated period, then invoke the callback function. */

let afterNSeconds;

afterNSeconds = function(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

let foo  = function() {
  console.log('hello world');
}

afterNSeconds(foo, 1);
afterNSeconds(foo, 2);
afterNSeconds(foo, 3);