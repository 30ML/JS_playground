/* Constructor Function */
function User (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user1 = new User ('Ryan', 'Kim', 30, 'male')
const user2 = new User ('Jade', 'Jeon', 20, 'female')

console.log(user1); // User { firstName: 'Ryan', lastName: 'Kim', age: 30, gender: 'male' }
console.log(user2); // User { firstName: 'Jade', lastName: 'Jeon', age: 20, gender: 'female' }

/* Prototype */
User.prototype.emailDomain = '@gmail.com';

console.log(user1.emailDomain); // '@gmail.com'
console.log(user2.emailDomain); // '@gmail.com'

// Prototype - function
User.prototype.getEmailAddress = function () {
  return this.firstName + this.lastName + this.emailDomain;
}

console.log(user1.getEmailAddress());