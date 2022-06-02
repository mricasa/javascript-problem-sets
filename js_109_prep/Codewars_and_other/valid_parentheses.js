/*
Input: String
Output: boolean

Rules
=====
- String contains parentheses
- Determine if the order of parentheses is valid
- Return true if valid
- Return false if invalid

Implicit requirements:
- There will always be parentheses

Algorithm
=========

- validParentheses(parens)
- Declare balance, initialize it to 0
- Split parens into an array of chars
- Iterate with index over in the array
  - If ( , add 1 to balance
  - If ), subtract 1 from balance
  - If balance < 0, break
- END when index is out of bounds
- Is balance 0? 
  - If yes, return true
  - Else return false 

*/

// 4 minutes and 40 s (but we already know the solution)

// Code (4 minutes to code)
// ====

function validParentheses(parens) {
  let balance = 0;

  for (let idx = 0; idx < parens.length; idx++) {
    let char = parens[idx];
    balance += ( char === "(" ? 1 : -1 );
    if (balance < 0) break;
  }

  return !balance;
}

console.log(validParentheses("("))

console.log(validParentheses("()"))