"use strict";

console.log('ES6 Aside: Arrow Functions 2'); //.. * arguments object - no longer bound with arrow function

var addES6 = function addES6(a, b) {
  console.log(arguments); // [Arguments] { '0': 2, '1': 4 }

  return a + b;
};

console.log(addES6(2, 4)); // 6

var add = function add(a, b) {
  // console.log(arguments); // Reference Error arguments is not defined
  return a + b;
};

console.log(add(2, 4)); // 6
//.. * this keyword - no longer bound

var multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 2,
  multiply: function multiply() {
    var self = this;
    return this.numbers.map(function (number) {
      return number * self.multiplyBy;
    });
  },
  multiplyArrow: function multiplyArrow() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};
console.log(multiplier.multiply()); // [ 2, 4, 6, 8 ]

console.log(multiplier.multiplyArrow()); // [ 2, 4, 6, 8 ]