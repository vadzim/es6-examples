'use strict';
function Foo() {
  let obj = {
    log(value) {
      console.log(value);
    },
    logPow(a, b = 2) {
      this.log(Math.pow(a, b));
    },
    logPowArrow: (a, b = 2) => this.log(Math.pow(a, b))
  };
  obj.logPow(3);
  obj.logPowArrow(3);
};
Foo.prototype.log = a => console.log(`external ${a}`);
new Foo();