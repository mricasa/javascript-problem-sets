/*
Input: String
Output: String (of numbered position in alphabet)

Rules
=====
- Return a string of numbers for each letter position in the alphabet
  - "a" = 1
  ' "b" = 2
- Ignore any characters that are not letters
  (spaces, numbers, # special chars are not letters)
- By ignore, it means, ignore. Spaces and other characters
  will have no bearing on the result string

Implicit req:
- Letters are space separated
- Input will be valid (no empty strings. strings only) 
- If an argument has no letters, return ""
  - "$%# ^$55" => ""
- The format of the output string is always:
    "1 1 1 1 1 1 1 1 1 1"
- Case insensitive

[Problem, 4.5 minutes, no questions]

DS & A
  abc -> "1 2 3"
  a b c -> "1 2 3"

Algorithm
=========
alphabetOrder: Object containing:
- Keys: letters, lowercased
- Values: numbers in order of the alphabet

alphabetPosition(string)
- Declare a result, initialize it to []

- Split the string into chars ("") in array
- => initialize to declared var charArray

- Iterate over each letter with index in charArray (for loop):

  - If the character is not aphabetical ([A-Za-z])
    - Continue to the next iteration

  - lowercase the letter
  - => initialize to lookupLetter

  - Retrieve the value for lookupLetter in alphabetOrder
  - => Push it to the end of result

- LOOP END

- return result.join(" ")

[7 minutes on algorithm]




[6 minutes to code, only a few seconds to debug]
*/

const ALPHABET = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

function alphabetPosition_base(text) {
  let result = [];

  let charArray = text.split("");

  charArray.forEach(function(character) {
    if (/[^A-Za-z]/.test(character)) return;

    let lookupLetter = ALPHABET[character.toLowerCase()];

    result.push(lookupLetter);
  })

  return result.join(" ");
}


// refactored with reduce
function alphabetPosition(text) {

  return text.split("").reduce((result, character) => {
    if (/[^A-Za-z]/.test(character)) return result;
    return result.concat(ALPHABET[character.toLowerCase()]);
  }, []).join(" ")

}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"))
console.log(alphabetPosition("The narwhal bacons at midnight."))

//, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")


// 17 minutes total for problem, excluding refactor