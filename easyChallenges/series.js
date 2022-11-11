/* 
Input: String of numbers
Output: Array of arrays that are series

slices
- if not a valid size raise an error
- declare start idx, initialize to 0
- declare end idx, initialize to start + size + 1
- declare result, init to array
- Loop
  - Continue to loop while end idx is less than or equal to the length of numbers
  - slice numbers from start idx, end idx, and then split them
  - push the slice to the array
  - increment start idx and end idx
- return result

*/

class Series {
  constructor(numbers) {
    this.numbers = numbers;
  }

  slices(size) {
    this.validSize(size);

    let result = [];
    let startIdx = 0;

    for (; startIdx + size <= this.numbers.length; startIdx++) {
      result.push((this.numbers.slice(startIdx, startIdx + size))
        .split("")
        .map(Number));
    }

    return result;
  }

  validSize(size) {
    if (size > this.numbers.length) throw Error("Invalid size series");
  }
}

module.exports = Series;