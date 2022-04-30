// Easy 3

///////////////////////////////////////////////////////////////////////////////
/*
ddaaiillyy ddoouubbllee
Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.

Further exploration:
It's also possible to solve this using regular expressions. For a nice
challenge, give this a try with regular expressions. Can you think of any
other solutions that don't use regular expressions?


--

Given a string

if characters are on a run
- substitute that run with only one character
- return a new string with all consecutive duplicates as only one character

Given a string

LET charArr = string.split('')
LET returnArr = []
FOR iter; < charArr.length; iter++
- LET currentChar = charArr[i]
- LET previousChar = charArr[i - 1]
- IF (currentChar !== previousChar), it's a new char
-- PUSH currentChar to returnArr;
- ELSE continue (?) not sure if necessary, or if we can fall through
---- (yes, falling through worked fine.)
- return returnArr.join('')

Good job
*/
///////////////////////////////////////////////////////////////////////////////

// function crunch(words) {
//   let result = [];
//   let charArr = words.split('');
//   for (let iter = 0; iter < charArr.length; iter++) {
//     let currentChar = charArr[iter];
//     let previousChar = charArr[iter - 1];
//     if (currentChar !== previousChar) {
//       result.push(currentChar);
//     }
//   }
//   return result.join('');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

///////////////////////////////////////////////////////////////////////////////
/*
Bannerizer
Write a function that will take a short line of text, and write it to the
console log within a box.

Requirements:
- 2 horizontal border lines consisting of + and -
- Within, 1 blank line, text line, and 1 blank next line
- Blank lines should be the same char length of the text line plus padding and |
- Text line should have padding on each side
- prints to the console

Given a line of text

helper functions to create a border lines and blank lines
get the length of the line of text, add the padded values and save

print results
the helper top border with line length
the helper blank line with line length
the line of text padded with | and blank space
the helper blank line with line length
the helper top border with line length

Further Exploration
Modify this function so that it truncates the message if it doesn't fit inside
a maximum width provided as a second argument (the width is the width of the box
  itself). You may assume no maximum if the second argument is omitted.

For a challenging but fun exercise, try word wrapping messages that are too
long to fit, so that they appear on multiple lines but are still contained
within the box. This isn't an easy problem, but it's doable with basic
JavaScript.
*/
///////////////////////////////////////////////////////////////////////////////

// function logInBox(text) {
//   const LINESIZE = text.length;
//   const borderLine = size => '+'.padEnd(size + 5, "-") + '+';
//   const blankLine = size => '|'.padEnd(size + 5, ' ') + '|';
//   const textLine = (text, size) => text.padStart(size + 3, '|  ')
//     .padEnd(size + 6, '  |');

//   console.log(borderLine(LINESIZE));
//   console.log(blankLine(LINESIZE));
//   console.log(textLine(text, LINESIZE));
//   console.log(blankLine(LINESIZE));
//   console.log(borderLine(LINESIZE));
// }

// logInBox('To boldly go where no one has gone before.');

// Maximum width exploration
/*
Requirements:
truncate the message if it will not fit in the box.
assume no max if omited.
*/

// function logInBoxMax(text, maxLen = Infinity) {
//   const LINESIZE = text.length <= maxLen ? text.length : maxLen;
//   const borderLine = size => '+'.padEnd(size + 5, "-") + '+';
//   const blankLine = size => '|'.padEnd(size + 5, ' ') + '|';
//   const textLine = (text, size) => '|  ' + text.slice(0, size) + '  |';

//   console.log(borderLine(LINESIZE));
//   console.log(blankLine(LINESIZE));
//   console.log(textLine(text, LINESIZE));
//   console.log(blankLine(LINESIZE));
//   console.log(borderLine(LINESIZE));
// }

// logInBoxMax('To boldly go where no one has gone before.');
// logInBoxMax('To boldly go where no one has gone before.', 2);
// logInBoxMax('To boldly go where no one has gone before.', 8);


// good job

///////////////////////////////////////////////////////////////////////////////
/*
Stringy Strings
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length
of the string should match the given integer.
*/
///////////////////////////////////////////////////////////////////////////////

// function stringy(int) {
//   let charFlag = true;
//   let returnStr = "";
//   while (int > 0) {
//     returnStr += (charFlag) ? '1' : '0';
//     charFlag = !charFlag;
//     int -= 1;
//   }
//   return returnStr;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

///////////////////////////////////////////////////////////////////////////////
/*
Fibonacci Number Location By Length
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
such that the first two numbers are 1 by definition, and each subsequent number
is the sum of the two previous numbers. Fibonacci numbers often appear in
mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow
at an incredibly rapid rate. For example, the 100th Fibonacci number is
354,224,848,179,261,915,075—that's enormous, especially considering that it
takessix iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument. (The first
  Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to
2.

To use BigInt integers in your solution, simply append the letter n to any
numbers you use in your solution: 1n, 1234567890123456789012345678901234567890n,
and so on. JavaScript will take care of the rest.


*/
///////////////////////////////////////////////////////////////////////////////

