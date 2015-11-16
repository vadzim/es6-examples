'use strict';
function desctructAndLog(array) {
  var [ a = 1, b = 2, c] = array;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('');
}
desctructAndLog([3, 5, 9]);
desctructAndLog([3, 5]);
desctructAndLog([3]);
desctructAndLog([]);