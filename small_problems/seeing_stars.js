/*

[Stopped keeping time, but it's at least 40 mins for this one

Maybe 20 mins spent on alg alone]

Input: Integer
Output: Printed strings  to console

Requirements
============
- Display an 8-pointed star in a NxN grid
- N is an odd integer
- The smallest star we need to handle is 7x7


Implicit req
============


DS + A
======
star(7)

*  *  *     each row has a length of 7
 * * *      next row starts with blank space, then alterates every other
  ***       Always 3 starts per line (unless center)
*******
  ***       Pattern repeats after midpoint
 * * *
*  *  *     Length = to width N X N



Star indices
Space indices
Line size 

                Stars           Spaces
0  *  *  *       0, 3, 6          1, 2, 4, 5
1   * * *        1, 3, 5          0, 2, 4, 6
2    ***         2, 3, 4          0, 1, 5, 6
3  *******       (whole line)     undefined
4    ***         2, 3, 4          0, 1, 5, 6
5   * * *        1, 3, 5          0, 2, 4, 6
6  *  *  *       0, 3, 6          1, 2, 4, 5


- Highest index is N - 1
- Middle star is always the same

L star sequence: 0, 1, 2 (stops at midpoint)
R star sequence: 6, 5, 4 (stops at midpoint)

Middle line is always all indexes as stars

Helper: Builds line by line, passing in the row and N
- needs to understand midpoint


drawRow(row, N) (Row must be a 0-based index)
- Divide N / 2, round down
- => Initialize to midpoint (midpoint index)

- If row === midpoint
  - Return string of stars repeating N times

- (IF ROW IS > midpoint) row = row - (midpoint + 1)
-   
- [Else]:

- Declare canvas, initialize to array of length N
  - Map all values to " "
- Set midpoint index of the canvas to * (middle point)

- set leftStar as row
- set rightStar as ( length - (row + 1) )


- (output a string)

*/

function drawRow(row, N) {
  let midpoint = Math.floor(N / 2);

  if (row === midpoint) return "*".repeat(N);

  if (row > midpoint) row = (N - row - 1);

  let canvas = [...Array(N)].map(space => " ");
  canvas[midpoint] = "*";

  let leftStar = row;
  let rightStar = N - (row + 1);

  canvas[leftStar] = "*";
  canvas[rightStar] = "*";
  return canvas.join("")
}

function star(N) {
  for (let row = 0; row < N; row++) {
    console.log(drawRow(row, N));
  }
}

star(7);
console.log("")
star(9);
console.log("")
star(11);
console.log("")
star(13);
console.log("")
star(15);
console.log("")
star(17);