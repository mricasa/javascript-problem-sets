// Declarations, initialization, assignment, and re-assignment

// To declare a variable in JS, we use the the assignment operator =, and
// a variable declaration keyword.

let foo = 1;

// In the code snippet above, we declare a variable foo, and initialize it
// to the value 1.

// There are three declaration keywords, let, const, and var. We limit our
// use, however, to the first two-- let and const -- which declare block-scoped
// /ariables (variables declared with var have global scope.)

// The const is distinct from let in that once assigned, it cannot be re-assigned.
// But keep in mind that object properties can be changed even when that object
// was initialized to a variable declared with const.

const oranges = 'mandarin';

// oranges = 'tangerines'; //= TypeError: Assignment to a constant variable.

// Also, we cannot declare a variable with const without intialization.
// const pineapple; //=> SyntaxError: Missing initializer in const declaration

// Therefore, const for any variables that you know should not be reassigned, a such as
// vars that represent configuration values, or magic numbers.

// Use let for other variables. Particularly for variables that we know we will
// need to reassign.

// Below, we demonstrate that we can reassign foo to the value of 2, and print
// it again.
console.log(foo);
foo = 2;
console.log(foo);

// We may also declare a variable with let without an expression
// So the declaration statement

let tacos;

// Is valid. If we declare a variable with let without the operand, JS will initialize it
// to undefined.

