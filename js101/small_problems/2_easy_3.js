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

=============
Pseudocode
=============
Requirements:
Given a number that means the number of digits
Calculate a fibonacci number
track index per iteration
- i don't think i will need to track the iteration for each.
- we will just stop iter if the num digits === in the input
- and grab the current length of the array
detect the length of a fibonacci number
the first fibonacci is 1


The sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Non-recursive model bc i'm good
start with fibarr = [0, 1]
0 + 1 and push it to fibarr
continue the process. . .

Given a number of digits

LET fibArr = [0, 1]

WHILE (fibArr.length < DIGITS)
- fibArr.push(fibArr[length - 1] + fibArr [length - 2])

return fibArr length

*/
///////////////////////////////////////////////////////////////////////////////

// let findFibonacciIndexByLength = digits => {
//   let fibArr = [0n, 1n];
//   while (fibArr[fibArr.length - 1].toString().length < digits) {
//     fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
//   }
//   return BigInt(fibArr.length - 1);
// };

// console.log(findFibonacciIndexByLength(2n) === 7n);   // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);
// console.log(findFibonacciIndexByLength(10n) === 45n);
//findFibonacciIndexByLength(16n) === 74n;
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);


// worked but i'm getting performance issues.
// ls example does not have that, and they also use to string and length
// i wonder what else is different
// ah... they actually are not creating a massive array, and so they can
// use big n math entirely.... no that is not it. they are working with
// big n through the program.
// ahh.. we can actually also use big n for the program by setting the
// intitial array values to bign values. nice. no issues now.

///////////////////////////////////////////////////////////////////////////////
/*
Right Triangles
Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right.

============
Requirements
============
Take in a positive integer
Integer is the number of lines printed, as well as the width of the last line
The top line of the triangle is 1 *
print all lines


============
Pseudocode
============
Given a postive integer

RENDER LINE FUNCTION
  Take in argument of counter
  LET number of spaces = size - counter
  LET number of asterisks = counter


SET size to positive integer. Use to determine number of lines to print.

WHILE counter <= size
  Print line with (N-1) spaces and 1 asterisk (can extract to RENDER LINE)
  Print line with (N-2) spaces and 2 asterisks
  Print line with (N-3) spaces and 3 asterisks
  . . .
  counter += 1

*/

///////////////////////////////////////////////////////////////////////////////

// const triangle = function(size) {
//   const renderLine = function(counter, size) {
//     const spaces = size - counter;
//     const points = counter;
//     console.log(" ".repeat(spaces) + "*".repeat(points));
//   };

//   let counter = 1;
//   while (counter < size) {
//     renderLine(counter, size);
//     counter += 1;
//   }
// };

// triangle(9);

// Well crafted pseduocode and good debugging.
// On first execution, an error was raised RangeError within the
// .repeat method.
// inserted break within the while loop before the increment statement
// and found out that we were decrementing instead of incrementing
// because we copied our pseudo code directly. Pseudocode was very good, but
// the decremeent part was when we were using a countdown type loop

///////////////////////////////////////////////////////////////////////////////
/*
SKIPPED

Madlibs
Madlibs is a simple game where you create a story template with "blanks" for
words. You, or another player, then construct a list of words and place them
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.
*/
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
/*
Double Doubles
A double number is an even-length number whose left-side digits are exactly
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are
all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied
by two, unless the argument is a double number; otherwise, return the double
number as-is.

==========
Requirements
==========
given an integer

Get the length of a number string
split number in half
If the first half and second half are identical, it's a double number, return
  as is.
if they are different, multiply the number by two and return

*/
///////////////////////////////////////////////////////////////////////////////

// const twice = function(num) {
//   const numStr = String(num);
//   function isDoubleDouble(str) {
//     const midPoint = str.length / 2;
//     return (str.substring(0, midPoint) === str.substring(midPoint));
//   }

//   if (isDoubleDouble(numStr)) {
//     return num;
//   }

//   return (num * 2);
// };

// console.log(twice(37)    );      // 74
// console.log(twice(44)    );      // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444)   );      // 888
// console.log(twice(107)   );      // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333)  );      // 3333
// console.log(twice(7676)  );      // 7676

// good


///////////////////////////////////////////////////////////////////////////////
/*
Grade Book
Write a function that determines the mean (average) of the three scores passed
to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative
values or values greater than 100.

=============
Requirements
=============
Given three scores (all values are between 0 and 100. All postive)
Sum and average. (Is there a Math method for this? --doesn't seem like it)
Switch statement that returns a string (can't use switch-- only works with
equality)

*/
///////////////////////////////////////////////////////////////////////////////

// const getGrade = function(score1, score2, score3) {
//   const avgScore = (score1 + score2 + score3) / 3;

//   if (avgScore >= 90) {
//     return 'A';
//   } else if (avgScore >= 80) {
//     return 'B';
//   } else if (avgScore >= 70) {
//     return 'C';
//   } else if (avgScore >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// };

// console.log(getGrade(95, 90, 93));
// console.log(getGrade(50, 50, 95));

// LS student has a hacky way of getting switch statements to work with other
// comparison operators by setting the case to true

// function getGrade(...scores) {
//   let mean = scores.reduce((acc, elm) => acc + elm) / scores.length;
//   switch (true) {
//       case mean < 60: return 'F';
//       case mean < 70: return 'D';
//       case mean < 80: return 'C';
//       case mean < 90: return 'B';
//       default: return 'A';
//   }
// }

///////////////////////////////////////////////////////////////////////////////
/*

Clean up the words
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result (i.e.,
  the result string should never have consecutive spaces).
*/

/**
 * Input: String
 * Output: String
 * 
 * Rules
 * =====
 * - String consists of words and an assortment of non-alphabetic chars
 * - Return string with all non-alphabetical chars replaced by spaces
 * - If one or more non-alpha chars in a row, only have one space
 *     a$$a => a a
 *
 * Implicit requirements
 * - Spaces are non alphabetic
 * - Consecutive spaces replaced with one space
 * - the non alphabetic chars in a row do not need to be the same chars
 *
 * Given a string
 * Declare a result, intitializing to empty string
 * Iterate over characters
 *    - If the character is alphabetical, add it to the result
 *    - Else:
 *     - If the last character was a space, continue to the next char
 *     - Otherwise, Add a space
 * Return result
 */

// function cleanUp(string) {
//   let result = "";

//   for (let idx = 0; idx < string.length; idx++) {
//     let currentChar = string[idx];
    
//     if (/[a-z]/i.test(currentChar)) {
//       result += currentChar;
//     } else {
//       if (result[result.length - 1] === " ") continue;
//       result += " "}
//   }

//   return result;
// }

function cleanUp(string) {
  return string.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
/*
What Century is That?
Write a function that takes a year as input and returns the century. The
return value should be a string that begins with the century number, and ends
with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.

============
Requirements
============
Given year (positive integer)
return a string, beginning with century number and ends with correct suffix
  Suffix rule is that 1, 2, 3 end with st, nd, and rd. All other numbers "th".
  EXCEPT 11, 12, and 13, which end in "th"

century limits are 01 - 00

getSuffix function (takes century name). return a string with the correct suffix
get the last two numbers with slice(-2)
if the number is 11, 12, 13
  + "th"
else switch last number slice(-1)
  case 1
    st
  case 2
    nd
  case 3
    rd
  default (all other numbers)
    th

getCentury function. determine century name. return as str.

5: 1st
53: 1st
101: 2nd
201: 3rd
703: 8th
901: 10th
1001: 11th

(this actually won't work that well bc of years like 2010)
  century_num = Math.floor(year / 100)
  if last two digits are 00, century_num = century_num
else century_num is century_num + 1

2010: 21st
2000: 20th
510: 6th
500: 5th

*/
///////////////////////////////////////////////////////////////////////////////

// const calcCentury = function(year) {
//   let centuryName = Math.floor(year / 100); // Math.ceil could have been used
//   // to leave out the code below
//   if (String(year).slice(-2) === "00") {
//     return String(centuryName);
//   }
//   return String(centuryName + 1);
// };

// const getSuffix = function(century) {
//   let twoDigits = century.slice(-2);
//   let lastDigit = century.slice(-1);
//   if (["11", "12", "13"].includes(twoDigits)) {
//     return "th";
//   }
//   switch (lastDigit) {
//     case "1": return "st";
//     case "2": return "nd";
//     case "3": return "rd";
//     default: return "th";
//   }
// };

// const century = function(year) {
//   let centuryName = calcCentury(year);
//   let suffix = getSuffix(centuryName);
//   return centuryName + suffix;
// };


// console.log(century(2001));        // "21st"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"
// console.log(century(10103));       // "102nd"
// console.log(century(2000));        // "20th"
// console.log(century(1965));        // "20th"

