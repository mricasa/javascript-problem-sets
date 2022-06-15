/*
Working with first class functions
https://launchschool.com/lessons/778acada/assignments/a2ba7936

In javaScript, functions are are first-class objects. That means they can
be treated like any other value. They can be assigned to a variable,
passed as an argument to another function, or returned out of
function.

First-class functions are the reason why we are able to use the
declarative style of programming. For instance, we may use looping abstractions
like map, filter, and forEach are higher order functions that take
functions as arguments--a callback function that could be any
function, including anonymous functions. We can choose or define the callbacks
however we'd like to capture certain criteria or induce particular
behaviors. 

Such methods would take care of the looping for us, rather than requiring
us to approach the problem imperatively, resulting in the need to
implemeent a lot of "boiler plate" code such as counter initialization
and loop test conditions.


Possible questions
==================
Explain the code below. Be as specific as possible, and highlight
any main principles that allow this kind of implementation.
*/

function tighten() {
  console.log("The bolt is tightened.")
}

function factory() {
  return tighten;       // note that this is not a callback.
}

factory()();

/*
On display in this snippet is the concept of first-class functions. In
javascript, functions (which are objects) may be treated as any other
value. That is, we can assign them to variables, pass them into and return
them from functions.

We begin with a function declaration on line 30 starting with the reserved
keyword function. We name the function tighten, and do not define any
parameters since the function is not defined to use any arguments.

The function body of tighten is on line 30, starting with the open
curly braces and ended with the close curly braces on line 32. The
body has one action, the invocation of console.log on line 31.
The function invocation takes the string value "The bolt..." as an argument
and thus, it will print the string representation of the value to the
console. THe invocation will return undefined, and the implicit value
of this function would be undefined.

On line 34, we have the function factory. It is a higher order function since
it will return the function tighten as a value on line 35. 

On line 38, we invoke factory(). This invocation will return the function
tighten, then we use the parentheses pair () to invoke it.

.... hm.




*/