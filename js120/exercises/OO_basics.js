/* 
Name the Constructor

Update the following code so that, instead of logging the values, each statement logs the name of the constructor to which it belongs.
 
*/

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);

/*  
Create the Class

Create an empty class named Cat.
*/


/* 
Create an Instance

Using the code from the previous exercise, create an instance of Cat and assign it to a variable named kitty. */


/* 
What are you?

Using the code from the previous exercise, add a constructor method that logs to the console I'm a cat! when a new Cat object is initialized. */

/* 
Hello, Sophie! (part 1)

Using the code from the previous exercise, add a parameter to constructor that provides a name for the Cat object. Assign this parameter to a property called name and use it to log a greeting with the provided name. (You can remove the code that displays I'm a cat!.) */


/* 
Hello, Sophie! (part 2)

Using the code from the previous exercise, move the greeting from the constructor method to an instance method named greet that logs a greeting to the console when invoked. */

// class Cat {
  
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello my name is ${this.name}`);
//   }
  

// }
// let kitty = new Cat('Sophie');
// kitty.greet();

/* 
Default Person

Create a class Person.

Person should accept one argument for "name" when instantiated.

If no arguments are given, person object should instantiate with a "name" of "John Doe". */

class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

/* 
Hello, Chloe!

Using the following code, add an instance method named rename that renames kitty when invoked. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   rename(name) {
//     this.name = name;
//   }
// }

// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

/* 
Generic Greeting (part 1)

Modify the following code so that Hello! I'm a cat! is logged when Cat.genericGreeting is invoked. */

// class Cat {
//   constructor() {

//   }

//   static genericGreeting() {
//     console.log(`Hello, i am a cat.`)
//   }

// }

// Cat.genericGreeting();
// let kitty = new Cat();
// kitty.constructor.genericGreeting();

/* 
Generic Greeting (part 2)

Using the following code, add two methods: static method genericGreeting and instance method personalGreeting. The first method should log a greeting that's generic to the class. The second method should be an instance method and log a greeting that's custom to the object. */

class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log('All cats say meow');
  }

  personalGreeting() {
    console.log(`Greetings. My name is ${this.name}. I hail from the planet Fancy Feast.`)
  }
}

let kitty = new Cat("Sophie");


kitty.personalGreeting();
Cat.genericGreeting();

kitty.constructor.genericGreeting();
Cat.prototype.personalGreeting();