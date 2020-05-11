/** /
const a = true;
const b = false;

console.log('NOT', !a);
console.log('OR', a || b);
console.log('AND', a && b);
/**/

/** /
const a = 2;
const b = 4;
const c = 2;
const d = '4';

console.log(a > b);
console.log(a >= c);
console.log(b == d);
console.log(b === d);
/**/

/** /
const a = 2;
const b = 4;
const c = 2;
const d = '4';

if (a < b) {
  console.log('a is less than b');
}

if (a > b) {
  console.log('a is greater than b');
}
else {
  console.log('a is less than b');
}
  
const result = (a < b) ? 'a is less than b' : 'a is greater than b';
console.log(result);
/**/

/** /
const result = '111';
// const result = '222';
// const result = '333';
// const result = 'abcd';

switch (result) {
  case '111':
    console.log('result is 222');
    break;
  case '222':
    console.log('result is 222');
    break;
  case '333':
  default:
    console.log('I am default');
    break;
}
/**/