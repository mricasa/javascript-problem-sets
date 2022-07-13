// Find the longest substring whose characters are in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// The input will only consist of lowercase characters and will be at least one letter long.
// If there are more than one solutions, return the one that appears first.


/*
Input: String 
Output: Substring with the longest substring in alphabetical order 

Rules:
- All lowercase 
- input string will be at least one letter long
- Return alfabetical order 
 - "ffffffaaaaabbbbccccddddfffff" // aaaaabbbbccccddddfffff
- If there are two substrings that have the longest alphabetical order retirn first substring 

P: Find the longest substring in the argument provided. The substing has to be alfabetical order. 

Data structure:
  -string 
  //
  -array of all the substrings
  -filter only alphabetical substrings

algorithm:
roxane:
//Iterate through the char of the string,fetch the index of the char
//iterate through index + 2 to the length of the string, then we can get substrings of [index,index+2], [index,index+3]…all the way to the [index,length-1]
// iterate an empty array to store all the arrays which are in alphabetic order,aka we are checking if we sort the array if it is the same as the original array
// when we are iterate, we check if each of the substring is in alphabetic order, if any one is not in alphabetic order, stop and then move on to the next character
// if the substring is in alphabetic order, then push this substring to the empty array, and move on to the next
//After we have iterate through every chars, we would have a array of subarrays, then we return the one with the longest length
//or if their length is the same, we return the one comes first in the array

Algorithm Daniel:

- Create the longest function with one paramatrer
- Declare a stringArray var and initialize it into argument split 
- Declare longestSubstr var into empty array
- Iterate through the stringArray var 
- If the stringArray current index is less than (<) 'z' and greater than (>) than 'a'
- push the current index into longestSubstr 
- Return longestSubstr convert to string 

*/












//devin
//initialize a variable with the value of an 
//empty string to hold the returned substring. 
//iterate over the first char in the string 
//iterate over the second char in the string, if the charCodeAt() value is equal or >
//than the value from the previous char , += this substring to the empty string.
//If the value is < the previous value, continue the program to the next iteration to 
//evaluate of the next value is => than this one. 
//if you return a string that is has a greater length than the previously stored substring,
//replace it with the new value
//iterate over the next value, if it is equal or greater than the last value add 
//it to the substring.

// Michael
// * longestAlphaSubStr()
// * Given a string
// * Declare an empty array, substrings, initialize to empty array
// * Iterate over the string, apply generateSubstr method ??????
// * -- add the resulting array of substrings to substrings
// * Loop end
// * Flatten the array of substrings
// * Declare a variable longest, which will store our result string
// * Loop over the substrings
// * -- If the substring is not alphabetical, skip it
// * -- Otherwise, check if its length is GREATER than the longest
// * ---- If it is greater, re-assign to longest to substring
// * ---- otherwise, continue
// * Loop End
// * Return longest  
// * 
// * ?????? generateSubstr(string, starting Idx, endingIndex) ??????
// * given a string and starting Idx
// * declare substringSet, initialize to empty array
// * Iterate, endingIndex
// * -- make a copy of the string from startIdx to the endIdx 
// * -- push copy to substringSet 
// * -- increment the endingIndex
// * END when we endIdx  is out of range of string
// * return substringSet
// * 
// * isAlphabetical()
// * - given a substring
// * - return the evaluation of whether its alphabetical
// * 
// */


//

/* Emma
- find all of the substrings of the given string and add them to an array, 'substrings' (helper function)
  - create an empty array
  - nested for loop (use slice and push to add each substring to the array)
    - outer index (idx) starts at 0 and goes to (string length - 1)
    - inner index (jdx) starts at (idx + 1) and goes to (string length)
- filter for the substrings that are alphabetical (helper function)
  - declare function isAlphabetical, which takes one argument, a string, 'str'
  - if str is equal to sorted string (split, sort, join), return true
- create a variable, longestSubstring, which is an empty string
- iterate over substrings array (forEach?). For each element:
  - if it's length is greater than the current length of longestSubstring, reassign longestSubstring to this element
- return longestSubstring
*/

function isAlphabetical(string) {
  let charArray = string.split("");
  let sortedWord = charArray.sort().join("");
  return (string === sortedWord);
}

function longest(string) {
  let substrings = getSubstrings(string);
  substrings = substrings.filter(elem => isAlphabetical(elem)); 
  
  let longestSubstring = '';
  substrings.forEach(substr => {
    if (substr.length > longestSubstring.length) longestSubstring = substr;
  })

  return longestSubstring;
}



function getSubstrings(string){
  let substrings = []
  for(let index1 = 0; index1 < string.length; index1++){
    for(let index2 = index1 + 1; index2 <= string.length; index2++){
      substrings.push(string.slice(index1, index2))
    }
  }
  return substrings
}

console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') === 'fgikl');
console.log(longest('z') === 'z');
console.log(longest('zyba') === 'z');

