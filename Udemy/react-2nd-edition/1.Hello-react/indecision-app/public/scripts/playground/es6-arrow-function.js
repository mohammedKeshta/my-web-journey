"use strict";

console.log('ES6 Aside: Arrow Functions 1');

var square = function square(x) {
  return x * x;
};

var squareArrow = function squareArrow(x) {
  return x * x;
};

square(2); // 4

squareArrow(2); // 4
// Challenge 1

/*
 * Create A function that return the first name from fullName
 * */

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};

console.log(getFirstName('Mohammed Elzanaty')); // Mohammed