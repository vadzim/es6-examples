'use strict';
function getDisplayObject() {
  return {
    x: 10,
    y: 12,
    size: {
      width: 100,
      height: 50
    },
    filters : [
        'blur',
        'glow'
    ]
  };
}

let {x, y, size : {width}} = getDisplayObject();
console.log(x);
console.log(y);
console.log(width);

console.log('');

let {size : {width : w, height : h}} = getDisplayObject();
console.log(w);
console.log(h);

console.log('');

let {filters : [firstFilter, secondFilter]} = getDisplayObject();
console.log(firstFilter);
console.log(secondFilter);