// article link http://bit.ly/32V3x7r

/*
 * Table of Contents
 *   1. Intro
 *   2. Test Your Knowledge
 *   3. Function Hoisting
 *   4. Function Declaration vs Function Expression
 *   5. Function Expressions are Not Hoisted
 *   6. Wrap-up
 * */

sayHello();

function sayHello() {
  function hello() {
    console.log("Hello!");
  }

  hello();

  function hello() {
    console.log("Hey!");
  }
}

/*
 *   Global Execution        Global Memory
 *   sayHello()              sayHello2 => [f]
 *                           hello => [f]
 *                           hello => [f]
 *   "Hey!"
 * */

sayHello2();

function sayHello2() {
  var hello = function() {
    console.log("Hello!");
  };

  hello();

  var hello = function() {
    console.log("Hey!");
  };
}
/*
 *   Global Execution        Global Memory
 *   sayHello()              sayHello2 => [f]
 *                           hello => undefined
 *                           hello => undefined
 *   "Hello!"
 * */

sayHello3();

var sayHello3 = function() {
  function hello() {
    console.log("Hello!");
  }

  hello();

  function hello() {
    console.log("Hey!");
  }
};
/*
 *   Global Execution        Global Memory
 *   sayHello3()              sayHello3 => undefined
 *                           hello => [f]
 *                           hello => [f]
 *   "TypeError"
 * */
