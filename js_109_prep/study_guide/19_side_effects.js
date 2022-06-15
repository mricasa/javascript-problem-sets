/*
Side effects

https://launchschool.com/lessons/64655364/assignments/1f79ea39

We can say that a function has side effects if it carries out any of
these actions:

- Reassigns any non-local variable
- Mutates any object referenced by a non-local variable
- Reads or writes to a file, system, browser, or hardware. This includes
  writing to the console or reading a user input from the terminal
- Raises an exception without handling it
- Calls another function with side effects.

*/ 

// Example questions
// ==================

/*

Paul writes the function below. What advice do you have for him?

  function total(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);

    return sum;
  }

  - The issue with this function is that it produces a side effect 
    and it returns a useful value. When defining functions, we generally 
    want to limit behavior to one or the other.

    On line _, we declare the local variable sum and initialize it to
    the evaluation of the addition operation that binds the values of
    the two arguments.

    The value assigned to sum will then be printed to the console
    on the folowing line. This is a side effect.

    Then on the final line of the function body, we see that Paul
    wants to return sum as the explicit return value out of the function.

    A possible solution here would be to create two functions, one that
    calculates and returns a sum as a useful value, and another that
    prints the sum to the console. We could utilize the calculation
    function within the display sum function and reuse it in other parts
    of the program.

    This will give us more flexibility, and make code easier to maintain
    since we will be clear on the functionality of each function.

    function calculateSum(num1, num2) {
      return num1 + num2;
    }

    function displaySum(num1, num2) {
      console.log(calculateSum(num1, num2))
    }
    
Is there any issue with the code below?

  function descendingSort(arr) {
    let result = arr.sort((a, b) => b - a);
    return result;
  }

  let numbers = [1, 2, 3];

  descendingSort(numbers); 

  - In general, we would want to avoid having a function induce a side
    effect and return a value back to the calling code. The side effect
    occurring here is on with the invocation of sort on line 66, called
    on the argument arr. Sort is a mutating method, so it will mutate
    the array referenced by the global variable numbers.

    And then on line 67, we return the value assinged to the local
    variable result as well.

    Here are the two possible solutions:
    1. If we want to preserve only the mutation behavior, remove the
       return statement on line 67. The implicit return would be
       undefined, but as long as the name is self-documenting of the
       functionality, it would be clear that the function does not return
       a value. Possible names include invertOrder or modifyOrder

    2, If we only want to return a value, we could create a shallow copy
       of the referenced array that we passed in as an argument.
       This can be accomplished with either the static method
       Object.assign(), using an empty object literal as the argument,
       and our object reference as the second argument.
       (We want to use a new object as the first argument since this
        asign method mutates the first argument). This will return
        a new array that is a copy of the original array.

        (Alternatively, we can use spread syntax to separate out the
        array eleemnts and then re-enclose them in square brackets [ ].

    A final caveat to this answer: sort is a builtin method that apparently
    creates a side effect and returns a value (the mutated array).
    But it is a best practice in any case to avoid this.


    
*/


