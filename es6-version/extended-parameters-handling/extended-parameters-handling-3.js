//NOTE: this example doesn't run under node.js :(
'use strict';
function test() {
    let call = (...rest) => {
        console.log(rest);
        console.log(arguments);
    };
    call(20, 15);
}
test(1, 10, 12);