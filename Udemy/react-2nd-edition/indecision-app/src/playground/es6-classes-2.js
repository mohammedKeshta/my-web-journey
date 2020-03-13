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

  constructor() {
    super();
  }
}


const me = new Student('Mohammed Elzanaty', 26);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

console.log('--------------------');

const other = new Student();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

console.log('-------END----------');
