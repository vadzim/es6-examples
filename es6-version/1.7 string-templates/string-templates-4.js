'use strict';
let doLog;

function loggerA(literals, ...substitutions) {
  if (!doLog) {
    return;
  }
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

function loggerB(string) {
  if (!doLog) {
    return;
  }
  console.log(string);
}

let step = 2000000;
let iterations = step * 5;

let place = 'Менску';
let temperature = 21;

let timeLoggerA = new Date().getTime();
for (let i = 0; i <= iterations; i++) {
  doLog = i % step == 0;
  loggerA`Запіс нурам ${i}: сёння ў ${place} ${21} градус`;
}
console.log(`>>> ${new Date().getTime() - timeLoggerA}`);

let timeLoggerB = new Date().getTime();
for (let i = 0; i <= iterations; i++) {
  doLog = i % step == 0;
  loggerB(`Запіс нурам ${i}: сёння ў ${place} ${21} градус`);
}
console.log(`>>> ${new Date().getTime() - timeLoggerB}`);
