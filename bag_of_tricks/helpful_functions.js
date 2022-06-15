// see https://www.codewars.com/users/jgdodson/authored for others

// This will return a 2-dimensional array. Left subarray are elements that meet the criteria.
// right elements do not meet the criteria.

function partition(arr, criteria) {
  return [arr.filter(ele => criteria(ele)), 
          arr.filter(ele => !criteria(ele))
         ];
}

console.log(partition([1, 2, 4, 7], x => x % 2 === 0));


// ================================================================================================
// ================================================================================================

// take while will take a collection and return the elements that satisfy the criteria UNTIL a combo breaker.

function takeWhile(arr, predicate) {
  let idx = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (!predicate(arr[i])) break;
    idx++;
  }

  return arr.slice(0, idx);
}

console.log(takeWhile([1, 5, "cat", 6], x => typeof x === 'number'))
console.log(takeWhile([2, 4, 6, 9, 8, 10], x => x % 2 === 0));
console.log(takeWhile([5, 7, 9], x => x % 2 === 0));

// ================================================================================================
// ================================================================================================

// generateSubstrings. This is a string processing trick that makes me cry every time.
/*
- Two pointers: left, and right
- Left pointer is the starting character
- Right pointer is the space that the substring goes up to but does not include

- pattern is:
- slower loop, the outside loop is the left pointer, keeps going until the last char in the string
- faster loop, the inside loop, it executes for each starting character
  - It basically starts with the starting char + 1 space, and continues to move to the right by one space
  - until it is the length of the string
*/


function generateSubstrings(string) {
  let substrings = [];
  for (let startCharIdx = 0; startCharIdx < string.length; startCharIdx++) {
    for (let upTo = startCharIdx + 1; upTo <= string.length; upTo++) {
      substrings.push(string.slice(startCharIdx, upTo));
    }
  }

  return substrings;


}
console.log(generateSubstrings('halo'));
