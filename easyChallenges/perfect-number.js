/* 
Requirements
- Natural numbers belong to categories of abundant, perfect, or deficient 
- based on comparison between the number and sum of its potential divisors
  - divisor: the nums that equally divide with no remainder
  - excludes the number itself

  Aliquot sum
  - 15 has divisors of 1, 3, 5
  - The sum is 6

  Perfect numbers have an Aliquot sum that is equal to the original number
  Abundant numbers have an Aliquot sum that is greater than the original number
  Deficient numbers have an Aliquot sum that is less than the original number

  6 > 1 , 2, 3 > 6, Perfect number
  28 > perfect number
  15 > deficient number
  24 > abundant number
  Primes > always deficient

DS A 
----
- constructor saves the number

classify
- If the number is negative, throw an error
- declare list of divisors
- Starting after the number 1 (which is a given), count upwards, up to half of the num
  - if the counting number is a divisor (it has no remainder) add to the list
  - increment count
- take the list of divisors, and sum them together to get the Aliquot

*/

let PerfectNumber = {
  classify(number) {
    if (number <= 0) throw Error();

    let divisors = [1];
    for (let num = 2; num <= number / 2; num++) {
      if (number % num === 0) divisors.push(num);
    }
  
    let aliquotSum = divisors.reduce((sum, num) => sum + num );
  
    if (aliquotSum === number) return 'perfect';
    else if (aliquotSum < number) return 'deficient';
    else return 'abundant';

  }
}


module.exports = PerfectNumber;