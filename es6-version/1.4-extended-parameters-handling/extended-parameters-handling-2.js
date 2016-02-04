//NOTE: this example doesn't run under node.js :(
'use strict';
function test(...rest) {
  console.log('>> rest');
  console.log(rest);
  console.log(rest.length);
  console.log(Array.isArray(rest));

  console.log('>> arguments');
  console.log(arguments);
  console.log(arguments.length);
  console.log(Array.isArray(arguments));
}
test(1, 10, 12);