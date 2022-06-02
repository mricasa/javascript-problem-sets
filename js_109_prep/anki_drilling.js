// let arr = Object.freeze([[1], [2], [3]]);
// arr[2].push(4);
// console.log(arr);

// // The final value of arr will be the array [[1], [2], [3, 4]]. This is because
// // we can only freeze the outermost value in this collection (that is, the
// // outer array itself). The elements are nested arrays, and freeze will not
// // be called on anything beyond the first level.
// // Therefore, we can still mutate the array that is referenced by the element
// // at index 2 in the array.


// munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// console.log(
//   Object.values(munsters).filter(person => person.gender === 'male')
//   .reduce((totalAge, person) => totalAge + person.age)
// );

// // [object Object]40210 is printed here because we did not pass the second,
// // optional, argument to reduce. The second argument is used to initialize
// // the accumulator to a value. Without an argument, reduce intializes the
// // accumulator to the first element of the array. In this case, that value
// // is seen on line 14: { age: 32, gender: 'male'}
// //
// // Thus, in the callback function on line 23, we have the expression
// // that concatenates the object with the value accessed with person.age.
// // Impliciit coercion converts object to the string "[object Object" so
// // that the operation can be carried out.

// // Therefore, reduce returns
// // "[object Object]40210", the string representation of the initial
// // accumulator value, concatenated with each string rep of
// // the number from each successive iteration.

// // A way to fix this problem would be to pass a second argument to reduce.
// // Say 0.

// // Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

// arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(
//   arr.sort((a, b) => {
//     a = a.filter(num => num % 2 === 1, 0)
//           .reduce((sum, num) => sum + num);
//     b = b.filter(num => num % 2 === 1, 0)
//           .reduce((sum, num) => sum + num);

//     return (a - b)
//   })
// )


let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;