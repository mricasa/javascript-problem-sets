/**
 * longestAlphaSubStr()
 * Given a string
 * 
 * Declare an empty array, substrings, initialize to empty array
 * Iterate over the string, apply generateSubstr method
 * -- add the resulting array of substrings to substrings
 * Loop end
 * 
 * Flatten the array of substrings
 * 
 * Declare a variable longest, which will store our result string
 * 
 * Loop over the substrings
 * -- If the substring is not alphabetical, skip it
 * -- Otherwise, check if its length is GREATER than the longest
 * ---- If it is greater, re-assign to longest to substring
 * ---- otherwise, continue
 * Loop End
 * 
 * Return longest  
 * 
 * ?????? generateSubstr(string, starting Idx, endingIndex) ??????
 * given a string and starting Idx
 * declare substringSet, initialize to empty array
 * Iterate, endingIndex
 * -- make a copy of the string from Idx to the end of the string 
 * -- increment the startingIdx
 * return substringSet
 * 
 * isAlphabetical()
 * - given a substring
 * - return the evaluation of whether its alphabetical
 * 
 */


//  - declare function isAlphabetical, which takes one argument, a string, 'str'
//  - if str is equal to sorted string (split, sort, join), return true

function isAlphabetical(string) {
  let charArray = string.split("");
  let sortedWord = charArray.sort().join("");
  console.log(sortedWord)
  return (string === sortedWord);
}

console.log(isAlphabetical('zsdfwe'))
console.log(isAlphabetical('abtu'))