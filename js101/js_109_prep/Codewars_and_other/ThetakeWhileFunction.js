console.log('hello world¨')

// //  The takeWhile Function

// /* Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// sequence : [2,4,6,8,1,2,5,4,3,2]
// predicate: is an even number
// result   : [2,4,6,8]
// */

function takeWhile (arr, pred) {
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (!pred(arr[idx])) break;
    result.push(arr[idx])
  }
  return result;
}


function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}
  
  const isEvenTests = [
  [[2,6,4,10,1,5,4,3], [2,6,4,10]],
  [[2,100,1000,10000,5,3,4,6],[2,100,1000,10000]],
  [[998,996,12,-1000,200,0,1,1,1],[998,996,12,-1000,200,0]],
  [[1,4,2,3,5,4,5,6,7],[]],
  [[2,4,10,100,64,78,92],[2,4,10,100,64,78,92]]];
  
  const isOddTests = [
  [[1,5,111,1111,2,4,6,4,5],[1,5,111,1111]],
  [[-1,-5,127,86,902,2,1],[-1,-5,127]],
  [[2,1,2,4,3,5,4,6,7,8,9,0],[]],
  [[1,3,5,7,9,111],[1,3,5,7,9,111]]]

 // it("should be defined", function() {
console.log(takeWhile([], isEven), []);  
  //it("should work when testing for even numbers", function() {
    isEvenTests.forEach(function (val,ind,arr) {
      console.log(takeWhile(val[0], isEven), val[1]);
    });

  //it("should work when testing for odd numbers", function() {
    isOddTests.forEach(function (val,ind,arr) {
      console.log(takeWhile(val[0], isOdd), val[1]);
    });

