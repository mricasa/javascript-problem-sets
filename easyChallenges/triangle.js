/* 
Requirements: 
- determine whether a triangle is equilateral, isosceles or scalene

equilateral: all 3 sides are equal
isosceles: exactly two sides of the same length
scalene: all sides of different lengths

- all sides must have a lengh greater than 0
= the sum of the lengths of any two sides must be greater than the length of the third side

*/

class Triangle {
  constructor(sideA, sideB, sideC) {
    if (this._isValidTriangle(sideA, sideB, sideC)) {
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isIsoceles()) return 'isosceles';
    if (this.isScalene()) return 'scalene';
  }

  _isValidTriangle(...sides) {
    let sorted = sides.sort((a, b) => a - b);

    if (sorted.some(side => side <= 0)) {
      throw Error("Invalid side");
    } else if ((sorted[0] + sorted[1]) <= sorted[2]) {
      throw Error("Violates triangle inequality")
    };

    return true;
  }

  isEquilateral() {
    return this.toSortedArray().every((side, _, arr) => {
      return side === arr[0];
    })
  }

  isIsoceles() {
    let arr = this.toSortedArray();
    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] === arr[idx - 1]) {
        return arr[idx] !== arr[idx + 1];
      }
    }

    return false;
  }

  isScalene() {
    return this.sideA !== this.sideB && this.sideB !== this.sideC;
  }

  toSortedArray() {
    return Object.values(this).sort((a, b) => a - b);
  }
}
module.exports = Triangle;