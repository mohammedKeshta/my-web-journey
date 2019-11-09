// Demonstration of Function-Level Scope
let name = "Richard";

function showName() {
  let name = "Jack"; // local variable; only accessible in this showName function
  console.log(name); // Jack
}

console.log(name); // Richard: the global variable

// No Block-Level Scope

// the blocks in this if statement do not create a local context for the name variable
if (name) {
  name = "Paul"; // this name is the global name variable and it is being changed to "Jack" here
  console.log(name); // Paul: still the global variable
}

// Here, the name variable is the same global name variable, but it was changed in the if statement
console.log(name); // Paul

/*
 *   - Local Variables Have Priority Over Global Variables in Functions
 *       If you declare a global variable and a local variable with the same name,
 *       the local variable will have priority when you attempt to use the variable inside a function
 * */

let username = "MohammedEl.";

function users() {
  // Here, the name variable is local and it takes precedence over
  // the same name variable in the global scope
  let name = "Jack";

  // The search for name starts right here inside the function before
  // it attempts to look outside the function in the global scope
  console.log(name);
}

users(); // Jack

/*
 *  Variable Hoisting
 *     All variable declarations are hoisted (lifted and declared) to the top of the function,
 *     if defined in a function, or the top of the global context, if outside a function.
 *
 * */

function showName() {
  console.log(name); // undefined
  let name = "Mohammed";
  console.log(name); // Mohammed
}

showName();
