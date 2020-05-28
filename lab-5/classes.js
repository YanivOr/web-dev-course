/** /
class User {
  constructor() {
    this.firstName = null;
    this.lastName = null;
  }

  returnFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const userExample = new User();

userExample.firstName = 'Yaniv';
userExample.lastName = 'Or';

const fullName = userExample.returnFullName();
console.log(fullName);
/**/

/**/ 
class User {
  /*
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  */

  constructor() {
    console.log('Init');
  }

  customFunc() {
    console.log('custom');
  }

  /*
  returnFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  */
}

const userExample1 = new User; //('Yaniv', 'Or');

userExample1.customFunc();

//const userExample2 = new User('Anton', 'Kisil');


//console.log(userExample1);
//console.log(userExample2);

/*
const fullName = userExample.returnFullName();
console.log(fullName);
*/
/**/