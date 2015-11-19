'use strict';
let machineOperation = 'mul 3 2';
let [operation, ...params] = machineOperation.split(' ');
console.log(operation);
console.log(params);