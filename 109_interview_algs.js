//////////////////////////////////////////////////////////
/*
In this one work a lot with substrings
*/
//////////////////////////////////////////////////////////

/*

Can the string be constructed by taken a substring of it and appending multiple copies of the substring together?

Rules
=====
- Test whether a string can be constructed using a substring and appending multiple copies
- Another way to think of this is that a string is composed of only a substring repeated multiple times
- Each substring must be complete

Test cases
==========
abab => true; the string ab repeats twice
aba => false
abaababaababaab => true; the string abaab repeats 3 times

DS
==
We can use a string


Algorithm
=========
- Iterate over possible substring sizes, starting with 1
  - Declare substring, initialize it to 0 to size substring

  - Loop over each section that is the specified size in the string
    - (Counters are left and right [boundary])
    - (End condition when right is out of range)
    - Declare section, initialize to slice of the string (left to right)

    - If the section is identical to substring
      - If the right boundary is identical to string length
        - return TRUE 
      - otherwise, CONTINUE

    - Else
      - BREAK

  - END INNER LOOP

  - End condition is when 
  - Increment size substring by 1  
- END OUTER LOOP

- return FALSE


*/

// function repeatedSubstringPattern(string) {
//   // iterate over size substrings
//   for (let size = 1; ; size += 1) {
//     if (string.length / size < 2) break;
//     let substring = string.slice(0, size);
//     //console.log(subString)
    
//     for (let [left, right] = [0, size]; right <= string.length;) {
//       left += size;
//       right += size;
//       let section = string.slice(left, right);

//       if (section !== substring) {
//         break
//       };

//       if (right === string.length) {
//         return true
//       };

//     }
//   }

//   return false
// }

// console.log(repeatedSubstringPattern('abcabcabcabc'))

// try again using arrays...



/* 

Algorithm
=========
- LOOP over substring size (initialize size at 1)
  - BREAK if string length / size  === 2
  - Declare repeater starting from index 0 to size

  - Declare an empty array called substrings

  - LOOP through a starting and upto idx to par
    - Declare left and right to 0 and size
    - Increment left and right by size
    - Loop continues while L < length of string
    - slice string left to right
      - => push to substrings
  - END INNER LOOP

  - if every substring in substrings is equal to repeater, return true

  - Increment size by 1
- END LOOP
- return false

*/

/*

Can the string be constructed by taken a substring of it and appending multiple copies of the substring together?

Rules
=====
- Test whether a string can be constructed using a substring and appending multiple copies
- Another way to think of this is that a string is composed of only a substring repeated multiple times
- Each substring must be complete

Test cases
==========
abab => true; the string ab repeats twice
aba => false
abaababaababaab => true; the string abaab repeats 3 times

DS
==
We can use a string


Algorithm
=========
- Iterate over possible substring sizes, starting with 1
  - Declare substring, initialize it to 0 to size substring

  - Loop over each section that is the specified size in the string
    - (Counters are left and right [boundary])
    - (End condition when right is out of range)
    - Declare section, initialize to slice of the string (left to right)

    - If the section is identical to substring
      - If the right boundary is identical to string length
        - return TRUE 
      - otherwise, CONTINUE

    - Else
      - BREAK

  - END INNER LOOP

  - End condition is when string length / size is less than 2
  - Increment size substring by 1  
- END OUTER LOOP

- return FALSE


*/


// function repeatedSubstringPattern(string) {

//   for (let size = 1; string.length / size >= 2; size++) {
//     let repeater = string.slice(0, size);
//     let substrings = [];

//     for (let [left, right] = [0, size]; left < string.length ;) {
//       substrings.push(string.slice(left, right));
//       left += size;
//       right += size;

//     }

//     if (substrings.every(substr => substr === repeater)) return true;
    
//   }

//   return false;
// }

// console.log(repeatedSubstringPattern('abcabcabc'))
// console.log(repeatedSubstringPattern('abab'))

//////////////////////////////////////////////////////////
// My oroginal approach... sans substring generation 

// function repeatedSubstringPattern(string) {

//   for (let size = 1; string.length / size >= 2; size++) {
//     if (string.length % size !== 0) continue;

//     let repeater = string.slice(0, size).repeat(string.length / size);

//     if (repeater === string) return true;
//   }

//   return false;
// }








// function repeatedSubstringPattern(string) {
//   for (let size = 1; string.length / size >= 2 ; size++) {
//     if (string.length % size !== 0) continue;

//     let substring = string.slice(0, size);

//     for (let [left, right] = [size, size + size]; right <= string.length;) {
//       let stringSection = string.slice(left, right);

//       if (stringSection !== substring) break;

//       if (right === string.length && stringSection === substring) return true;

//       left += size;
//       right += size;
//     }

//   } 

//   return false;
// }


// console.log(repeatedSubstringPattern('baabaabaa'))
// console.log(repeatedSubstringPattern('abc1abcabc'))
// console.log(repeatedSubstringPattern('abaababaababaab'))

//////////////////////////////////////////////////////////
/*
SUBSTRINGS PRACTICE
*/
//////////////////////////////////////////////////////////



let string = 'halo'

function makeSubstrings(string) {
  let result = [];
  for (let left = 0; left < string.length; left++) {
    for (let right = string.length; right > left; right--) {
      let substring = string.slice(left, right);
      if (!result.includes(substring) && !(substring === string)) result.push(substring);
    }
  }
  return result; 
}

console.log(makeSubstrings(string))


/*
h a l o

h
h a
h a l
h a l o
  a 
  a l
  a l o
    l
    l o
      o


*/

function makeSubstrings2(string) {
  let result = [];

  for (let left = 0; left < string.length; left++) {
    for (let right = left + 1; right <= string.length; right++) {
      let substr = string.slice(left, right);
      if (result.includes(substr) || substr === string) continue;

      result.push(string.slice(left, right))
    }
  }

  return result;
}

console.log(makeSubstrings2(string))


function makeSubstrings3(string) {
  let result= [];

  for (let i = 0; i < string.length; i++) {
    for (let j = string.length; j > i; j--) {
      
      let substring = string.slice(i, j);
      if (substring === string) continue
      result.push(substring)
    }
  }

  return result;
}
console.log(makeSubstrings3('halo'));


// make substrings that only start from the begining of the string... do not include the string itself

function makeLeadingSubstrings(string) {
  let result = [];
  
  for (let right = 1; right <= string.length; right++) {
    result.push(string.slice(0, right));
  }

  return result.slice(0, result.length - 1);
}

console.log(makeLeadingSubstrings('caturday night'));

// rewrite the function so that it takes an offset, where it will begin assembling the substrings from.

function makeLeadingSubstringsWithOffset(string, offset) {
  let result = [];
  
  for (let right = offset + 1; right <= string.length; right++) {
    result.push(string.slice(offset, right));
  }

  return result;
}

console.log(makeLeadingSubstringsWithOffset('caturday night', 9));

// using the function above, use it in a function where you can extract all possible substrings. 

function makeAllSubstrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    result = result.concat(makeLeadingSubstringsWithOffset(string, idx));
  }

  return result;
}

console.log(makeAllSubstrings('halo'))

//////////////////////////////////////////////////////////
/*
Substrings from digits
*/
//////////////////////////////////////////////////////////

// Make all possible digits subsequences from a number

function digitSubsequences(num) {
  let numStr = String(num);
  let result = [];

  for (let left = 0; left < numStr.length; left++) {
    for (let right = numStr.length; right > left; right--) {
      result.push(Number(numStr.slice(left, right)))
    }
  }
  
  return result;
}


console.log((digitSubsequences(9189)));

function digitSubsequences2(num) {
  let numStr = String(num);
  let result = [];

  for (let left = 0; left < numStr.length; left++) {
    for (let right = left + 1; right <= numStr.length; right++) {
      result.push(Number(numStr.slice(left, right)))
    }
  }

  return result;

}


console.log((digitSubsequences2(9189)));

//////////////////////////////////////////////////////////
/*
Make the substrings by using the right index as the outerloop,
and left index as the inner loop
*/
//////////////////////////////////////////////////////////

function rightLoopSubstring(string) {
  let result = [];

  for (let right = string.length; right > 0 ; right--) {
    for (let left = 0; left < right; left++) {
      result.push(string.slice(left, right))
    }
  }

  return result;
}

console.log(rightLoopSubstring('halo'))


/*
Can the string be constructed by taken a substring of it and appending multiple copies of the substring together?

Rules
=====
- Test whether a string can be constructed using a substring and appending multiple copies
- Another way to think of this is that a string is composed of only a substring repeated multiple times
- Each substring must be complete


(use the string walking approach again)
*/ 

function repeatedSubstringPatternBob (string) {
  for (let size = 1; string.length / size >= 2; size++) {
    if (string.length % size !== 0) continue;
    let substring = string.slice(0, size);

    for (let [left, right] = [0, size]; right <= string.length; ) {
      let section = string.slice(left, right);

      if (section !== substring) break;

      if ((section === substring) && (right === string.length)) return true;

      left += size;
      right += size;
    }

  }

  return false;

}

console.log(repeatedSubstringPatternBob('abababab'));