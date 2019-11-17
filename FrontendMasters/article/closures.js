// article link http://bit.ly/2QoYlpt

/*
 * Table of Contents
 *   1. Intro
 *   2. Quiz
 *   3. Scope Chain Take 2
 *      - In addition to its own scope, every execution context has
 *        a reference to its outer scopes (if any), all the way up to the global scope.
 *        This chain of reference is what we call a scope chain.
 *      - a scope chain is created during the creation of a new execution context
 *        upon a function call, and it is a reference to variables that belong to outer scopes.
 *   4. [[scope]] Property
 *   5. Closure
 *   6. By Reference Not By Value
 *   7. Variable Lookups
 *   8. Further Reading
 *   9. Wrap-up
 * */
/*1*/
var name1 = "John";

function greet(name) {
  return function() {
    console.log("Hello " + name);
  };
}

var sayHello = greet(name1);

name1 = "Sam";

sayHello(); // Hello John

/*2*/
var a = "global";

function outer() {
  var b = "outer";

  return function inner() {
    var c = "inner";

    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
  };
}

var innerFunc = outer();

innerFunc();

// a: global
// b: outer
// c: inner
