'use strict';
let numbers = [0, 1, 2];
let squares = numbers.map(n => n * n).forEach((n, i) => {
  console.log(i + '\t' + n);
});