/* eslint-disable*/

let str = 'The grass is green'
console.log(str.slice(4, 9));

let ottawa = ['ted', 'balloon', {cupcakes: 43}];
let georgia = ottawa.slice();
console.log(ottawa);
georgia[2].cupcakes += 100;
georgia.push('georgia only')
console.log(ottawa);
console.log(georgia);