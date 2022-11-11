// OH THE HUMANITY 
// A TOTAL NIGHTMARE
// TRY IT AGAIN SOME OTHER TIME

/* 
Modern roman numerals are written by expressing each digit separately starting with the
left most digit and skipping any digit with a value of zero.

notes
- 1    4 5       9 are represented
-   2 3   6 7 8    are represented by duplicating the unit

There are 4 decimal positions.

Thousands 1000
Hundreds 100
Tens      10
Ones

                  5 point
Ones. I II III IV V VI VII VIII IX (Notice that 9 uses the tens symbol, X)
Tens. X XX XXX XL L LX LXX LXXX XC
Hund. C CC CCC CD D DC DCC DCCC CM
Thou. M MM MMM                     (can only count to 3000)

Alg
- split number into an array of 4 digits
  - Transform such that the first number is * 1000 
  - second * 100
  - third * 10
  - first by 1 

- Declare the romanNumeral result, intialize to array

- Start iteration over array with the first digit (thousands)
  - If it is undefined, move to the next digit
  - declare digitStr, string
  - If the number is inside the ROMAN_NUMERALS as a value, make str to that key (iter through keys)
  - *** or just multiple the decimal number by n number of keys that match it. ****

  - Actually, the keys are stored as the exact number, so we should multiply.
  - Modulo it by 1000, and divide by 1000
  - if modulo has no remainder, .... the divide result is quotient
  - quotient is the number of times to repeat....
  - Push digit str to romanNumeral result


- Start iteration over second digit
  - if it is ""
  - declare digitStr

Looking for Numerals
--------------------
- First, we iterate over the keys to find the key that matches the value.
- On each iteration we also check to see if current number is LESS than the input number.
- If currentNumber(val) is less than the input number, then it is the base numeral
  - add base numeral to the result string
- Get the difference between the inputNumber and currentNumber
- Difference over the decimal place (e.g. 20 /10) to get quotient
- That's the number of times to add the symbol that represents that decimal place's single unit
- Add that to the result string.

400 -> 400 found in keys, add the key string. Done.
600 -> No 600 in keys.  Falls through to 500 (D)
    -> Add D to string.
    -> Difference between 500 and 600 is 100
    -> Add C to string
    = DC
    ;

70 -> No 70 in keys. Fall through to 50 
   -> add D to string
   -> Difference between 70 and 50 is 20
   - 20 / 10 is 2. That's 2 more tens
   - add X X to string
   = LXX 

30 -> No 30 in keys. Fall through to 10 (X)
   -> Add X to string
   -> difference between 30 and 10 is 20.
   -> 20 / 2  = 2. That's 2 more tens. ok.....
   -> add X X to string
   = XXX



*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  constructor(number) {
    this.number = number;
  }

  toArr(number) {
    let paddedNum = String(number).padStart(4, "0")
    return [...paddedNum].map((num, idx) => {
      return num * ((10 ** (3 - idx)));
    })
  }

  toRoman() {
    let numArr = this.toArr(this.number);
    return (numArr.map(this.transformDigit.bind(this)).join(""));
  }

  transformDigit(number) {
    let romanDigit = "";
    let remainder;
    for (let key of Object.keys(RomanNumeral.ROMAN_NUMERALS)) {
      let currentNumber = RomanNumeral.ROMAN_NUMERALS[key];
      if (number === currentNumber) {
        romanDigit += key;
        break;

      } else if (currentNumber < number) {
        romanDigit += key;
        remainder = number - currentNumber;
    
        break;
      }
    }
    if (remainder === undefined) return romanDigit;


    if (this.isOnes(remainder)) {
      remainder = Number(String(remainder).match(/[^0]/g).join(''));
      romanDigit = romanDigit.padEnd(remainder + 1, "I");
    }
    if (this.isTens(remainder)) {
      remainder = Number(String(remainder).match(/[^0]/g).join(''));
      romanDigit = romanDigit.padEnd(remainder + 1, "X");
    }
    if (this.isHundreds(remainder)) {
      remainder = Number(String(remainder).match(/[^0]/g).join(''));
      romanDigit = romanDigit.padEnd(remainder + 1, "C");
    }
    if (this.isThousands(remainder)) {
      remainder = Number(String(remainder).match(/[^0]/g).join(''));
      romanDigit = romanDigit.padEnd(remainder + 1, "M");
    }
    return romanDigit
  }

  isOnes(num) {
    return num > 0 && num < 10;
  }

  isTens(num) {
    return num >= 10 && num < 100;
  }

  isHundreds(num) {
    return num >= 100 && num < 1000;
  }

  isThousands(num) {
    return num >= 1000;
  }
}

module.exports = RomanNumeral;


let test = function (number) {
  return (new RomanNumeral(number).toRoman())
}

