//NOTE: this example doesn't run under node.js :(
'use strict';
function test() {
  ((...args) => {
    console.log(args);
    console.log(arguments);
  })(20, 15);
}
test(1, 10, 12);