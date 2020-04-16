/**
// Functions - old school
function myFunc() {
  console.log('I am a function');
}

myFunc();

function myOtherFunc() {
  return 'I am a function';
}

myFunc();

const myFuncResponse = myFunc();
console.log(myFuncResponse);
/**/

/** /
// Functions - arrow style
const myFunc = () => {
  return 'I am an arrow function';
}

const myFuncResponse = myFunc();
console.log(myFuncResponse);
/**/

/** /
// Functions - passing values
const myFunc = (label) => {
  return `I am an ${label}`;
}

const labelExample = 'arrow function';
const myFuncResponse = myFunc(labelExample);
console.log(myFuncResponse);
/**/

