/*
Other solutions worth investigating...
https://www.codewars.com/kata/5977ef1f945d45158d00011f/solutions/javascript/all/best_practice



29 minutes !!


Input: string
Output: 2-layer Nested Array

Rules
=====
- Return an array of arrays from argument string
- Separate each word of the string into individual letters
- The first word in the sequence having its letters
  in the 0th index of each 2nd dimension array and so
  on


      (rows are 2nd-level arrs)
                Just live life man
Index in 2nd arr: 0    1    2   3
              0   J
              1   u
              2   s
              3   t

- Think of indexes as columns
- Shorter words will have an empty string in the place

// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);


Implict requirements
- What can tell about the validity of each input?
- Assuming that the input does not have any escape
  sequences?
- Treating all characters as characters


DS & A
=======

_ represents empty str
The Cabin in

     0 1 2
   0 T C i
   1 h a n
   2 e b _
   3 _ i _
   4 _ n _



Canvas properties

W: the number of words (length of wordArr)
L: the length of the longest word
(note that indices will be - 1 from length)


createCanvas(string)
- Declare wordArr, initialize to split words

- Declare width
  - access length of wordArr (number of words)

- Declare "Length"
  - *Make a copy of wordArr
  - sort by word length, descending from high to low
  - initialize to the first element of that sort

- Row: new Array with length of width, map transforming
     all values to "" (empty string)

- declare canvas, initialize to empty array

- Create the grid row by row using a for loop
  - Counter starts at 0
  - Push a row to canvas variable
  - Increment counter by 1
- Loop ends when counter is no longer < Length

- Return canvas


once you have the canvas, we can add letters to their
resepective locations...

sepStr(str)
- Create the canvas by calling the helper function
- Declare a variable wordArr initializing to str split into words
- Iterate over each word in wordArr with index (i) (col):
  - Iterate over each character in word with index (j):
    - canvas[j][i] = character
  - END inner loop
- END outerloop



     0 1 2
   0 T C i
   1 h a n
   2 e b _
   3 _ i _
   4 _ n _



*/

function createCanvas(str) {
  let wordArr = str.split(" ");
  const WIDTH = wordArr.length;
  const LENGTH = wordArr.slice().sort((a, b) => b.length - a.length)[0].length;

  let canvas = [];

  for (let times = 1; times <= LENGTH; times++) {
    let row = [...Array(WIDTH)].map(space => "");
    canvas.push(row);
  }

  return canvas;
}


function sepStr(str) {
  let canvas = createCanvas(str);
  let wordArr = str.split(" ");

  wordArr.forEach((word, i)=> {
    [...word].forEach((char, j) => {
      canvas[j][i] = char;
    })
  })

  return canvas;
}




console.log(sepStr("Just Live Life Man"));
