// Not bad at all. But I keep forgetting to time these.

// Keep drilling substrings and any problems that require
// an inner loop

// NOTE: Performance based. Cannot submit Codewars solution

// Longest Palindromic Substring (Linear)

// A palindrome is a word, phrase, or sequence that reads the same backward
// as forward, e.g., 'madam' or 'racecar'. Even the letter 'x' is considered
// a palindrome.

// For this Kata, you are given a string s. Write a function that returns the
// longest contiguous palindromic substring in s (it could be the entire string).
// In the event that there are multiple longest palindromic substrings, return
// the first to occur.

// I'm not trying to trick you here:

//     You can assume that all inputs are valid strings.
//     Only the letters a-z will be used, all lowercase (your solution should,
//       in theory, extend to more than just the letters a-z though).

//NOTE: Quadratic asymptotic complexity (O(N^2)) or above will NOT work here.


/*
Input: String
Output: String (Longest paladromic substring)

Rules
=====
- Palindrome: A word that reads the same in both directions
- Substring: A segment of a string
- Return the longest palindromic substring from a string

Implicit assumptions and requirements:
- Assuming all lowercased letters
- Asuming that all inputs will be valid (no empty strings or unexpected data structures)
- 
*/

/*
Input: String
Output: String (Longest paladromic substring)

Rules
=====
- Palindrome: A string that reads the same in both directions
- Substring: A segment of a string
- Return the longest palindromic substring from a string
- It can be the entire string

Implicit assumptions and requirements:
- Assuming all lowercased letters
- Asuming that all inputs will be valid (no empty strings or unexpected data structures)
- May solve ties arbitrarily

DS +A 
======
bubl

b
bu
bub
bubl

u
ub
ubl

b
bl

Alg
===

longest_palindrome(string)
- Input is a string
- Declare an empty array for substrings

- Begin Outerloop that iterates through the left index of the substring (while < string length)
  - Begin Innerloop that iterates through the right index of the substring
    - Slice left index to right index of string (left idx + 1)
    - -> Push to substrings array
    - Increment right idx, repeat loop block while <= string length
  - END INNER LOOP
  - Increment left index 
- END OUTER LOOP

- Filter substrings using isPalindromic (helper)
- -> Sort by length, descending
- --> Return first element out of the array

isPalindromic(substring)
- return ( substring === Reversed substring (split into chars, reversed, joined) )

*/

function longest_palindrome(string) {
  if (!string || string.length === 0) return "";

  function isPalindrome(substring) {
    return ( substring === substring.split("").reverse().join(""));
  }

  let substrings = [];

  string.split("").forEach((_, leftIdx) => {
    
    for (let rightIdx = leftIdx + 1; rightIdx <= string.length; rightIdx++) {
      let substring = string.slice(leftIdx, rightIdx);
      if (substrings.includes(substring)) continue;
      substrings.push(substring);
    }
  })

  substrings = substrings.filter(substring => isPalindrome(substring))
                         .sort((a, b) => b.length - a.length);


  return substrings.shift();
};

// Strings of Even Length
console.log(longest_palindrome('banana')) // , 'anana')
console.log(longest_palindrome('abba')) // , 'abba')
console.log(longest_palindrome('cbbd')) // , 'bb')
console.log(longest_palindrome('zz')) // , 'zz')
console.log(longest_palindrome('dddd')) // , 'dddd')

// // Strings of Odd Length
console.log(longest_palindrome('babad')) // , 'bab')
console.log(longest_palindrome('madam')) // , 'madam')
console.log(longest_palindrome('dde')) // , 'dd')
console.log(longest_palindrome('ababbab')) // , 'babbab')
console.log(longest_palindrome('abababa')) // , 'abababa')

// //Edge cases
console.log(longest_palindrome()) // , '')
// console.log(longest_palindrome('abcdefghijklmnopqrstuvwxyz')) // , 'a')
// console.log(longest_palindrome('ttaaftffftfaafatf')) // , 'aaftffftfaa')
// console.log(longest_palindrome('bbaaacc')) // , 'aaa')
// console.log(longest_palindrome('m')) // , 'm')

