"use strict";

var greeter = 'hey hi'; //  globally scoped

function newFunction() {
  var hello = 'hello'; //  is function scoped. So we cannot access the variable hello outside of a function
} // console.log(hello); // error: hello is not defined


console.log(variable);
var variable = 'say hello';
/*
  - it is interpreted as this
  var variable;
  console.log(variable) // undefined
  variable = 'value';*/

/*
 * let is block scoped
 * let can be updated but not re-declared.
 * let, const declarations are hoisted to the top but are not initialized.
 * While var and let can be declared without being initialized, const must be initialized during declaration.
 * */

var tiems = 5;

if (tiems > 3) {
  var hello = 'say Hello instead';
  console.log(hello); //"say Hello instead"
} // console.log(hello); // hello is not defined // This is because let variables are block scoped .


var greeting = 'say Hi';
{
  var _greeting = 'say Hello instead';
  console.log(_greeting); //"say Hello instead"
}
console.log(greeting); //"say Hi"