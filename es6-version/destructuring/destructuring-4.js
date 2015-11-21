'use strict';
function desctructAndLog(array) {
  let [ a = 1, b = 2, c] = array;
  console.log(a, b, c);
}
desctructAndLog([3, 5, 9]);
desctructAndLog([3, 5]);
desctructAndLog([3]);
desctructAndLog([]);