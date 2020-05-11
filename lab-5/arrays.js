/** /
const fruits = [
  'apple',
  'orange',
  'banana',
  'mango',
];

console.log('fruits:', fruits);
console.log('The fruit in index 0 is:', fruits[0]);
console.log('The fruit in index 3 is:', fruits[3]);
console.log('The fruit in index 12 is:', fruits[12]);
/**/

/** /
const mix = [
  'apple',
  2,
  45.6,
  () => { console.log(`I'm a function`)},
];

console.log('The value in index 3 is:',mix[3]);
mix[3]();
/**/

/** /
const myFunc = () => console.log(`I'm a function`);

const mix = [
  'apple',
  2,
  45.6,
  myFunc,
];

console.log('The value in index 3 is:',mix[3]);
//mix[3]();
/**/

/** /
const fruits = [
  'apple',
  'orange',
  'banana',
  'mango',
];



/**/