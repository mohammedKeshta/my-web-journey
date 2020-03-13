console.log('ES6 Aside: Arrow Functions 1');

const square = function(x) {
  return x * x;
};

const squareArrow = x => x * x;

square(2); // 4
squareArrow(2); // 4

// Challenge 1
/*
 * Create A function that return the first name from fullName
 * */

const getFirstName = name => name.split(' ')[0];
console.log(getFirstName('Mohammed Elzanaty')); // Mohammed
