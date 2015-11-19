//NOTE: this example doesn't run under node.js :(
'use strict';
function test() {
    let call = (...args) => {
        console.log(args);
        console.log(arguments);
    };
    call(20, 15);
}
test(1, 10, 12);