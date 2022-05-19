/* eslint-disable max-len */
///////////////////////////////////////////////////////////////////////////////
function breakline() {
  console.log('\n|======================================================|\n');
}
breakline();

///////////////////////////////////////////////////////////////////////////////
// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.


/**
 * Input: String
 * Output: Object
 *
 * Explicit requirements
 *    Output object has 3 properties
 *     Percentage of characters in the string that are lowercase letters
 *     Percentage of characters in the string that are uppercase letters
 *     the percentage of characters that are neither
 *    Key labels: lowercase, uppercase, neither
 *    String will always contain at least one character
 *
 * Implicit requirements
 *    Values are strings
 *    Percentages must have decimal digits out to the hundredths place
 *    Blank space is a character
 *
 * DC + A
 *
 * Imperative
 *
 * Given a string
 * Declare a nested array to store labels and counts, initialize it with
 *  labels, but no values
 * Declare a string array and initialize it to the string
 * Declare a counter variable and initialize it to 0
 * While the counter is less than the length of the array
    * IF... (need regex)
      * the character is lowercase, add to lowercase count
    * Declare current character, assign to the character at the index
      * the character is uppercase, and to upper case count
      * Otherwise, and to neither count
    * Increment counter by 1, and repeat the loop
 * Declare a variable called total, and sum all values in the nested array
 *    (should be the length of the string)
 * Transform the values in the nested array to percentage (count / total)
 *    Also convert to a string, with trailing zeros to the hundredths
 * Convert the array into an object and return it.
 *
 *
 */
///////////////////////////////////////////////////////////////////////////////

// function letterPercentages(string) {
//   let counts = [['lowercase', 0],['uppercase', 0],['neither', 0]];
//   let total = string.length;
//   let LETTER_PATTERN = /[a-z]/i;
//   string.split("").forEach(character => {
//     if (!LETTER_PATTERN.test(character)) {
//       counts[2][1] += 1;
//     } else if (character === character.toLowerCase()) {
//       counts[0][1] += 1;
//     } else {
//       counts[1][1] += 1;
//     }
//   });
//   counts.forEach(subArr => {
//     let percentageStr = ((subArr[1] / total) * 100).toFixed(2);
//     subArr[1] = percentageStr;
//   });
//   return Object.fromEntries(counts);
// }

// LS solutions dynamically update the values within the object
// literal.
// Key takeaway: if you know the discrete keys of a solution, you can
// probably forgo the looping solution, and simply nest our logic
// within the values location of the object literal.


// function letterPercentages(string) {
//   return {
//     lowercase: (((string.match(/[a-z]/g) || []).length / string.length) * 100).toFixed(
//       2),
//     uppercase: (((string.match(/[A-Z]/g) || []).length / string.length) * 100).toFixed(
//       2),
//     neither: (((string.match(/[^a-z]/gi) || []).length / string.length) * 100).toFixed(
//       2)
//   };
// }

// LS solution 2 extracts out the percentage calculation to make the code
// a bit more readable

// function letterPercentages(string) {
//   let total = string.length;
//   function percentageOfMatch(regex) {
//     let matchingChars = string.match(regex) || [];
//     return ((matchingChars.length / total) * 100).toFixed(2);
//   }
//   return {
//     lowercase: percentageOfMatch(/[a-z]/g),
//     uppercase: percentageOfMatch(/[A-Z]/g),
//     neither: percentageOfMatch(/[^a-z]/g)
//   };
// }


// console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

///////////////////////////////////////////////////////////////////////////////
// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not satisfied,
// the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

/**
 * Input: 3 Number arguments
 * Output: String
 *
 * Rules
 * =====
 * Types
 *    Equilateral: All three sides equal
 *    Isoceles: Two sides are of equal length, while the third is different
 *    Scalene: All three sides are of different lengths
 *
 * Valid Triangles
 *    Sum of two shortest sides must be great than the length of the longest
 *    Every side have a length greater than 0
 *
 * Explicit requirements:
    * Return string describing the type of triangle or invalid
      * equilateral
      * isoceles
      * scalene
      * invalid
 * Implicit requirements:
 *    Arguments passed will always be numbers
 *    No argument will ever be left out
 *
 * DC + A
 *
 * Given three numbers
   * Check if a valid triangle, if falsy, return 'invalid'
   * declare 3 comparison variables, comparing all 3 combinations
   *    perform equality comparisons
   *    store result as true or false
   * sum the resultfunction isInvalidTriangle(sideA, sideB, sideC) {n equilateral
   * If two sides are equal (sum = 1), but 1 is different, return isosceles
   * If all sides are different (sum = 0), return scalene
 *
 * isValidTriangle
 *    if any side is 0
 *       return null
 *    Extract Max length
 *    If the sum of the two remaining lenghts are less than Max
 *       return null
 *
 * Comparing three valuestriangle
 * Equilateral
 * a = 5
 * b = 5
 * c = 5
 * a === b => true
 * b === c => true
 * c === a => true
 *         => a, b, c are all equal
 * true + true + true = 3
 *
 * Isoceles
 * a = 6
 * b = 13
 * c = 6
 *
 * a === b => false
 * b === c => false
 * a === c => true
 * true + false + false = 1
 *
 * Scalene
 * a = 7
 * b = 8
 * c = 17
 *
 * a === b => false
 * b === c => false
 * c === a => false
 * false + false + false = 0
 *
 * isValid maximum
 * 5, 4, 3
 * 4 + 3 > 5 -> valid
 */
/////////////////////////////////////////

// function triangle(sideA, sideB, sideC) {
//   if (isInvalidTriangle(sideA, sideB, sideC)) {
//     return 'invalid';
//   }
//   let comparisons = [(sideA === sideB), (sideB === sideC),
//     (sideC === sideA)];
//   let countTrues = comparisons.reduce((sum, num) => sum + num);

//   switch (countTrues) {
//     case 3: return 'equilateral';
//     case 1: return 'isoceles';
//     default: return 'scalene';
//   }
// }


// function isInvalidTriangle(sideA, sideB, sideC) {
//   let sideArr = [sideA, sideB, sideC];
//   if (sideArr.some(side => side === 0)) return true;

//   let indexMax = sideArr.indexOf(Math.max(...sideArr));
//   let hypotenuse = sideArr.splice(indexMax, indexMax + 1).shift();
//   if ((sideArr.reduce((sum, num) => sum +  num)) < hypotenuse) return true;
//   return false;
// }

// for invalid triangle, we can also use sort to get short, middle,
// and long. Damn that's wayyyyyy nicer than using index lookups and slice,
// and isn't as easy to make a mistake.
// above, my mistake was passing an array to Math.max (but of course)

// function isInvalidTriangle(...args) {
//   let [short, middle, long] = args.sort((a, b) => a - b);
//   if (short === 0) return true;
//   if ((short + middle) < long) return true;
//   return false;
// }


// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"function triangle(sideA, sideB, sideC) {
//   if (isInvalidTriangle(sideA, sideB, sideC)) {
//     return 'invalid';
//   }
//   let comparisons = [(sideA === sideB), (sideB === sideC),
//     (sideC === sideA)];
//   let countTrues = comparisons.reduce((sum, num) => sum + num);

//   switch (countTrues) {
//     case 3: return 'equilateral';
//     case 1: return 'isoceles';
//     default: return 'scalene';
//   }
// }

// console.log(triangle(3, 1, 1));        // "invalid"

// breakline();

///////////////////////////////////////////////////////////////////////////////
// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is
// not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments
// and returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have
// to worry about floating point errors. You may also assume that the
// arguments are in degrees.

/**
 * Triangle types:
 *    Right: One angle is a right angle (90 degrees)
 *    Acute: All three angles are less than 90 degrees
 *    One angle is greater than 90 degrees
 *
 * Valid triangle requirements:
 *    Sum of the angles must be exactly 180 degrees AND
 *    Every angle must be greater than 0
 *
 * Input: Three number arguments
 * Output: Strings
 *
 * DC + A
 * Given 3 numbers
 * If the triangle is not a valid triangle
 *    return "invalid"
 * If one angle is a right angle
 *    return "right"
 * If all three angles are less than 90 degrees
 *    return "acute"
 * If one angle is greater than 90 degrees
 *    return "obtuse"
 *
 *
 */
///////////////////////////////////////////////////////////////////////////////

// function isValidTriangle(angles) {
//   if (((angles.reduce((sum, num) => sum + num)) === 180) &&
//   !angles.some(side => side === 0)) return true;
//   return false;
// }

// function triangle(...angles) {
//   if (!isValidTriangle(angles)) return 'invalid';

//   if (angles.every(angle => angle < 90)) return 'acute';
//   else if (angles.some(angle => angle === 90)) return 'right';
//   else return 'obtuse';
// }


// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


///////////////////////////////////////////////////////////////////////////////
// Unlucky Days
// Some people believe that Fridays that fall on the 13th day of the month are
// unlucky days. Write a function that takes a year as an argument and returns
// the number of Friday the 13ths in that year. You may assume that the year
// is greater than 1752, which is when the United Kingdom adopted the modern
// Gregorian Calendar. You may also assume that the same calendar will remain
// in use for the foreseeable future.

/**
 * Input: Number
 * Output: Number
 *
 * Rules:
 * Return count of the number of Friday the 13ths
 * May assume that the year is greater than 1752
 * Calendar will not change in the future
 *
 * DC + A
 * Declare count and initialize to 0
 * Declare a variable and initialize to a Date object. Argument is:
 *    Janurary 13, YEAR
 * For month until we iterate over all 12 months:
 *    Is the day of the week for that date a Friday?
 *      If true, increment count
 * Return count
 *
 */
///////////////////////////////////////////////////////////////////////////////

// function fridayThe13ths(year) {
//   function isFriday(date) {
//     return date.getDay() === 5;
//   }
//   let currentDate = new Date(`January 13 ${year}`);
//   let count = 0;
//   for (let month = 1; month < 12; month++) {
//     if (isFriday(currentDate)) {
//       count += 1;
//     }
//     currentDate.setMonth(month);
//   }
//   return count;
// }

// LS solution built an array of dates then used reduce to create count
// Tried to make a hybrid of my solution, plus LS--that is, I still used
// one object, currentDate, and pushed it to the list.
// I eventually realized that calling setMonth() mutated the Date object
// I mean, I knew this, because obviously I was not reassigning the current
// date in my above solution-- but it took me some time to realize what
// was happening. Remember that dates are objects and share the same
// properties of all other objects when it comes to references.

// function fridayThe13ths(year) {
//   let currentDate = new Date(`January 13 ${year}`);
//   let thirteenths = [];
//   let myList = [];
//   // for (let month = 1; month < 12; month++) {
//   //   thirteenths.push(new Date(year, month, 13));
//   // }
//   for (let month = 1; month < 12; month++) {
//     console.log('currentDate at the top of the loop: ', currentDate)
//     myList.push(currentDate);
//     console.log('Contents of myList: ', myList);
//     console.log(currentDate.setMonth(month));
//   } // we are mutating the same object (date)
//   console.log('using constructor: ', thirteenths)
//   console.log('using month change: ', myList)
//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? (count + 1) : count;
//   }, 0);
// }


// wrote this example for Anki
// We are pushing the same date object to dates. By the end
// all date elements point to the same object.

// function list13ths(year) {
//   let currentDate = new Date(`January 13 ${year}`);
//   let dates = [];
//   for (let month = 1; month < 13; month++) {
//     dates.push(currentDate);
//     currentDate.setMonth(month);
//   }
//   return dates;
// }

// Love this student's solution using filter....

// function fridayThe13ths(year) {
//   return [...Array(12).keys()].filter(month => {
//     let date = new Date(year, month, 13);
//     return date.getDay() === 5;
//   }).length;
// }

// interestingly, the solution uses an array with size 12, and
// empty slots as the caller. He used index rather than the
// element itself .

// function fridayThe13ths(year) {
//   return [...Array(12)].filter(month => {
//     console.log(month);
//     let date = new Date(year, month, 13);
//     return date.getDay() === 5;
//   }).length;
// }

function fridayThe13ths(year) {
  return [...Array(12)].filter((_, idx) => {
    let date = new Date(year, idx, 13);
    return date.getDay() === 5;
  });
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2022));      // 1

breakline();

let sparseArray = [1, 2, 3];
sparseArray.length = 5;
sparseArray[5] = 4;
Object.keys(sparseArray);

let iterator = sparseArray.keys();
for (let key of iterator) {
  console.log(key);
}

console.log(iterator.methods);

// const wordLengths = (...args) => {
//   if ((args.length === 0) || (args[0].length === 0)) return [];
// };

// function fridayThe13ths(year) {
//   return Array(12).filter((_, idx) => {
//     console.log(idx);
//     let date = new Date(year, idx, 13);
//     return date.getDay() === 5;
//   });
// }
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2022));      // 1

//
///////////////////////////////////////////////////////////////////////////////
// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number
// that is a multiple of 7, with all of its digits occurring exactly once
// each. For example, 49 is a featured number, but 98 is not (it is not odd),
// 97 is not (it is not a multiple of 7), and 133 is not (the digit 3
//   appears twice).

// Write a function that takes an integer as an argument and returns the
// next featured number greater than the integer. Issue an error message
// if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.
///////////////////////////////////////////////////////////////////////////////

/**
 * Input: Number
 * Output: Number
 *
 * Rules
 * Explicit requirements:
 *    A Featured Number is defined as:
 *       - A multiple of 7, and
 *       - All digits occurring exactly once each
 *    Take an integer argument and return the next featured number
 *      greater than the integer
 *    The largest possible featured number is 9876543201
 *
 * Implicit requirements:
 *    return a a message when there is no possible number that fits
 *    argument is always a number
 *
 * DC + A
 * Featured number examples
 * 21 % 7 is 0
 * 2, 1 are unique digits
 * 
 * 1023547 % 7 is 0
 * 1, 0, 2, 3, 5, 4, 7 are unique digits
 *
 * List of firstmost featured numbers
 * below 100, it's just multiples of 7 EXCEPT 77.
 * 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 84, 91, 98, 105, 126 . . .
 * =======================
 *
 * 
 * Generate featured number
 *    Declare MAX_FEATURED_NUM = 9876543201
 *    given a minimum
 *    declare featuredNum, init to 0
 *    While less than the minimum 
 *       while featuredNum digits are not unique
 *           featuredNum += featuredNum + 7
 *       if greater than MAX_FEATURED_NUM
 *            assign featuredNum to an error message
 *            break
 *    return featuredNum
 *
 * uniqueDigits
 *      Given a number
 *      convert number into string
 *      Test whether any of the number characters 0-9 have more than 1 instance
 *       in the string....
 *           declare a regex expression for the number character
 *           declare totalChars to   
 *               the number of chars matching the number char or []
 *           if totalChars > 1
 *               return false
 *      Return the result of the test
 *
 * passing a featured num as an argument looks like an edge case
 */

function featured(minimum) {
  const MAX_FEATURED_NUM = 9876543201;
  let featuredNum = 0;
  while (featuredNum <= minimum || !isOdd(featuredNum) || !uniqueDigits(featuredNum)) {
    featuredNum += 7;
    if (featuredNum > MAX_FEATURED_NUM) {
      featuredNum = "There is no possible number that fulfills those requirements.";
      break;
    }
  }
  return featuredNum;
}

function uniqueDigits(number) {
  for (let digit = 0; digit < 10; digit++) {
    let totalChars = String(number).match(new RegExp(digit, 'g')) || [];
    if (totalChars.length > 1) return false;
  }
  return true;
}

function isOdd(number) {
  return (number % 2 === 1);
}



//console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


// the trick to making this faster was to realize that every other multiple of
// 7 is an even number, so we could have sped this up.
// unfortunately we did not list "odd" as a requirement (lapse in attention, short of
// sleep today )

// Key takeaway: SPEND TIME on the understanding the problem step.
// we hastily implemented an isOdd test during the coding phase
// and by that point, we had already designed the algorithm to increment by 7, perhaps
// constraining us from realizing this pattern.
// another thing we missed is that if the number must be greater than the
// passed integer, was that, rather than counting up by 0, we could count
// up by 1 from the passed number until we reach a multiple of 7.
// from there, we can start counting by 14.
// ALSO, we worked backwards in the DC + A step, but not forwards from the argument.
// Good to approach it from all angles, but definitely approaching from the
// start is a MUST.

breakline();

