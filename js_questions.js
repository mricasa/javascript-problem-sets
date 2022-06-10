let array = [1, 2, 3, 4, 5];

let result = array.filter(function(num) {
  if (num % 2 === 1) console.log(num);
});

console.log(result);