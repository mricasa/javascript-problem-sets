/* Hoisting */

/* Hoisting is a mental model of how JavaScript handles declarations. The model represents the way variable names are declared as ‘hoisting’ the declarations to the top of their scope. Notably, the hoisting model describes how we can call functions at runtime, early on in the program, before the line containing that function’s declaration is reached.  */


foo();

function foo() {
  console.log('hello');
}

/* The above code runs without an error. We're able to invoke foo on line 6, before its declaration on line 8. How is this possible? Well, foo is a function declaration, so it gets hoisted to the top of the global scope, making it available throughout that scope. We can envision the hoisted representation of the code this way: 
*/

function foo() {
  console.log('hello')
}
foo();

/* That's hoisting for function declarations. Here's another example. Since function declarations are function scoped, nested function declarations become hoisted to the top of the local scope of a function as well */

function fbr() {
  bar();
  function bar() {
    console.log('hello world'); 
  }
}

fbr();

/* Let's talk about variable declarations. We can start with function-scoped variables with var. The declaration of such variables are hoisted above our code as well. And they are initialized to undefined. It is only at runtime, when the declaration statement is reached by execution , that the variable would be assigned to the assignment expression. */

console.log(bob); // undefined
var bob = 44;

/* Since var declares with function scope, we can also declare them within blocks and their visibility scope will still extend across the function in which they were created */

function cheddar() {
  console.log(apple);
  while (true) {
    var apple = 24;
    break;
  }
}

cheddar(); // undefined

/* this looks like */
function cheddar() { 
  var apple = undefined;
  while (true) {
    apple = 24;
    break;
  }
}

/* Variables declared with block-scoping keywords also get hoisted. But unlike var, such variables are created during the creation phase and assigned to their enclosing scope,  but they are not initialized. 

They instead exist in a temporal deadzone where the identifier exists but it is assigned no value.

Accessing and using a variable in the TDZ will raise a referenceerror that is different than the usual referenceerror that comes with trying to access variables that do not exist at all.
*/

// console.log(cake); //ReferenceError: Cannot access 'cake' before initialization
// let cake = 'strawberry';

// console.log(pie); //ReferenceError: pie is not defined

/* block scoped variables are also only hoisted to the top of their block scope, naturally. */

bar();
var lad = 'hello';

function bar() {
  console.log(`lad // `, lad);
}