'use strict';
function bar([ name, val ]) {
  console.log(name, val);
}
bar(['bar', 12]);

function spread(name, val) {
  console.log(name, val);
}
spread(...['spread', 22]);
//spread.apply(null, ['spread', 22]);

function test({ name, val }) {
  console.log(name, val);
}
test({val: 11, name: 'test'});

function foo({ name: n, val: v }) {
  console.log(n, v);
}
foo({name: 'foo', val: 7});

