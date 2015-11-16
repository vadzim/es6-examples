'use strict';
let machineOperation = 'mul 3 2';
let [operation, ...params] = machineOperation.split(' ');
switch (operation) {
  case 'mul' :
    console.log(params.reduce((prev, curr) => prev * curr));
}