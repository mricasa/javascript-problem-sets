  /*
Input: String
Output: Number (number of duplicated characters)

Rules
=====
- Return the count of distinct case-insensitive alphabetic characters and numeric digits
  - Characters / digits that occur more than once
  - 'aaac' -> 1 ; the character a appears more than once
- Count is insensitive to case
  - AaC -> 1 ; a is duplicated (case insensitive)
- Input only contains alphaticals and numeric digits

Implicit requirements:
- Empty strings have no repeating characters, and thus return 0



DS & A
abcde -> 0 (no chars repeated)
aabbcde -> 2 (a and b)


Algorithm
=========
duplicateCount(text)

- split text into an array of characters
=> initialize to charArray

- declare empty object, named characterBank

- iterate over charArray:
  - Lower case the character
  - => IF it is a key in characterBank 
       - Yes, increment value by 1
       - Else, create key and initialize to 0
- END iteration

- Filter characterBank for values > 0
- => return the length of the filtered array
  */

function duplicateCount(text) {
  let charArr = text.split("");
  let charBank = {};

  charArr.forEach(char => {
    char = char.toLowerCase();
    charBank[char] = (charBank[char] + 1) || (charBank[char] = 0);
  })

  return Object.values(charBank).filter(num => num).length;
}


function duplicateCount(text) {
  return Object.values([...text].reduce((obj, character) => {
    let char = character.toLowerCase();
    obj[char] = (obj[char] + 1) || (obj[char] = 0)
    return obj;
  }, {})).filter(num => num).length;
}

console.log(duplicateCount("")) // 0);
console.log(duplicateCount("abcde")) //, 0);
console.log(duplicateCount("aabbcde")) //, 2);
console.log(duplicateCount("aabBcde")) //, 2,"should ignore case");
console.log(duplicateCount("Indivisibility")) //, 1)
console.log(duplicateCount("Indivisibilities")) //, 2, "characters may not be ad
