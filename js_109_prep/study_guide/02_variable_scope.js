/**
 * Variable scope refers to where in the program a variable can
 * be accessed
 * Variable scope specifically depends on where a variable was
 * declared, and with what keyword the variable was
 * initialized.
 *
 * A variable's scope defines what parts of a program can access that variable
 * by name.
 * 
 * A variable's scope defines what parts of a program can access it by name.
 * Scope is defined specifically by where a variable is declared and
 * with what keyword it is declared.
 * 
 * There are two different types of scope in JS: global and local.
 *
 * Variables that are declared in main (in other words: any place that is
 * not a block or a function), have global scope. That is, they can be
 * accessed by any part of the program.
 *
 * Variables that are declared in function or block scope, however, follow
 * specific rules that underwrite how they can be accessed throughout the
 * program.
 *
 * When we wite a function definition, we are creating an inner scope
 * within the function body. Within the function body, JS will not have
 * access to any variables unless they have global scope-- or, in a higher
 * order scope in the case of a nested function. Since we can nest functions within
 * other functions, those functions will have access to any variables declared
 * in the enclosing function (other levels above), and -- they of course have
 * access to any global variables.
 *
 * So generally speaking, we can say that within a function, JS will have access
 * to outer scoped variables (e.g., global vars, or enclosing functions in terms
 * of nested functions). Note that any local variables declared within a function
 * body cannot be accessed by the outer scope. Those variables are declared on function
 * invocation and discarded when the function returns.
 * Also, we need to be aware of variable shadowing. This occurs when a name
 * in an inner scope eclipses a name of an outer scope variable. This can happen
 * with function parameters or any local variables declared in the function body.
 *
 * 
 */


// Outer scope variables can be accessed by the inner scope

let cheese = 'cheddar';

let grater = () => console.log(`Shredded some ${cheese}`);

grater();

let cheeseSwapper = () => cheese = 'mozarella';
cheeseSwapper();

grater();

// Inner scoped variables cannot be accessed by the outer scope

let cave = function() {
  let dragon = 'Smaug';
  console.log(`the dragon's name is ${dragon}`)
}

// console.log(`The hobbits run away from ${dragon}`)
// ReferenceError: dragon is not defined

// cave();
// let peskyHobbits = function() {
//   console.log(`The hobbits attack ${dragon}`)
// }

// Peer scopes do not conflict

// let captured = function() {
//   let prison = 'Isengaard';
// }

// let caughtHobbits = function() {
//   console.log(`They're taking the hobbits to ${prison}`)
// }
// ReferenceError: prison is not defined.

// caughtHobbits();

// Nested functions have their own variable scope.

function unitedStates() {
  let wonder = 'Grand Canyon'

  function california() {
    let city = 'San Jose'
    console.log(`I'm leaving ${city} to see the ${wonder}`)
  }
  california(); // this works. The nested function california
                // can access the outer scoped variable
                // wonder in the enclosing function
  
  //console.log(`I'm returning to ${city}`);
  // ReferenceError: city is not defined
                // We can't access inner scoped variables
                // in an outer scope 
}

unitedStates();

// Inner scope variables can shadow outer scope variables

let thePlanets = ['Jupiter', 'Mercury', 'Venus', 'Mars'];

let spaceShuttle = () => {
  console.log(`We're on a secret mission to ${thePlanets.join(', ')}`)
}

let shadowedShuttle = thePlanets => {
  console.log(`We're on a secret mission to ${thePlanets}`)
} // We're on a secret mission to undefined

shadowedShuttle();

// Misc knowledge: All names -- variables, parameters, function names, classes can shadow names in the outer scoped. The only names that don't get shadowed are object properties. 


// Block scopes. Follow the same rules as function scope. When we write if and else clauses and have the blocks that form the body of a loop, we are working with blocks. Blocks create an inner scope. Inside that inner scope, outerscope variables can be accessed and re-assigned. --but not vice versa. We cannot access any variables declared in the outer scope in the outer scope. Nested blocks also create their own scope, like function scope. We can also shadow with blocks.

let greeting = 'wassup';
// if (true) {
//   console.log(greeting)
//   greeting = 'yo';
//   if (true) {
//     console.log(greeting);
//   }
// }

// if (true) {
//   console.log(greeting)
//   greeting = 'yo';
//   if (true) {
//     console.log(greeting);
//     let goodbye = 'later';
//   }
//   console.log(goodbye); // referenceError
// }