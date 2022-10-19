let a = {
  foo: '1',
  bar: '3'
}

let b = Object.create(a);

console.log(`b: `, b)

console.log(`a.foo: `, a.foo)
console.log(`b.foo: `, b.foo)

// Object.create delegates property and method access to its prototype.
// b has no properties of its own.
console.log(`b.hasOwnProperty('foo'): `, b.hasOwnProperty('foo'))


// There is an internal [[Prototype]] property for all objects.
// When we create an object with Object.create, the new object's
// [[Prototype]] property gets assigned to teh prototype object.

console.log(`Object.getPrototypeOf(b): `, Object.getPrototypeOf(b))
console.log(`Object.getPrototypeOf(b) === a: `, Object.getPrototypeOf(b) === a)

// You can access and replace the value of the [[Prototype]] property

let c = {
  isaaac: 'newton',
  albert: 'einstein',
}

Object.setPrototypeOf(b, c)

console.log(`Object.getPrototypeOf(b): `, Object.getPrototypeOf(b))

// The default prototype
a = {}
console.log(`Object.getPrototypeOf(a): `, Object.getPrototypeOf(a))

for (let key in c) {
  console.log(c[key])
}

let arr = [1, 2, 3];
console.log(`arr.propertyIsEnumerable('length'): `, arr.propertyIsEnumerable('length'))
console.log(`arr.propertyIsEnumerable('2'): `, arr.propertyIsEnumerable('2'))

// The prototype chain
a = {
  foo: 1,
};

b = {
  bar: 2,
}

c = {
  baz: 3,
}

Object.setPrototypeOf(c, b)
Object.setPrototypeOf(b, a)

console.log(`c.bar: `, c.bar)
console.log(`c.foo: `, c.foo)

// Property Look-up in the prototype chain

a = {
  foo: 1,
};

b = {
  foo: 2,
}
Object.setPrototypeOf(b, a);
c = Object.create(b);

console.log(`c.foo: `, c.foo, `we access the property foo from prototype b rather than a`)

c.foo = 100;


// And what happens when we try to set a property?
console.log(`c.foo: `, c.foo, `We set a new property called foo inside c`)
console.log(`b.foo: `, b.foo, `Prototype is left unchanged`)
console.log(`a.foo: `, a.foo)


// Methods from Object.prototype
// We can use builtin methods because they live on the top of all prototype chains,
// inside of Object.prototype
let beavers = ['Dag', 'Norm'];
beavers.forEach(beaver => console.log(beaver));

// Here we set the [[Prototype]] property to null...
Object.setPrototypeOf(beavers, null);
// beavers.forEach(beaver => console.log(beaver)); //// This gives us a TypeError


if (Object.getPrototypeOf(beavers) && beavers.isPrototypeOf(a)) {
  console.log('Did it shortcircuit?');
}


console.log(`a.isPrototypeOf(b): `, a.isPrototypeOf(b))
console.log(`a.isPrototypeOf(c): `, a.isPrototypeOf(c))



console.log(`Object.getPrototypeOf({}}): `, Object.getPrototypeOf({}))

let animal = {
  hp: 1,
}

let cat = Object.create(animal)
console.log(`cat.hp: `, cat.hp)

Object.setPrototypeOf(cat, a);
console.log(`cat.foo: `, cat.foo)

/* 
Write a function that searches the prototype chain of an object for a given property
and assigns it a new value. If the property does not exist in any of the prototype
objects, the function should do nothing...

Alg
===
- Start searching for the property beginning with the argument object.
- If the property is inside the argument object, then assign it to the argument value.
- If it is not inside the argument object, move onto the prototype object... repeat

*/



console.log("============================");
let fooA = { bar: 1, };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);;




function assignProperty(obj, prop, val) {
  let currentObj = obj;
  while (currentObj != null) {
    if (currentObj.hasOwnProperty(prop)) {
      currentObj[prop] = val;
      break;
    }
    currentObj = Object.getPrototypeOf(currentObj)
  }
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false


let appleTree = {johnny: 'appleseed'};
let foo = Object.create(appleTree);
foo.destination = 'New Mexico';

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});



console.log("============================");

function customMap(arr, fn) {
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push(fn(arr[idx]));
  }
  return result;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

let pets = ['dog', 'cat', 'iguana'];

let entitledPets = customMap(pets, capitalize)
console.log(`entitledPets: `, entitledPets)


// Higher order functions (functions that return a)

function greet(language) {
  switch (language) {
    case 'en':
      console.log('Hello!');
      break;
    case 'es':
      console.log('Hola!');
      break;
    case 'fr':
      console.log('Bonjour!');
  }
}

greet('fr'); // logs 'Bonjour!'
greet('fr')
greet('fr')
greet('fr')

function createGreeter(language) {
  switch (language) {
    case 'en':
      return function() {console.log('hello')}
    case 'es':
      return () => console.log('Hola!');
    case 'fr':
      return function randomName() { console.log('Bonjour!')}
  }
}

let greetUS = createGreeter('en');

greetUS();
greetUS();
greetUS();

let greetFR = createGreeter('fr');
greetFR();

console.log("============================");

// Function execution context
function fooTest() {
  this.makeAproperty = 'hello'
  console.log('this refers to: ', this);
}

fooTest();
console.log(global.makeAproperty);

console.log("============================");

// Strict mode

"use strict";

function foo3() {
  console.log(`this refers to: ` + this);
}

foo3();

console.log("============================");
let foo4 = {
  bar: function() {
    console.log(this);
  }
};

foo4.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

console.log("============================");
let baz2 = foo4.bar;
baz2(); // Object [global] {...}


function logNum() {
  console.log(this.num);
}

let harhar = {
  utterance() {console.log(`hahahahaha this is: `, this)}
}

let obj = {
  num: 42
};
let obj2 = {
  num: 9000
};

logNum.call(obj); // logs 42
logNum.call(obj2); // logs 9000
harhar.utterance()
harhar.utterance.call(obj)

function attack() {
  console.log(this.move)
}

let squirtle = {
  move: 'watergun',
}

attack.call(squirtle)

let iPad = {
  name: 'iPad',
  price: '5000',
}

let kindle = {
  name: 'Kindle',
  price: '1000',
}

let paperpack = {
  name: 'The Giver',
  price: '10',
}

function printLine(linenumber, units) {
  console.log(`${linenumber}: The ${this.name} costs ${this.price} ${units}`);
}
printLine.call(iPad, 1, 'dollars')
printLine.apply(kindle, [2, 'bison bucks'])

// apply is no longer relevant in modern JS due to the spread operator
let arguments = [3, 'rupees']
printLine.call(paperpack, ...arguments)


