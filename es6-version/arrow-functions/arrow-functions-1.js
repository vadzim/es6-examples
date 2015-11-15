'use strict';
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

let oddSquares = numbers.filter(n => n % 2).map(n => n * n).forEach((n, i) => {
  console.log(i + '\t' + n);
});