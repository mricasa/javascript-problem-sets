/*
Input: String
Output: String (highest scoring word)

Rules
=====
- Return the highest scoring word
- Word: any string of consecutive characters, delimited by blank space
- Points are according to their position in the alphabet
- If two words score the same, return the word that appears earliest in the string
- All inputs are valid
- All letters will be lowercased

Implicit
- No special characters
( no questions , 2:53)


DS + A 

aaa b  => aaa
  3  2 

Example of a tie:
  aa b => aa
  2  2
  aa occurs first, so aa is returned 

Algorithm
=========

high(string)

- split the string into words (split on blank space)
- => initialize the array to words

- declare a highestScore, initialize to 0
- declare highScoringWord, initialize to ""

- Iterate over word in words:
  - Split word into character array
  - => Reduce character array to number of points
       - pass character to convertToPoints (HELPER)
       - return accumulator += points to reduce
  - END reduce
    => Intialize number of points to wordPoints
  
  wordPoints > highestScore ?
    - If yes, re-assign highestScore to wordPoints
              re-assign highScoringWord to word
    - If no, don't do anything
  
- END iteration over words

return highScoring word

convertToPoints(character)
- return charCode value - 96
  
[11 minutes on DS + A]


*/

function calcPoints(word) {
  return word.split("").reduce((points, char) => {
    return points + (char.charCodeAt() - 96);
  }, 0)
}

function high(string) {
  let highScore = 0;
  let result;

  string.split(" ").forEach(word => {
    let pointValue = calcPoints(word)

    if (pointValue > highScore) {
      highScore = pointValue;
      result = word;
    }
  })

  return result;
}

console.log(high('man i need a taxi up to ubud'))//, 'taxi');
console.log(high('what time are we climbing up the volcano'))//, 'volcano'); 
console.log(high('take me to semynak'))//, 'semynak'))//;   
console.log(high('aa b'))//, 'aa');
console.log(high('b aa'))//, 'b');
console.log(high('bb d'))//, 'bb');
console.log(high('d bb'))//, 'd');
console.log(high('aaa b'))//, 'aaa');

// Code was 5 minutes, 44 seconds
// Total is 20 minutes.

// This unique solution first converts all words to their point values, then
// finds the maximum value among the transformation.
// The maximum value is used as a criterion to find the index of the
// first element with the highest score.

/*
- Given a sentence

- Initialize array of words (split)
- Transform array of words by passing word
  - Split word to chars, Reduce to points
    - Return accumulator + pointValue of the word ( = charCodeAt - 96)
  - END reduce
  - Return reduction back to map
- END transform

- Given a sentence
- Sentence => array of words (split)
- Transform Array of words to  array of points, call map
  - word => chars, and convert to points
    - Convert char to number ( = charCodeAt -96)
    - Return reduction to map
- END of transformation
-
- Find the value highScore of Maximum points among array of point values
- => Pass highScore into finding Index in the original input array
- ==> Return the element at Index

*/

console.log("========================");
function high2(string) {
  let words = string.split(" ");
  let scores = words.map(word => {
    return [...word].reduce((points, char) => {
      return points + (char.charCodeAt() - 96);
    }, 0);
  })

  return words[scores.indexOf(Math.max(...scores))];

}

console.log(high2('man i need a taxi up to ubud'))//, 'taxi');
console.log(high2('what time are we climbing up the volcano'))//, 'volcano'); 
console.log(high2('take me to semynak'))//, 'semynak'))//;   
console.log(high2('aa b'))//, 'aa');
console.log(high2('b aa'))//, 'b');
console.log(high2('bb d'))//, 'bb');
console.log(high2('d bb'))//, 'd');
console.log(high2('aaa b'))//, 'aaa');