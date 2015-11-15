//NOTE: this example doesn't run under node.js :(
'use strict';
function test(...args) {
  console.log('>> args');
  console.log(args);
  console.log(args.length);
  console.log(Array.isArray(args));

  console.log('>> arguments');
  console.log(arguments);
  console.log(arguments.length);
  console.log(Array.isArray(arguments));
}
test(1, 10, 12);