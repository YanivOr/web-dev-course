



/*
let and const
*/

/** /
let x = 4;

console.log(x);

x = 5;

console.log(x);

const y = 2;

console.log(y);

y = 3;

console.log(y);
/**/

/*
array
*/
/** /
const fruits = [
  'apple',
  'orange',
  'banana',
  'mango',
];

const mix = [
  'apple',
  2,
  45.6,
  () => { console.log(`I'm a function`)},
];

// mix[3]();
/**/

/**/
// try catch
/**/

/** /
const app = document.getElementById('app');
const div1 = document.createElement('div');
app.appendChild(div1);
/**/

/** /
users.map(item => {
  console.log(item.firstName);
  console.log(item.lastName);
  console.log(item.address);
});
/**/


/** /
users.map(({
  firstName,
  lastName,
  address
}) => {
  console.log(firstName);
  console.log(lastName);
  console.log(address.country);
  console.log(address.city);
  console.log(address.street);
  console.log(address.number);
});
/**/

/** /
users.map(({
  firstName,
  lastName, 
  address: {
    country,
    city,
    street,
    number,
  }
}) => {
  console.log('First Name: ', firstName);
  console.log('Last Name: ', lastName);
  console.log('Address: ', `${number} ${street} St. - ${city} - ${country}`);
});
/**/