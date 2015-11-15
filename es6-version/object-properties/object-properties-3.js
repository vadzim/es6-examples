'use strict';
let obj = {
  log(value) {
    console.log(value);
  },
  logPow(a, b = 2) {
    this.log(Math.pow(a, b));
  }
};
obj.logPow(3);