class CustomSet {
  constructor(arr) {
    this.set = this.constructSet(arr);
  }

  constructSet(arr) {
    let result = [];
    if (arr === undefined) return result;

    for (let ele of arr) {
      if (!result.includes(ele)) result.push(ele)
    }
    return result;
  }

  isEmpty() {
    return this.set.length === 0;
  }
  contains(ele) {
    return this.set.includes(ele);
  }

  isSubset(otherSet) {
    return this.set.every(ele => otherSet.contains(ele));
  }

  isDisjoint(otherSet) {
    return !this.set.some(ele => otherSet.contains(ele));
  }

  isSame(otherSet) {
    return this.set.sort().toString() === otherSet.set.sort().toString();
  }

  intersection(otherSet) {
    return new CustomSet(this.set.filter(ele => {
      if (otherSet.contains(ele)) {
        return ele;
      }
    }));
  }

  difference(otherSet) {
    return new CustomSet(this.set.filter(ele => {
      if (!otherSet.contains(ele)) {
        return ele;
      }
    }))
  }

  union(otherSet) {
   return new CustomSet([...this.set, ...otherSet.set]);
  }

  add(ele) {
    if (!this.set.includes(ele)) this.set.push(ele);
    return this;
  }

}

module.exports = CustomSet;

let test;

test = new CustomSet([1, 2, 2, 2, 2, 2, 3]);
test = new CustomSet();
test = new CustomSet([1, 2, 3]);


console.log(test.isSame(new CustomSet([3, 2, 1])));
console.log(test.isSame(new CustomSet([3, 2, 1, 1])));

console.log(test.intersection(new CustomSet([1])));

test.add(12);
console.log(`test: `, test)
test.add(3);
console.log(`test: `, test)

test = new CustomSet().add(3);
console.log(`test: `, test)