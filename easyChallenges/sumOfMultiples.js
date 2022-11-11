/*
Requirements
- constructor sets a set of numbers
- to method takes a number
- to will test all natural numbers from 1 up to but not including its argument
  - to see if the number is a multiple of 3 or 5.
- the multiples are summed together and returned

*/

class SumOfMultiples {
  constructor(...numbers) {
    this.numbers = numbers.length ? numbers : [3, 5];
  }

  to(number) {
    let sum = 0;

    for (let currentNum = 2; currentNum < number; currentNum++) {
      if (this.anyMultiple(currentNum)) {
        sum += currentNum;
      }
    }

    return sum;
  }

  anyMultiple(currentNum) {
    return this.numbers.some(setNum => currentNum % setNum === 0);
  }

  static to(number) {
    return new SumOfMultiples().to(number);
  }
}

module.exports = SumOfMultiples;