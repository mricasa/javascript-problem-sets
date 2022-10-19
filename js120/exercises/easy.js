/* Create a class Rectangle.

The constructor should take 2 arguments which represent width and length respectively.

Implement the class so that the output from the example below is correct. 

Formula for rectangle area is: width * length. */

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

/*  
Rectangles and Squares

Given the class from the previous problem

Write a class called Square that inherits from Rectangle, and is used like this: */

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25


// Without calling the Cat constructor, create an object that looks and acts like a Cat instance that doesn't have a defined name.
// incomplete
// 
// Complete the Program - Cats!
// Update this code so that when you run it, you see the following output:

/* My cat Pudding is 7 years old and has black and white fur.
My cat Butterscotch is 10 years old and has tan and white fur.
 *//* 
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, pattern) {
    super(name, age);
    this.pattern = pattern;
  }
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.pattern} fur.`
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());
 */
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  
  introduce() {
    console.log(super.introduce());
    console.log(' Meow meow!');
    // return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;

  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    `${this.master}! woof woof`
  }
}

let kitty = new Cat('Mac', 2, 'glad');
kitty.introduce();