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


// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2;
// arr[1][0] -= a;

// Given the following code, what will the final values of a and b be? Try to answer without running the code.

// On line 61, we declare a and intialize it to 2.
// On line 62, we declare b and intialize it to an array.
// On line 63, we declare arr and intialize it to an array containing
// a copy of the value 2 at index 0, and, at index 1, a reference to the array
// [5,8].
// This gives us a value of a 2-layer nested data structure [2, [5, 8]]
//
// On line 65, we assign the element at index 0 of arr to 4.
// On line 66, we have an assignment operation invovling a.
// The key concept here is that the variable a has not changed since we
// declared it on line 61. a is an expression that represents a value, so
// when we reference a in our initialization of arr [a, b], element 0
// actually stores a value of 2 that is not linked to a.
// Therefore, when we reassign on line 65, we are only modifying
// element 0, and not the original a.
// RETRY THIS ONE.


// 6/3

// What loop could we use to assign each word to the appropriate number key in the object numberObject?

// let vals = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// let objEntries = {};

// for (let number in vals) {
//   let numword = vals[number];
//   objEntries[numword] = number;
// }

// console.log(objEntries);
// objEntries = {};


// for (let [index, number] of vals.entries()) {
//   objEntries[number] = index;
// }

// console.log(objEntries);

// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let result = arr.map(subarr => {
//   return subarr.filter(elements => elements % 3 === 0);
// })

// console.log(result);


// T or F. This sort callback willl sort an array of strings in reverse lexicographic order.

// let strings = ['cat', 'aardvark', 'bat', 'aat'];
// let result = strings.slice().sort((a, b) => b - a);
// console.log(result);

// // No, it will not. Using the - operator on string operands will result in NaN.
// // The callback will return NaN from each comparison, which sort will examine and leave
// // the order of the compared operands unchanged.
// // The return value of sort here will be the array with the same arrangement of elements.


// // A hacky way to achieve the reverse lexicographic ordering with sort, would be to
// // chain a reverse action off of the return value of sort called without parameters
// // (this defaults to sorting lexicographically).
// // (both methods will mutate the original array)

// strings.sort().reverse();

// console.log(strings);

// // Alternatively you could take an imperative approach and write out
// // the respective return values for a reverse lexicographic sort

// strings = ['cat', 'aardvark', 'bat', 'aat'];
// console.log(strings);

// strings.sort((a,b) => {
//   if (a < b) return 1;
//   else if (a > b) return -1;
//   else return 0;
// })

// console.log(strings)

// strings = ['plants', 'hue', 'garrison', 'hue', 'beer'];
// console.log(strings);

// strings.sort((a,b) => {
//   if (a < b) return NaN;
//   else if (a > b) return NaN;
//   else return NaN;
// })

// console.log(strings)


// let pocketMonsters = [ 'bulbasaur', 'squirtle', 'charmander'];
// pocketMonsters.sort((a, b) => b - a);
// console.log(pocketMonsters); //=> Expected: ['squirtle', 'charmander', 'bulbasaur']


// // Solution:
// let pocketMonsters = [ 'bulbasaur', 'squirtle', 'charmander'];
// pocketMonsters.sort((a, b) => {
//   if (a < b) return 1;
//   else if (a > b) return -1;
//   else return 0;
// });
// console.log(pocketMonsters); //=> ['squirtle', 'charmander', 'bulbasaur']


// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let result = arr.filter(subObjects => {
//   return Object.values(subObjects).every(subarr => {
//      return subarr.every(number => number % 2 === 0);
//   })
// })



// console.log(result);

// let skyscrapers = {NYC: "Empire State Building", Dubai: "Burj Khalifa", Tapei: "Tapei 101"};
// let skyscrapersShallowCopy = Object.assign({}, skyscrapers);

// console.log(skyscrapers === skyscrapers)
// console.log(skyscrapers === skyscrapersShallowCopy)

// We shallow copy objects using the static method Object.assign()
// The first argument of Object.assign is the "target object".
// This is the object in place that is returned by the method.

// It also takes n additional object arguments which are used to copy the properties
// of those objects into the target.

// We can use object.assign to combine objects into either are target object, or
// into a new object by passing a new empty object {} as the first argument.

// We can also create shallow copies of objects in the same way.

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// let result = scores.sort((a, b) => totalPoints(a) - totalPoints(b))

// function totalPoints(rounds)  {
//   return rounds.reduce((sum, num) => sum + num, 0)
// }


// console.log(result);


// Useful rules to remember about utf 16 code point order
/** uppercase before lower case
 * digits and most punctuation before uppercase
 * several punctuation chars are between upper and lower case
 * there is an extended ascii table that contains accented character and other special chars
 * all other utf 16 chars come after the extended ascii table
 */

//  Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.


// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let result = Object.values(obj).map(subObject => {
//   if (subObject.type === 'fruit') {
//     return subObject.colors.map(color => color[0].toUpperCase() + color.slice(1));
//   } else if (subObject.type === 'vegetable') {
//     return subObject.size.toUpperCase();
//   }
// })

// console.log(result)

// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let result = arr.map(subObject => {
//   let resultObj = {};
//   for (let key in subObject) {
//     resultObj[key] = subObject[key] + 1;
//   }

//   return resultObj;
// })

// console.log(result);
// console.log(arr);

// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a,b) => a.length - b.length)

// console.log(words)
// words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a,b) => {
//   a = a.length;
//   b = b.length;

//   return a - b;
// })


// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// let myObject = {};

// for (let idx = 0; idx < arr.length; idx++) {
//   let [key, value] = arr[idx];
//   myObject[key] = value;
// }

// console.log(myObject);

// // with fromEntries
// arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// myObject = {};

// myObject = Object.fromEntries(arr)

// console.log(myObject);

// // for of
// arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// myObject = {};

// for (let [key, value] of arr) {
//   myObject[key] = value;
// }

// console.log(myObject);

// // for each
// arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// myObject = {};

// arr.forEach(([key, value]) => myObject[key] = value);

// console.log(myObject);

// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

// let arr = ['10', '11', '9', '7', '8'];

// arr.sort((a, b) => b - a);

// console.log(arr);

// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// arr.sort((a, b) => sumOdd(a) - sumOdd(b))

// function sumOdd(array) {
//   return array.reduce((sum, num) => {
//     if (num % 2 === 1) return sum + num;
//     else return sum;
//   }, 0)
// }

// console.log(arr)

// Using the forEach method, write some code to output all vowels from the strings in the arrays. 

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(subArr => {
//   subArr.forEach(word => {
//     word.split("").forEach(char => {
//       if (/[aeiou]/i.test(char)) console.log(char);
//     })
//   })
// })

// Anki 6/4
//console.log(

// [[[1, 2], [3, 4]], [5, 6]].map(arr => {
//   return arr.map(value => {
//     if (typeof value === 'number') return value + 1;
//     else {
//       return value.map(num => num + 1);
//     }
//   })
// })

// )

/**
 * What is the action?'
 * On what value is that action performed?
 * What is the return value of the action?
 * Are there any side effects of the action? (are we mutating anything? re-assigning an outer scope var?)
 * Is the the return value used by whatever instigated the action?
 */

/*
We start with a 2-layer nested array. We call map on the value, passing each subarray as an argument
to the callback. Within the callback body, we invoke an inner map on the subarrays.
The inner map sends to its callback the number elements within each subarray.
This innermost callback multiplies each num by 2, then it returns the products
back to the inner map, which uses it transform the subarray: reassigning its elements to
the products.

Then the outer callback returns each transformed subarray back to the outer map, which uses that
to transform the outer array value, and map returns a new transformed array.

*/


/*
We have a 2-layer nested data structure. THe outer collection is an array, and its elements are objects. We invoke filter on the array, and pass each subObject under the paremter "object" as an argument to the callback.

In the callback body, we retrieve an array of keys from each subobj using the static method Object.keys so that we can iterate through the object.

Then, we invoke the method every, which tests wherther the first letter of a property value is the same as that property's key. 

Every will return True if all elements evaluate its callback condition as true; otherwise it returns false.

Every's return value will be returned by filter's callback, and then filter will examine the return value for its truthiness to perform selection.



Filter will examine the truthiness of the callback's return value

*/


// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let result = arr.map(subObj => {
//   let newObj = {};
//   for (let key in subObj) {
//     newObj[key] = subObj[key] + 1;
//   }

//   return newObj;
// })

// console.log(result);


// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

/*
The for loop is more succinct than the while loop since we are able to write out our loop initialization, loop test condition, and iteration statement (incrementation) all on one line. The built in logic of the for loop statement takes care of using all those components at the right time.


// WHat will be returned?
> let arr = []
> arr.length = 3
> arr[1] = 3
> arr.forEach(element => console.log(element))

On 448 we invoke forEach on arr.
Arr was a local var declared on 445, intiialized to an empty array, and on 446 we changed the array's length property to 3. Afterwards, we initialized the element at index 1 to 3. That means that the value of the array was

[<1 empty item>, 3, <1 empty item>]
Before we invoked forEach.

Technically, if we are asking about what is returned, we know that forEach always returns undefined.

We should, however, also note that the output of this code is the string representation of '3', which is printed by the console.log invocation in the body of forEach's callback.

This latter point highlights the fact that many array methods do not iterate over non-elements (i.e., the empty items of arr.)
*/


// let arr = []
// arr.length = 3
// arr[1] = 3
// arr.forEach(element => console.log(element))

// What will be printed?
// let animals = { a: 'ant', b: 'bear', c: 'cat' };

// Object.values(animals).some(value => {
//   console.log(value);
//   value.length === 4;
// }); 

/*
We are calling the array method some on the return value of the static method Object.values, which is an array of values ('ant', 'bear', 'cat').

Some takes a callback as an argument, and loops through each element in its array of values.

On each iteration, the value is printed. In this scenario, "ant"
"bear"
"cat"

will be printed.

We would expect only "ant" and "bear" to be printed  according to the intended behavior of the method some. (It will stop execution and return true as soon as the callback returns true for any element).

Notice, however, that there is no return statement on line 474. This means that the return value for each iteration through the values is undefined, which is a falsy value.

The principle on demonstration here is the importance of a the explicit return value. If we do not use a return statement within a function, that function will by default return undefined.


To arrange elements in order, we use sort. Sort is an array method that accepts a callback as an argument, and it loops over the elements of the array, passing pairs as arguments to its callback on each iteration.

On each iteration there is a comparison between the two elements. Each outcome of a comparison will return a value that is returned by the callback to sort. SOrt then uses this to rearrange the order of elements, and the iterations will continue until the final arrangement is achieved.

Note that if you call sort without a callback, its default behavior is to convert the callback arguments to strings and then compare arguments lexicographically

So for instance
Although we might expect 

100 1 10.sort() -> 1 10 100
To have been sorted numerically,
the inner mechanism was actually that of
comparing them as strings (sorting by
utf 16 table position)

oh yea... it mutates the caller as well.


During the PEDAC process, we can verify our assumptions by asking questions, examining any test cases provided . .. .



*/

