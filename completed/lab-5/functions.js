/** /
// Functions - old school
function myFunc() {
  console.log('I am a function');
}

myFunc();

function myOtherFunc() {
  return 'I am a function';
}

const myFuncResponse = myOtherFunc();
console.log(myFuncResponse);

function addition(x, y) {
  return x + y;
}

const x = 3;
const y = 5;

const addResult = addition(x, y);
console.log(`The result of ${x} + ${y} is: ${addResult}`);
/**/

/** /
// Functions - arrow style
const myFunc = () => {
  return 'I am an arrow function';
}

const myFuncResponse = myFunc();
console.log(myFuncResponse);
/**/

