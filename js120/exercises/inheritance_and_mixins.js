// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     this.startEngine();
//   }
//   startEngine() {
//     console.log(this);
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year)

// Only Pass the Year
/* Using the following code, allow Truck to accept a second argument upon instantiation. Name the parameter bedType and implement the modification so that Car continues to only accept one argument. */

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);

/* 
Start the Engine (part 2)

Given the following code, modify the Truck class so that the code shown below displays the indicated output. Your code should make use of the startEngine method in the Vehicle class. */

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

/* 
Walk The Cat

Using the following code, create a mixin named walkMixin that contains a method named walk. This method should return Let's go for a walk! when invoked. Include walkMixin in Cat and invoke walk on kitty. */

const walkMixin = {
  walk() {
    return "Let's go for a walk!"
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`
  }
}
Object.assign(Cat.prototype, walkMixin);

class Partner {
}

Object.assign(Partner.prototype, walkMixin)

let kitty = new Cat("Sophie")
console.log(`kitty.greet(): `, kitty.greet())
console.log(`kitty.walk(): `, kitty.walk())

let gf = new Partner;
console.log(`gf.walk(): `, gf.walk())

console.log(`gf.walk === kitty.walk: `, gf.walk === kitty.walk)
console.log(`gf.walk === walkMixin.walk: `, gf.walk === walkMixin.walk)

/* 
Swimming

Correct the following program so it will work properly. Just make the smallest possible change to ensure that objects of Maltese and Fish class have access to the swim method. */

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin)
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Dog.prototype, swimMixin)

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo")
let fish2 = new Fish('Dory')
console.log(dog1.swim());
console.log(fish1.swim());
console.log(fish2.swim())


console.log(`fish2.swim === fish1.swim: `, fish2.swim === fish1.swim)

console.log(`dog1.swim === fish1.swim: `, dog1.swim === fish1.swim)

console.log(`fish1.hasOwnProperty('swim'): `, fish1.hasOwnProperty('swim'))

console.log(`dog1.hasOwnProperty('swim'): `, dog1.hasOwnProperty('swim'))

/*  
Towable (part 1)

Using the following code, create a towMixin mixin that contains a method named tow that returns I can tow a trailer! when invoked. Include the mixin in the Truck class.*/


// const towMixin = {
//   tow() {
//     return 'i can tow a trailer';
//   },
// }

// class Truck {}
// Object.assign(Truck.prototype, towMixin);
// class Car {}

// let truck = new Truck();
// console.log(`truck.tow(): `, truck.tow())

/*  
Towable (part 2)

Using the following code, create a class named Vehicle that, upon instantiation, assigns the passed in argument to year property. Both Truck and Car should inherit from Vehicle.*/

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle{
  constructor(year) {
    super(year)
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle{}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);