'use strict';
function getDisplayObject() {
  return {
    x: 10,
    y: 12,
    size: {
      width: 100,
      height: 50
    }
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