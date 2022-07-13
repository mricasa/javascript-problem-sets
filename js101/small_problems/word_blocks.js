
/*
Input: String
Output: Boolean


Understanding the problem: 4:50

Requirements
============
- Function takes a word string argument and returns
  - True if the word can gbe spelled using the set of the of blocks
  - False if otherwise.
- Word block: Letter pairs. Only one letter per block may  be used in
  a word.
  - You can only use each block once

    E.g., B:O
          boo -> false
          ooo -> false
          beat -> true

- Consider letters to be case insensitive when you apply the rules

Implicit req
============
- Valid inputs?
- If an empty string, return true?
- Special symbols ignored
- Single words only

DS & Algorithm: 10:32 
DS + A
======

j e s t
uses J:W, R:E, F:S, G:T


B U T C H
[B:O]   X:K   D:Q   [C:P]   N:A
[G:T]   R:E   F:S   J:W   ![H:U]!
V:I   L:Y   Z:M


Algorithm
=========

isBlockWord(word)

- Declare wordBlocks array, initialize to the given wordblock pairings
    [BO, XK, DQ...]

- Iterate through idx in word
  - Uppercase the letter
  => Initialize to letter

  - Declare match, initialize to false

  - Iterate through pairing in wordBlocks
    - If pairing includes letter
      - Yes: Re-assign match to true
             Reassign the value at pairing idx to mask (undefined) 
      - No:
        - continue onto next pairing
  
  - END iteration when we have compared the letter to all pairings

  - Is Match true or false?
    - If false, return false
    - Else, return to the top of the word letter loop
  -
- END letter loop

- Return true

*/

// 9 minutes

function isBlockWord(word) {

  let wordBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']]

  for (let idx = 0; idx < word.length ;idx++) {
    let letter = word[idx].toUpperCase();
    let match = false;

    for (let idx2 = 0; idx2 < wordBlocks.length; idx2++) {
      let pairing = wordBlocks[idx2];

      if (pairing.includes(letter)) {
        match = true;
        wordBlocks[idx2] = [undefined];
      } 
      
    }

    if (!match) return false;
  }

  return true;

}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true

console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false