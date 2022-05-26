// Done~!
/**
 * 5/25/22
 * PEDAC time: ~ 15 minutes
 * Coding time: ~ 10 minutes (15 total after catching mistake; see note below)
 *
 * Total time: 24 minutes 25 seconds (29:37 total after catching mistake)
 *
 * Takeaways:
 * We had a couple of typos and mistakes when translating from
 * - problem description to the rules
 * - rules to the algorithm
 * We were able to catch them before we began coding.
 *
 * It is ok to make mistakes, and it's best to catch mistakes before you begin
 * implementing the code.
 *
 * After you finish the pseudocode, go back and review the data structure
 * example to make sure that it is aligned. (found a problem with indexing)
 *
 * Code executed without a hitch
 * We should also probably try practicing these in coderPad
 *
 * A MISTAKE WAS MADE
 * ...... scratch that. It looks like by calling sort, it is possible that we
 * may return the wrong string combo in certain edge cases because we
 * will scramble the original order. (ie if there are two combinations of equal length
 * occurring at different points)
 *
 * Goes without saying, triple check your algorithm, line by line against
 * the rules of the problem.
 */

// Problem Description You are given an array of strings and an integer k.
// Your task is to return the first longest string consisting of k
// consecutive strings taken in the array.

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true

// n being the length of the string array, if n = 0 or k > n or k <= 0 return ""

// 

/**
 * Input: Array of strings
 * Output: String
 *
 * Rules
 * =====
 * Explicit Requirements:
 * - k = the number of strings forming the longest strings
 * - Consecutive means that the strings are next to one another
 * - The string returned is the FIRST longest string consisting of k consecutive strings
 * - Handling atypical inputs
 *    - If the length of the string array is 0, return ""
 *    - If k is greater than the length of the array, return ""
 *    - If k is less than 0, return ""
 *
 * Implicit Requirements:
 * - Assuming that the array elements will always be strings
 * - Assuming that the second argument k is always a number
 * - If the longest string is bookended by two of the second-longest strings of
 *    equal length, we shall return the two strings that occur first
 * - Length is the same as the length property of the string
 *    (white spaces included)
 *
 * DS + A
 * abc abcde abcdefghi abc abcd || k = 2
 * abc abcde | abcde abcdefghi | abcdefghi abc | abc abcd
 * abcde abcdefghi is the longest
 * 
 * abc abcde abcdefghi abc abcd || k = 3
 * abc abcde abcdefghi | abcde abcdefghi abc | abcdefghi abc abcd
 * abcde abcdefghi abc is the longest
 *
 * Agorithm
 * ========
 * Given an array of strings and a number k
 * Declare inputLength, initialize it to the length of the input array
 * inputLength === 0 || if k is greater than inputLength || k < 0
 * - return ""
 *
 * Declare string combinations array, init to empty array
 * stringCombos will store strings that combine elements from the input string
 *
 * Declare starting index as 0
 * Declare an endpoint as k
 * Loop over the input array
 * - Make a slice of array elements from startingIndex to the endpoint
 * - join the slice as a string, and push it to string combinations
 * - Increment both the starting index and the endpoint by 1
 * Repeat loop until endpoint is equal to the length of the array
 *
 * XXXX Sort the stringCombos by length, ascending XXXXX 
 * *Axe the above, this will not meet our requirements for order*
 *
 * declare variable max length, init to 0
 * declare variable index of max, init to -1
 * Iterate over string combos with index
 * - if stringCombo length is > max length
 *  - assign max length to the length
 *  - assign index of max to the current index
 * - (if the stringCombo length is <=, it is skipped implicitly)
 * Loop is repeated until all elements are assessed. 
 *
 */


function longestConsec(strings, k) {
  let stringsLength = strings.length;
  if (stringsLength === 0 || k > stringsLength || k <= 0) return "";

  let stringCombos = [];

  let startingIdx = 0;
  let endpoint = k;

  while (endpoint <= stringsLength) {
    stringCombos.push(strings.slice(startingIdx, endpoint).join(""));
    startingIdx += 1;
    endpoint += 1;
  }

  let maxLength = 0;
  let longestIndex = -1;

  stringCombos.forEach((string, idx) => {
    if (string.length > maxLength) {
      maxLength = string.length
      longestIndex = idx;
    }
  })

  return stringCombos[longestIndex];

}

// Test Cases
// console.log(longestConsec(['bacon'], 1))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

for (let counter = 0; counter <= 10; counter++) console.log(counter);
