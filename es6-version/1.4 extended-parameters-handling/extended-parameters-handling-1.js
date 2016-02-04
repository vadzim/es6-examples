//NOTE: this example doesn't run under node.js :(
'use strict';
function test(x, y = 7, z = 42) {
  console.log(x, y, z);
}
test(1);
test(1, 10);
test(1, 10, 12);