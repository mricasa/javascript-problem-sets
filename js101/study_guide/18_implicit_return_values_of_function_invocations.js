/* 
Implicit return values of function invocations
https://launchschool.com/books/javascript/read/functions#returnvalues

All function invocations  will return something in JavaScript.
If no return statement is executed within during the invocation of
a function declaration or function expression, the implicit return
value will always be undefined. 

Arrow functions follow the same rule if they have a body that is
comprised of multiple statments and expressions. That is, their
implciit return is undefined if there is no return statement
executed during their invocation. If the arrow function, however, uses
a concise one-liner function body (i.e., single expression body), the
implicit return value would be the evaluation of the expression.
*/ 


/*
Possible questions.

Paula is getting an error from the following code. What is the error
and why is it hapepning?


let tendBar = function(beverage) {
  if (beverage === 'beer') {
    return 'Lagunitas';
  } else if (beverage === 'soda') {
    return 'coke';
  }
}

let order = tendBar('Water');

console.log(order.length);

The error that is raised is a typeError. The main principle to be
aware of in this example is that functions  invocations will return
undefined if a return statement does not return a useful value to
the calling code. 

When we invoke tendBar() on line 34, Paula passes in 'Water' as an
argument. Within tendBar(), the local varaible beverage is declared
and initialized to the string value "Water".

There are two return statements in the function body, each one a
clause of a conditional fork. Neither conditional evaluates to true
when when we strictly compare the value "Water" to the right operand.

Therefore, neither return statement is executed. Therefore, tendBar 
will return the usual implict return value of undefined after its
invocation on line 34. This value will be initialized to the variable
declaration of order on the same line.

Then, when we attempt to access the length property as an argument
to our invocation of console.log, the type error is raised since
we cannot read properties from undefined.



Is there a shorter way to write this code? Explain how it works?

let coolColor = (color) => {
  if (color === 'blue') {
    return true;
  } else if (!color === 'blue') {
    return false;
  }
}

Yes we can instead write this as:

let coolColor = color => color === 'blue';

This works because we can use a concise body arrow function since
we can refactor this code to return the evaluation of a single
expression, color === 'blue'.

When we use the concise body in an arrow function, the implicit return
value will be the evaluation of function body.

This would not have been possible if we had more than one expression.
We were able to refactor the original code because do not
need to write out the 2 conditionals, nor do we need to specify
a return value for each conditiona..

It is more concise to simply return the evaluation of the comparison
color === 'blue' since it will naturally return true or false.


*/

