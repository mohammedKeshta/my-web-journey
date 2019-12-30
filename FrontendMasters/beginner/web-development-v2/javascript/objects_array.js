exports.run = () => {
  console.log('Objects and Arrays');
  const person = {
    name: {
      first: 'Mohammed',
      last: 'Elzanaty'
    },
    city: 'Cairo',
    state: 'Egypt',
    favoriteFood: '🌮',
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
    address: {
      street: '12 place',
      building: '12'
    },
    speak: () => {
      console.log('speak speak');
    },
    getFullName() {
      return `${this.name.first} ${this.name.last}`;
    }
  };
  console.log(person);
  console.log(person.name);
  console.log(person['name']); // same as the line above; definitely prefer using the other one
  console.log(person.speak);
  console.log(person.speak());
  console.log(person.getFullName());

  const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);
  console.log(daysOfTheWeek.length);
  console.log(daysOfTheWeek.join(' | '));

  daysOfTheWeek.forEach(day => console.log(day));
};
