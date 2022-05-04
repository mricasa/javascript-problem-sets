// function car(newCar) {
//   let make = getMake(newCar);
//   let model = getModel(newCar);
//   return [make, model];
// }

// function getMake(newCar) {
//   return newCar.split(' ')[0];
// }

// function getModel(newCar) {
//   return newCar.split(' ')[2];
// }

// let [ make, model ] = car('Ford Mustang');
// console.log(make === 'Ford');   // => true
// console.log(model[0] === 'M');  // => TypeError: Cannot read property
// '0' of undefined

////////////////////////////////////////////////////////////////////////
// Exploring reduce (misc practice)
////////////////////////////////////////////////////////////////////////
// We heard that you cannot use reduce with a condtional.
// Here we discover that that was incorrect.

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = myArr.reduce((sum, num) => {
//   if (num % 2 === 0) {
//     sum += num;
//   }
//   return sum;
// }, 0);

// console.log(sum);
// // that worked lol let's check out the exercise from last time.

// // takeaway: make sure the return is in the correct place
// let multisum = num => {
//   // eslint-disable-next-line id-length
//   let numArr = [ ...Array(num).keys()].map(i => i + 1);
//   return numArr.reduce((sum, element) => {
//     if (element % 3 === 0 || element % 5 === 0) {
//       sum += element;
//     }
//     return sum;
//   }
//   , 0);

// };


// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

////////////////////////////////////////////////////////////////////////
/* Catching errors
Testing out try and catch statement
*/
////////////////////////////////////////////////////////////////////////

// let letterCount = arr => {
//   try {
//     arr.split(' ');
//   } catch (error) {
//     console.log('There was a', error.name, 'while parsing the data');
//     console.log(error.message);
//   } finally {
//     console.log('execution complete');
//   }
// };

// console.log(letterCount(null));

////////////////////////////////////////////////////////////////////////

// console.log(greeting);
// let greeting;

////////////////////////////////////////////////////////////////////////

// let foo = function(peanut = 'toast') {
//   console.log(arguments[0]);
//   console.log(peanut);
// };

// foo('argument1');

// let myArr = new Array(3);
// console.log( myArr.length);
// myArr[20] = 'bull';
// console.log( myArr.length);
// console.log(myArr[14]);
// myArr[15] = 'hello';
// console.log(myArr[15]);

// for (let index in myArr) {
//   console.log(index);
// }

// myArr = [1, 10, 7, 12, 44];

// for (let index in myArr) {
//   console.log(index);
// }

// for (let value of myArr) {
//   console.log(value);
// }

// myArr = new Array(10);
// myArr[12] = 'moose';

// for (let iter = 0; iter < myArr.length; iter++) {
//   console.log(myArr[iter]);
// }

//

