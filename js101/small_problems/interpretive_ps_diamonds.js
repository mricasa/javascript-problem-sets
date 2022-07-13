/*
Diamonds: [Further Exploration avail] -- make a hollow diamond

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Input: Number
Output: String output to console

Rules
=====
- Display four pointed diamond in an n x n grid
- argument will always be an odd integer


Implicit requirements:
- Diamond 'pixel' is an asterisk *
- An argument of 1, results in 1 pixel
- Prints row by row

Diamond Shape
=============
- Top and bottom points of the diamond are 1 pixel
- Middle row is always equal to the argument
- Number of rows is always equal to the argument (n x n)



diamond(3)
 *          1
***         3
 *          1

Diamond(5)

  *         1   2 spaces each side
 ***        3   1 space each side
*****       5   0 space each side
 ***        3   1 space each side   
  *         1   2 spaces each side (total width of 5 for all lines)

Algorithm

diamond(width)
- Declare midpoint, initialized to width / 2, rounded down
- Declare step, intialize to 1
- Declare pixelArr, initialize to a new array of width length (and make iterable)
- => Map it, with index
  - If index < Midpoint: return step; increment step by 2
  - If index > Midpoint: return step; decrement step by 2
  - else (idx is the midpoint): return step; decrement step by 2
- Number of spaces will be the value of width - pixelArr

*/

function diamond(width) {
  let pixelArr = pixelsPerRow(width)
  for (let row = 0; row < pixelArr.length; row++) {
    let pixels = pixelArr[row];
    let spaces = (width - pixels) / 2;

    console.log(" ".repeat(spaces), '*'.repeat(pixels), " ".repeat(spaces));
  }
}

function pixelsPerRow(width) {
  let midpoint = Math.floor(width / 2);
  let step = 1;

  return [...Array(width)].map((_, idx) => {
    let currentStep = step;
    step += (idx < midpoint ? 2 : -2);
    return currentStep;
  });
}
console.log(diamond(1))
console.log(diamond(3))
console.log(diamond(5))
console.log(diamond(9))

