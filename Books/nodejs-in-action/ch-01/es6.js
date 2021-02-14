function User() {
  // constructor
}

User.prototype.info = function () {}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  info() {
    return `${this.name} is ${this.age} years old`
  }
}

const person = new Person('Mohammed', 27)
console.log(person.info())