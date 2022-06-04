/*
Input: Integer
Output: Integer

Rules
=====
- Delete exactly 1 digit from an integer
- Return an integer
  - The integer must be the maximal value you can obtain from deleting exactly 1 digit
    -Maximal: Greatest possible value

Implicit requirements:
- All arguments are integers
- 152 -> 52 (1 is deleted)
- 1001 -> 101, (0 is deleted)
- Argument is at least 10

E (Examples)

DS & Algorithm
==============

Comparing each deleted value...
152
52, 12, 15

1001
001, 101, 101, 100



Algorithm
=========
- Given an integer

- Split integer into digits
- => Initialize to variable digits

- Declare possibleValues, initialize to empty array []

- Iterate over each idx in digits
  - Make a copy of digits
  - => Initialize to digitsCopy

  - Remove a digit from the array of digits splice (idx,1)

  - Join the digits into a string, coerce into number
  - => Push this result to possibleValues
  - 
- END iteration

- sort possibleValues numerically, ascending
- Return last value of possibleValues

*/

function deleteDigit(number) {
  let digits = [...String(number)];
  let possibleValues = [];

  for (let idx = 0; idx < digits.length; idx++) {
    let digitsCopy = [...digits];

    digitsCopy.splice(idx, 1);

    possibleValues.push(Number(digitsCopy.join("")));
  }

  return possibleValues.sort((a, b) => a - b).pop();
}

console.log(deleteDigit(152))  //,52)
console.log(deleteDigit(1001)) //,101)
console.log(deleteDigit(10))   //,1)
