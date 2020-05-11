// In order to enable the codes, 
// remove the white space between the * and the /
// so that: /** /
// will become: /**/

/** /
// The "var" keyword
var myVar = 5;
console.log('myVar = ', myVar);

var myVar = 6 + 2.23;
console.log('myVar = ', myVar);

var myVar = 'just a simple string';
console.log('myVar = ', myVar);
/**/

/** /
// The "let" keyword
let myOtherVar = 5;
console.log('myOtherVar = ', myOtherVar);

// let myOtherVar = 1.5;
// Uncaught SyntaxError: Identifier 'myOtherVar' has already been declared

myOtherVar = 1.5;
console.log('myOtherVar = ', myOtherVar);
/**/

/** /
// The "const" keyword
const myConst = 'I am a const';
console.log('myConst', myConst);

// myConst = 123;
// Uncaught TypeError: Assignment to constant variable.
/**/

/** /
// Variables and strings
let followersLabel = 'followers';
let followersNum = 8;

console.log('There are ' + followersNum + ' ' + followersLabel);
console.log(`There are ${followersNum} ${followersLabel}`);
/**/

