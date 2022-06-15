// Study guide questions

/*
==================
Naming conventions (legal vs idiomatic) 

Naming conventions: https://launchschool.com/books/javascript/read/preparations#namingconventions 
Tables of names: https://launchschool.com/lessons/64655364/assignments/1f79ea39

idiomatic names are names that follow the naming conventions
==================
- 
*/

// camelCase is used to name function and variable names.

let angryBeavers = ["Dag", "Bart"];

// Constructor functions are PascalCase

let uninitializedElements = new Array(10);

// CONSTANTS
// =========

// SCREAMING_SNAKE_CASE reprsents const values that are either:
//  - Unchanging configuration values
//  - Magic numbers
//    - Note that magic numbers don't need to be numbers

const FIRST_STAGE = 'Green Hill Zone'
const STARTER_POKEMON = 'Squirtle';
const ONE_HALF = 0.05;              // Magic number

// Constants used to store functions follow the same rules as function
// names

const congratulate = function(name) {
  console.log(`Congratulations, ${name}!`);
}

// For all other constants, it is up to team. You could use
// camelCase, PascalCase, or even SCREAMING_SNAKE_CASE. (Local style)

/* General rules about names:
- JS allows $ in names, but only use when working with a library that uses
  $ names, such as jQuery
  - For now, treat them as non-idiomatic; they are legal but not used
    except in special certain cases
- All names should use alphabetic and numeric chars only.
- First char of a name must be alphabetic.
- No consecutive underscores.

Best practices
- Give variables descriptive names that indicate its contents.
*/ 

// Valid but Non-idiomatic names:

let $dollars = 44; // for use with libraries that use $ in names
let _here = 'there'; // begins with a semi-colon
let there_ = 'here'; // ends with a semi-colon

let kingofthejungle = 'King Kong'; // undifferentiated words
const ETERNALCHAMPION = 'Godzilla'; // undifferentiated words


const four = 4;

const GET_FUZZY = function() {
  return;
}

// Invalid names. JS interpreter will not allow us to use these names

// let 7samurai = [];     // Cant start a name with a number
// let face-off           // can't use hyphens
// let google.com         // . reserved for property reference out of an object

// Example questions
/*
Todd uses the name GODS_WRATH for a variable declared with const
initialized to a fucntion expression. What is the issue here?

- The name GODS_WRATH is a valid, but non-idiomatic name. JS style guides
  state that function names should use camelCase (or PascalCase for
  constructor functions), even if it is a function expression initialized
  to a variable declared with const. The idiomatic use of
  SCREAMING_SNAKE_CASE is reserved for unchanging configuration values
  and magic numbers in the code. The style may also be used for other
  constants if a particular team subscribes to that local style.

In her function declaration, Barb uses the name Diagnose. What is
the issue here? (snippet of Diagnose is a predicate)

- The name Diagnose for a function is a valid but non-idiomatic name.
  Functions should be named usng camelCase. Diagnose begins with a capital
  letter, which is a characteristic of the PascalCase style.
  PascalCase should only be used for constructor functions.
  Since Diagnose is a predicate function, it should be named diagnose

Jacob wants to use the name 4heroes as a local variable name that stores
the names of the ninja turtles. Is there an issue here?

- The name 4heroes is an invalid name. Trying to execute a js program that 
  uses this name will raise a syntax error, because names cannot begin with
  a number (numbers may occur anywhere else). To fix this, Jacob can
  use any idiomatic name for naming a variable: using camelCase or, if
  the variable is a constant, using SCREAMING_SNAKE_CASE for
  unchanging config values, magic numbers, or if it is the local style
  for other constants. 
*/ 