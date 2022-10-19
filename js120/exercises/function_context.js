/* 
What is This?

Read the following code carefully. What do you think is logged on line 12. Try to answer the question before you run the code. */

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
  
};

console.log(person.fullName);

/*  
The Franchise

The method franchise.allMovies is supposed to return the following array:

  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'

  Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.
]*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => {
      return this.name + ' ' + number;
    });
  },
};

console.log(`franchise.allMovies(): `, franchise.allMovies())

/* 
myFilter()

In this exercise, we'll update an implementation of myFilter by adding the functionality of accepting an optional thisArg just like the original Array.prototype.filter.

Here's an implementation. We also show an example of how we want to call our modified function: the 3rd argument, filter, supplies the desired context (thisArg). 
4
Modify the implementation such that the expected result is returned. Don't use the thisArg argument of Array.prototype.forEach.*/

function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(
myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter) // returns [5, 6, 9]
)