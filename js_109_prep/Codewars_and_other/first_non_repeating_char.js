// about 40 minutes

// First non-repeating character

/*
Input: string
Output: string (non-repeating character)

Rules
=====
- Non-repeating character: A character that appears only once in a string
- Return the First non-repeating character in the string
  - stress -> t
- Consider upper and lowercase characters the SAME character
- BUT return the character using the original case
  - sTreSS -> T
- If all characters in the string are all repeating, return an empty string ""

Implicit requirements:
- Valid inputs (no empty strings, input is always a string)
- If only one character, return that character
- If all non-repeating, return the first character
- Chars are always alphabetical (abc)


Examples
========
'a' -> 'a'
'stress' -> 't'
'moonmen' -> 'e'
'soS' -> 'o' // count of char is case insensitive




DC + A
======

firstNonRepeatingLetter(string)
- split the string into characters
- => initialize to declared variable charArr

- filter charArr, using index
  - Make a copy of charArr that we can mutate
  - => Initialize to arrCopy

  - Splice out the element at index of arrCopy, mutating the array
  - => initialize to testedChar

  - Does arrCopy include (upcased testedChar) OR 
                         (include lowcased testedChar)
    - If yes, return false to filter
    - If no, return true to filter
  -
- Filter END
- => Initialize to uniqueChars

- Return the first element of charArr

*/



function firstNonRepeatingLetter(s) {
  let charArr = s.split("");

  let uniqueChars = charArr.filter((character, idx) => {
    let otherChars = [...charArr];
    let testedChar = otherChars.splice(idx, 1).pop();
    return isUnique(testedChar, otherChars)
  })

  return uniqueChars.shift() || "";
}

function isUnique(char, array) {
  let arr = array.map(char => char.toLowerCase());
  char = char.toLowerCase();
  return arr.includes(char) ? false : true; 
}

 

console.log(firstNonRepeatingLetter('a')); // , 'a');
console.log(firstNonRepeatingLetter('stress')); // , 't');
console.log(firstNonRepeatingLetter('moonmen')); // , 'e');