'use strict';
let object = {
    x: 10,
    y: 12,
    width: 100,
    height: 50
};

let {x, y} = object;
console.log(x);
console.log(y);

let {width : w, height : h} = object;
console.log(w);
console.log(h);
