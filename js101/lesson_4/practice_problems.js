/* eslint-disable*/

// Practice Problem 1
// What is the return value of the filter method call below? Why?
// [1, 2, 3].filter(num => 'hi');
// The return value of the filter method would be [1, 2, 3]. The reason why is because filter is concerned with the truthiness of the return value of the callback. All values in js are truthy except those that are falsy. 'hi' is a truthy value and its truthiness signals filter on each iteration that the element should be included in the return array.

// Practice Problem 2
// What is the return value of map in the following code? Why?
// [1, 2, 3].map(num => {
//   num * num;
// });
// the return value of map will be [undefined, undefined, undefined]. There is no explicit return statement, therefore undefined is returned by the callback. 

// Practice Problem 3
// The following code differs slightly from the above code. What is the return value of map in this case? Why?
// [1, 2, 3].map(num => num * num);

// result is [1, 4, 9]. With arrow functions, if you place the single statement or expression on the same line as the arrow syntax, you automatically have an explicit return. KEYWORDS are "WITHOUT BRACES SURROUNDING THE ARROW FUNCTION BODY".

// Practice Problem 4
// What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

// the return value will be 11. pop() removes and returns the last element of an array. Therefore, calling pop on the array returns caterpillar. With chaining, we can access the length property of the return value from pop, which is 11. 

// Practice Problem 5
// What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// it is not good practice to return an assignment statement.
// But for what it's worth, the assignment operation returns the right operand, typically the value the variable is initialized to.
// Therefore, the return of each iteration would be num * 2, which is a truthy value.
// Every therefore will return true since true is returned for all elements.
// this is valid code that will run, but it is definitely not what the dev was intending. 

// Practice Problem 6
// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// We could read the documentation. Or we can simply see if the two objects are equal to one another. Documentation says its mutating, yep

// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// undefined, bear. on the first iteration, ant does not satisfy the conditional. There is no explicit return apart from the if clause, so undefined will be the implicit return.


// Practice Problem 8
// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

function makeObject(array) {
  let result = {}
  array.forEach((stoner, idx) => {
    result[stoner] = idx;
  });
  return result;
}

console.log(Object.entries(makeObject(flintstones)));

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sumAges = Object.values(ages).reduce((sum, age) => sum + age, 0);
console.log(sumAges);

sumAges = 0;
Object.values(ages).forEach(age => sumAges += age);
console.log(sumAges);

//Practice Problem 10
// Pick out the minimum age from our current Munster family object:


console.log(Math.min(...Object.values(ages)));

// Practice Problem 11
// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
let letterFrequency = {};

let statementArr = statement.split("").filter(char => char !== ' ');

statementArr.forEach(char => {
  if (Object.keys(letterFrequency).includes(char)) {
    letterFrequency[char] += 1;
  } else {
    letterFrequency[char] = 1;
  }
});

console.log(Object.entries(letterFrequency));