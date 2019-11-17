// article link http://bit.ly/2XiMhaW

/*
 * Table of Contents
 *   1. Intro
 *   2. Execution Context != Scope
 *   3. What is Execution Context ?
 *      - Place that holds information about the environment within which
 *        => the current code is being executed.
 *   4. Memory Creation Phase
 *        1. Creation of a scope
 *        2. Creation of a scope chain
 *        3. Determination of the value of this
 *   5. Leading Parent Object
 *   6. "this" and "self"
 *   7. bind(): returns a function, which when invoked later will have a set context
 *      call(): immediately invokes a function with a set context
 *      apply(): immediately invokes a function with a set context
 *   8. Execution Stack
 *   9. Wrap-up
 * */

var globalThis = this;

function myFunc() {
  console.log("globalThis: ", globalThis); // globalThis: Window {...}
  console.log("this inside: ", this); // this inside: Window {...}
  /*
   * this gets set to a leading parent object of a function call.
   * If there is no leading parent object, this defaults to the global object (undefined in strict mode).*/
  console.log(globalThis === this); // true
}

myFunc();

/*2*/
var myObj = {
  myMethod: function() {
    console.log("globalThis: ", globalThis); // globalThis: Window { ... }
    console.log("this inside: ", this); // this inside: { myMethod: f }
    console.log(globalThis === this); // false
    console.log(myObj === this); // true
  }
};

myObj.myMethod();

/*3*/
var myObj2 = {
  myMethod: function() {
    console.log(this); // Window { ... }
  }
};

var myFunc2 = myObj2.myMethod;
myFunc2();

/*4*/
var myObj3 = {
  myMethod: function() {
    myFunc();

    function myFunc() {
      console.log(this); // Window { ... }
    }
  }
};

myObj3.myMethod();

/*5*/
var myObj5 = {
  myMethod: function() {
    var self = this;
    myFunc();

    function myFunc() {
      console.log("this: ", this); // this: Window { ... }
      console.log("self: ", self); // self: { myMethod: f }
    }
  }
};

myObj5.myMethod();

/*6*/
var greet2 = "Hello!";

function showGreet() {
  console.log(this.greet2);
}

var casualGreet = { greet2: "Hey!" };

showGreet(); // Hello!
showGreet.bind(casualGreet)(); // Hey!
showGreet.call(casualGreet); // Hey!
showGreet.apply(casualGreet); // Hey!
