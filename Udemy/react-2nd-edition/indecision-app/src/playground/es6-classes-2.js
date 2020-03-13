console.log('ES6 Classes Part - 2');
console.log('-------START--------');

class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I'm ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    description += this.hasMajor() ? ` Their major is ${this.major}` : '';
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let description = super.getGreeting();
    description += this.hasHomeLocation() ? ` I'm visiting from ${this.homeLocation}` : '';
    return description;
  }
}

const me = new Student('Mohammed Elzanaty', 26, 'Computer Science');
const meTraveler = new Traveler('Mohammed Elzanaty', 26, 'Egypt');

console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

console.log(meTraveler.getGreeting());

console.log('--------------------');

const other = new Student();
const otherTraveler = new Traveler();

console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

console.log(otherTraveler.getGreeting());

console.log('-------END----------');
