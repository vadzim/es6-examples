//NOTE: this example doesn't run under node.js :(
'use strict';
function test(x, y = 7, z = 42) {
  console.log(`x=${x} y=${y} z=${z} sum=${x + y + z}`);
}
test(1);
test(1, 10);
test(1, 10, 12);