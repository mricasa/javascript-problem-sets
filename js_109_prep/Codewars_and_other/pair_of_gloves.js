/*
Input: Array
Output: Number

Rules
=====
- Determine the number of pairs of gloves
- Only gloves of the the same color can form pairs

Alg
===
- Given an array of colors
- Declare glovesCount, initialize to an empty object
    (e.g., red: 1, blue:2 ... etc)

- Iterate over each color in array of colors:
  - If the color is a key of glovesCount, assign its value to itself incremented by 1
  - Else, assign a new key of the string "color" and intialize to 1
- END after iterating over the full length

- Declare counts, initialize to an array of values in glovesCount

- Transform counts into the count / 2, rounded down
=> Filter the transformation for truthy values (0s will be ignored)
==> Return the length of the selection
*/

function numberOfPairs(gloves)
{
  let glovesCount = {};
  gloves.forEach(color => {
    if (glovesCount[color]) glovesCount[color] += 1;
    else glovesCount[color] = 1;
  })
  
  let pairs = Object.values(glovesCount).map(value => Math.floor(value / 2));
  
  return pairs.filter(pair => pair).length;
}