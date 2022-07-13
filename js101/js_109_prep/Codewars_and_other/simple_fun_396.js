//Simple Fun #396: Find the Longest Substring Consisting of Unique Characters
// 40 MINUTES !!

// Mental model of string looping abstraction is hard

// Task

// You are given a string s. It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s,
// and return the length of it.
// Note

//     1 <= s.length <= 10^7

//     5 fixed testcases

//     100 random testcases, testing for correctness of solution

//     100 random testcases, testing for performance of code

//     All inputs are valid.

//     Pay attention to code performance.

//     If my reference solution gives the wrong result in the random tests,
//     please let me know(post an issue).

// Example

// For s="baacab", the output should be 3.

// The non repeating substrings in s are:

// "b","c","a","ba","ac","ca","ab","cab"

// The longest one is "cab", its length is 3.

// For s="abcd", the output should be 4.

// The longest one is "abcd", its length is 4.

// For s="!@#$%^&^%$#@!", the output should be 7.

// The longest substring are "!@#$%^&" and "&^%$#@!", their length both are 7.

/**
 * 
 */


/*
// 40 minutes

Input: String
Output: Number

Rules
=====
- String consists of letters, numbers, or symbols
- Find the longest substring that consists of unique
  characters.
- Return the length of the longest substring.

Implicit requirements:
- 

"baacab"
Substrings with unique chars are:
  b
  ba
  a
  ac
  c
  ca
  cab
  ab

Algorithm
=========
Input: string

- Declare a variable longest (this stores our longest string)
- Declare a var currentString

- OUTER LOOPER with startingIdx (start at 0; increment by 1)
  - currentString = string[startIndex]

  - INNER LOOP with charIdx (initialize as startingIndex + 1)
    - Does currentString split into characters include string[charIdx]?
      - If no: currentString = currentString + string[N]
      - Else: break
  - END INNER LOOP

  - Is currentString length > longestString length?
    - If yes, re-assign longest to currentString
    - If no, continue
  - Reset currentString to ''
  - Increment startIndex
- END OUTER LOOP
- Return the length of longest
*/

function longestSubstringOf(string) {
  let longest = '';
  let currentString;

  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    currentString = string[startIdx];
    
    for (let charIdx = startIdx + 1; charIdx < string.length - 1; charIdx++) {
      let char = string[charIdx]
      if (currentString.split("").includes(char)) {
        break;
      } else {
        currentString += char;
      }
    }

    longest = currentString.length > longest.length ? currentString : longest;
  }

  return longest.length;
}

console.log(longestSubstringOf("baacab")) //,3,"cab is the longest substring.")
console.log(longestSubstringOf("abcd")) //,4,"abcd is the longest substring.") 
console.log(longestSubstringOf("hchzvfrkmlnozjk")) //,11,"chzvfrkmlno is the longest substring.")  
console.log(longestSubstringOf("!@#$%^&^%$#@!")) //,7,"!@#$%^& is the longest substring.")
  
console.log(longestSubstringOf("abcd".repeat(10000)+"abcde"+"abcd".repeat(10000)))
