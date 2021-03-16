const people = ["Amanda", "Farrin", "Geoff", "Karen", "Richard", "Tyler"];
const excitedPeopleImperative = [];

for (let i = 0; i < people.length; i++) {
  excitedPeopleImperative[i] = people[i] + "!";
}
console.log(excitedPeopleImperative);

// Declarative
let excitedPeopleDeclarative = people.map(name => name + '!')
console.log(excitedPeopleDeclarative)

