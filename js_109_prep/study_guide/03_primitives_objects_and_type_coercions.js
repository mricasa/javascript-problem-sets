// primitive values, objects, and type coercions

// The primitive values in JS are undefined, null, string, number, booleans...
// (there are others, but they are not too relevant at this point)

// Objects are every other value that is not a primitive.

// A major distinction between primtiive values and objects are that primitives
// are atomic, they cannot be reduced. Whereas objects are complex values
// that may be composed of multiple values, as well as other objects. Primitives
// are immutable; while objects are mutable.

// Values of one data type may be coerced into another data type either explicitly
// or implciitly. As a best practice, we should strive to use explict conversions as
// much as possible. Doing so makes our intention clear to other developers and
// also can prevent bugs involved with relying on implicit conversion behavior.

// Explicit conversion of primitive data types to another primitive is
// generally straightforward. Number conversion methods can be used to convert string
// representations of numbers to numbers, and even parse and convert numbers from
// a string containing mixed characters.

parseInt("16oz"); // 16

// Be aware that conversion of data types, even explicitly, can be tricky in converting
// objects, undefined, and null values.

Number([undefined]); // 0
Number([1, 2, 3]); // NaN
Number(undefined); // NaN
Number(null); // 0
Number([]); // 0
Number({}); // NaN

// We can also convert values to strings. This is 

// GAAHHHHHH IDK



// Unlike other languages, JavaScript actually will not return an error when 
// attempting perfomrm an operation on two values of different data types. 
// For example, the binary + operator will implicitly convert an operand so that
// the operation may be carried out.

// == operator
// With ==, two values do not need to be strictly equal for it to return true.
// That is because == will implciitly convert operands of different data types.

'1' == 1; // true
true == 1; // true
undefined == null;

let value = null;
if (value == undefined || value == null) console.log(`Yes, it is ${value}`)

// Due to the way that == works with null and undefined, we could refactor the above to:

if (value == undefined) console.log(`?? ${null} is loosely equal to undefined!`)

// 4 things to keep in mind around implicit type coercion with ==
/**
 * If 1 operand is a string, the other is coerced to a string
 * If 1 operand is a boolean, the boolean will be coerced into a number primitive
 * When an object, it is coerced into a primtive value (wtf does that mean)
 * A == comparison of undefined and null evaluates as true
 */

// Note that objects compared with == follow the same rule as with ===. The object
// on each side of the comparison need to be the same in memory.


// For instance, if a string is one of the operands, the other operand will be
// converted to a string so that the two operands can be concatenated.

'24' + 1; // 241
'24' + {c: 'cat'} // '24[object Object]'

// ================================================
// ================================================
// Sunday May 29 rewrite
// ================================================
// ================================================

// The main primitive values in JS are strings, numbers, booleans,
// null, undefined (plus bigint and symbol). Primitives are atomic values, they cannot be reduced. They are also immutable. 
// Objects are any data type that is not a primtiive. Simple
// objects, arrays, and dates are examples of objects.
// Whereas primtiives are atomic, objects are complex data
// structures that may be comprised of many heterogenous
// values, including other objects themselves.
// Objects are also mutable, meaning that they can be
// modified in place.

// Data can be coerced into a specific data type either explicitly
// or implicitly. Excplicitly, functions are available to coerce
// data into strings and numbers. . . . .
// It is important to be aware that undefined and null do not
// have instance methods that can be called on them, and result
// in a TypeError; so in consideration of what coercion to use in a function, opting for a static method could give us some assurance that
// an unexpected undefined or null will not break our program


let hobbits = ['Merry', 'Pippin', 'Frodo'];
let theTallOne = hobbits[3] // undefined
// theTallOne.toString() // TypeError
// Alternatively:
String(theTallOne);

// Generally, conversion of values between the types of strings, booleans, and numbers makes intuitive sense. We should, however, be aware that that objects may be converted in unexpected ways. For instance:

Number([1, 2, 3]); // NaN
Number([]); // 0
String({}) // '[object Object]' (a string)



// Implicit coercion occurs during operations such as
// == or +, through which JS coerces two values of different types may be compared or combined together.

// Overall, we should strive to use explicit conversion as much as posible (i.e., explicitly coerce data types before operating between two different data types; only using strict ===), rather than leverage the behaviors of implicit coercion. This will make our code easier to understand and debug by ourselves and other devs. The only exception to this rule is with string interpolation and the unary + operator.

// While we should not use it, we should be aware of some of the behaviors so we understand how to navigate any bugs that arise from this or any code. Starting with ==:
/**
 * Number and other data type => BLA
 */

// 