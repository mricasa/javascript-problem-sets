/*

Requirements
IN: Octal string
OUT: decimal number

- Convert an octal to a decimal

Implicit req:
- Invalid octals return decimal 0
- Digits that are 8 or 9 are invalid
- Input strings that include letters are invalid

*/
function Octal(number) {
  this.number = number;
}

Octal.prototype.toDecimal = function () {
  if (/[^0-7]/.test(this.number)) return 0;

  let sum = 0;
  let idx = this.number.length - 1;
  let exponent = 0;

  for (; idx >= 0; idx--, exponent++) {
    sum += this.number[idx] * (8 ** exponent);
  }
  return sum;
};

module.exports = Octal;