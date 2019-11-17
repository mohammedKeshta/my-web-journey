// article link http://bit.ly/33S4bUa

/*
 * Table of Contents
 *   1. Intro
 *   2. Test Your Knowledge
 *   3. What is Scope?
 *        Scope in JavaScript defines which variables and functions you have access
 *   4. Global Scope
 *   5. Local Scope
 *   6. Hoisting and Scope
 *   7. Wrap-up
 * */

var greet = "Hello!";

function sayHi() {
  /*
   * The JavaScript engine reaches console.log, looks for a variable greet,
   * and finds it within the current local scope.
   * However, the local greet hasn’t been assign to anything yet, hence the value is undefined.
   * */
  console.log("2: ", greet);
  var greet = "Ciao!";
  console.log("3: ", greet);
}

console.log("1: ", greet);
sayHi();
console.log("4: ", greet);

/*
 *   Global Execution        Global Memory
 *   sayHello()              greet => Hello!
 *                           sayHi => [f]
 *   "1: Hello!"
 *                    Local Memory
 *                    greet => undefined
 *  "undefined"
 *                    greet => Ciao!
 *   "3: Ciao!"
 *   "4: Hello!"
 * */
