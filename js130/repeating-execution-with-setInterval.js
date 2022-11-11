// let foo;
// foo = function() {
//   console.log('wassup');
// }
// let repeating = setInterval(foo, 2000);

// setTimeout(function() {
//   clearInterval(repeating);
// },5000)

/* Write a function named startCounting that logs a number to the console every second, starting with 1. Each output number should be one greater than the previous one. */

function startCounting() {
  let count = 1;
  return setInterval(function() {
    console.log(count);
    count += 1;
  }, 1000);
}

/* the returned value from a setInterval call is an object that identifies the timer created by calling it..
we can pass a reference to this value to clearInterval to cancel the interval
*/

let counterId = startCounting();
console.log(`counterId: `, counterId)
// clearInterval(counterId);

function stopCounting() {
  clearInterval(counterId);
}

setTimeout(stopCounting, 3000);