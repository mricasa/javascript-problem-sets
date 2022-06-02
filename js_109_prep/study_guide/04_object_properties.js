/**
 * Objects are a data type that is comprised of key-`v`alue pairs. We also call these pairs properties.
 * Objects are compound values. The property values that they contain can be a mixture of different primitive values, and, notably other objects. 
 * To instantiate an object we may use the object literal, which is comprised of curly braces and keys, colons, pairs, and commas.
 * Object keys are strings, but while writin the literal, enclosing the key in quotes is not necessary. Note, however, that if you would like to use a key that contains whitespace that we will need to enclose them in a string. Values follow the typical notation rules for representing values. Another important note about keys is that they must be unique, whereas you can have multiple values. Also... you cannot use expressions such as variables as placeholders for keys within the literal.
 * If we want to use a variable as a key we will need to add the key in using property assignment. We do this with bracket notation...
 * 
 * Oh yeah, retrieving values out of an object. Accessing a value via a specific key can be accomplished with two types of notation: dot notation and bracket notation.
 * 
 * Best practice is to use dot notation wherever possible to retrieve specific values out of an object.
 * However, bracket notation must be used if you are accessing a key with blankspace (we will need to call it as a string); or want to use a variable to retrieve a value.
 *
 * Realize too that all object keys are strings. With dot notation you can use plain text; but in the case of bracket notation, you can pass any expression to either reference or create a key. If you  are creating a key, and you pass a value other than a string, know that the value will be coerced into a string before becoming a key in the object.
 */

let fossils = {
  cretaceous: ['triceratops', 'something'],
  prehistoric: ['t-rex', 'stegosaurs']
}

fossils[1] = ['homo erectus'];

console.log(fossils.hasOwnProperty(1)); // true... ok. hasOwnProperty does some implicit coercion then.

// let's try this...

console.log(fossils['1'] === fossils[1]);
// ok, referencing a value using bracket notation also coerces.
// let's see. I guess we could do this:

console.log(Object.keys(fossils).find(key => key === 1));
// returns undefined

console.log(Object.keys(fossils).find(key => key === '1'));
// returns the string 1

// You will need to consider this when you are iterating over keys. 
// Although there is implicit coercion of the data types to values,
// perhaps explicitly convert when possible

// Iteration over an object cannot be done in the same manner as iteration over strings or arrays since they do not have an index.

// That means that we will want to access keys and iterate over the keys
// to access values. In some cases where we are not concerned with the keys, we can simply extract the values as an array using a static method Object.values

// There is a special looping abstraction called for...in, which will iterate over the keys in an object

for (let key in fossils) {
  console.log(key)
}

// we must be careful though since for in will also iterate over inherited properties of a child object's prototype


let replicas = Object.create(fossils);


// Notice that logging replicas to the console suggests that it is an empty array.
console.log(replicas);

//However we can access properties from its prototype, fossils
console.log(replicas.cretaceous)

// This creates unexpected results using for..in

replicas.museum = ['vase', 'jewels', 'paintings'];
console.log(replicas)

for (key in replicas) {
  console.log(key)
}

// A common way to work around this is to use a guard clause
// that filters out inherited properties and only
// iterating over the object's own properties
console.log('Below, only the object\'s own properties:')
for (key in replicas) {
  if (!replicas.hasOwnProperty(key)) continue;
  console.log(key)
}

