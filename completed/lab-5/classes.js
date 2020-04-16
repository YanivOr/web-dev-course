class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  returnFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const userExample = new User('Yaniv', 'Or');
const fullName = userExample.returnFullName();
console.log(fullName);