'use strict';
function Foo() {
}
Foo.prototype.foo = 10;
Foo.prototype.logDelayed = function () {
    setTimeout(() => console.log(this.foo), 1000);
};

new Foo().logDelayed();