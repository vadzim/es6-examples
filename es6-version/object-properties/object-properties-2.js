'use strict';
let a = 'foo';
let b = 32;
let obj = {
  [a]: 'fooValue',
  [`key${b}`]: '32Value'
};

console.log(obj);