

/*

Under 20 minutes, fast

Input: String
Output: Number

Rules
=====
- Return the length of the longest vowel substring
- Vowel substring: is a substring comprised only of vowels
- Substring: a sub-sequence of consecutive characters within a string
- vowels: aeiou

Notes /Implict requirements
=====
- Input will have alphabetic chars only
- No spaces in the input
- strings will be all lowercase
- How to handle empty strings? invalid arguments?
  - nope

DS + A
======
suoi
s
su
suo
suoi

u
uo
uoi

o
oi

i


Algorithm
=========

getSubstrings(string)
- Declare result, initialize to empty array
- Iterate over each index (idx) in string
  - Iterate over each endingIndex while endingIndex < (length of string + 1)
    - endingIndex intialized to the (startIndex + 1)
    - push string.slice(idx, endingIndex) to our result array
  - INNER LOOP ENDS when ending Index is >= length of string + 1
- OUTER LOOP ENDS when the starting idx is no longer < length of string
- Return result

solve(string)
- Given a string
- Declare substrings initialize to the return of getSubstrings(Helper)
- Filter substrings to include the elements comprised only of vowels.
  - call on every on substring split into characters
  - Every should return true if all characters are a vowel
  - Call returns the boolean from every to filter
- => initialize to "filteredArray"

- sort filteredArray, ascending by length
- Reference the last element of filteredArray, and return its length.

https://www.codewars.com/kata/59c5f4e9d751df43cf000035

https://www.codewars.com/kata/58b8d22560873d9068000085

*/

function getSubstrings(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx++) {
    for (let endingIdx = idx + 1; endingIdx < string.length + 1; endingIdx++) {
      result.push(string.slice(idx, endingIdx));
    }
  }

  return result;
}

function solve(string) {
  let substrings = getSubstrings(string);
  let filteredArr = substrings.filter(substring => {
    return [...substring].every(char => {
      return /[aeiou]/.test(char);
    })
  })

  filteredArr.sort((a, b) => a.length - b.length);
  return filteredArr.pop().length;

}


console.log(solve("codewarriors")); //2
console.log(solve("suoidea")); //3
console.log(solve("ultrarevolutionariees")); //3
console.log(solve("strengthlessnesses")) //1
console.log(solve("cuboideonavicuare")) //2
console.log(solve("chrononhotonthuooaos")) //5
console.log(solve("iiihoovaeaaaoougjyaw")) //8

