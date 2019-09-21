/*
 *  What is a closure?
 *  - A closure is an inner function that has access to the outer (enclosing)
 *   function’s variables—scope chain.
 *  - IT has three scope chain
 *      1. It has access to its own scope (variables defined between its curly brackets)
 *      2. It has access to the outer function’s variables
 *      3. It has access to the global variables
 * */

function showName(firstName, lastName) {
  let nameIntro = "Your name is: ";
  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() {
    return `${nameIntro}${firstName} ${lastName}`;
  }
  return makeFullName();
}

showName("Michael", "Jackson"); // Your name is Michael Jackson

// Closures SideEffects
/*
 * Closures have access to the outer function’s variable even after the outer function returns:
 * */
function celebrityName(firstName) {
  let celebrityIntro = "This celebrity is ";
  function lastName(theLastName) {
    return `${celebrityIntro}${firstName} ${theLastName}`;
  }
  return lastName;
}

let mjName = celebrityName("Mohammed");
mjName("Elzanaty");

/*
 * Closures store references to the outer function’s variables;
 * */
function celebrityID() {
  let celebrityID = 999;
  // We are returning an object with some inner functions
  // All the inner functions have access to the outer function's variables
  return {
    getID: function() {
      // This inner function will return the UPDATED celebrityID variable
      // It will return the current value of celebrityID, even after the changeTheID function changes it
      return celebrityID;
    },
    setID: function(theNewID) {
      // This inner function will change the outer function's variable anytime
      celebrityID = theNewID;
    }
  };
}

let mjID = celebrityID(); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable

/*
 * Closures Gone Awry
 * */
function celebrityIDCreator(theCelebrities) {
  let i;
  let uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"] = (function(j) {
      // the j parametric variable is the i passed in on invocation of this IIFE
      return (function() {
        // each iteration of the for loop passes the current value of i
        // into this IIFE and it saves the correct value to the array
        return uniqueID + j;

        // BY adding () at the end of this function,
        // we are executing it immediately and returning just the value of uniqueID + j,
        // instead of returning a function.
      })();
      // immediately invoke the function passing the i variable as a parameter
    })(i);
  }
  return theCelebrities;
}
let actionCelebs = [
  { name: "Stallone", id: 0 },
  { name: "Cruise", id: 0 },
  { name: "Willis", id: 0 }
];
let createIdForActionCelebs = celebrityIDCreator(actionCelebs);
let stalloneID = createIdForActionCelebs[0];

console.log(stalloneID.id); // 100
