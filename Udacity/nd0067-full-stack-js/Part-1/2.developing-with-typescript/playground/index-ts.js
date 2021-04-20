var a = 4;
var b = 6;
var c = '5';
var d = 'cat';
var multiply = function (num1, num2) { return console.log(num1 + " * " + num2 + " =  " + num1 * num2); };
var add = function (num1, num2) { return console.log(num1 + " + " + num2 + " =  " + (num1 + num2)); };
multiply(a, b); //=> 24
multiply(a, c); //=> 20
// multiply(a, d) //=> NaN
add(a, b); //=> 10
add(a, c); //=> 45
add(a, d); //=> 4cat
