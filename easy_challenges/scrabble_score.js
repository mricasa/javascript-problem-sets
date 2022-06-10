// Scrabble Score

/*
Input: Word
Output: Number


Rules
=====
- Sum the value of all letters in each word
- Return the sum (points)



Alg
===
- Declare object tiles, initialized to the provided keys and vals

- Given a word
- Split the word into characters
- => Initialize to charArray

- [Return the evaluation of the expression below]
- Reduce charArray to points, iterating over letter
  - let points be the accumulator; initialize accumulator to 0
  - Reference the value of the upcased letter in tiles
  - => letterPoints
  - return points + letterPoints

*/


const TILES = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4, 
  W: 4, 
  Y: 4, 
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

function scrabble(word) {
  return [...word].reduce((points, letter) => {
    return points + TILES[letter.toUpperCase()];
  }, 0)
}

console.log(scrabble('cabbage'));

const TILES2 = {
  "AEIOULNRST": 1,
  "DG": 2,
  "BCMP": 3,
  "FHVWY": 4,
  "K": 5,
  "QZ": 10
}




function scrabble2(word) {
  let points = [...word].reduce((points, letter) => {

    let key = Object.keys(TILES2).find(key => {
      let pattern = new RegExp(`[${key}]`, "i");
      return pattern.test(letter)

      // also could have used  
      // return key.includes(letter.toUpperCase());

    })

    return points + TILES2[key];

  }, 0)
  return points;
}

console.log(scrabble2('cabbage'));


