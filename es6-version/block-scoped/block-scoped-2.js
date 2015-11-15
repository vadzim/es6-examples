'use strict';
let arr = [
  [0, 1],
  [1, 0]
];

for (let i = 0; i < arr.length; i++) {
  let row = arr[i];
  for (let i = 0; i < arr.length; i++) {
    console.log(row[i]);
  }
}
