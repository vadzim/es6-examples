'use strict';
function logger(literals, ...substitutions) {
  let result = '';

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  if (literals.length > substitutions.length) {
    result += literals[literals.length - 1];
  }
  console.log(result);
}

let place = 'Менску';
let temperature = 21;
logger`Сёння ў ${place} ${temperature} градус`;