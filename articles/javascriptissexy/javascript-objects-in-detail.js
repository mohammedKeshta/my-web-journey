let myFirstObj = { firstName: "mohammed", favoriteAuthor: "yasmeen" };

let ageGroup = { 30: "Children", 100: "Very Old" };
console.log(ageGroup["30"]); // Children

let person = "mohammed";
let anotherPerson = person;
person = "yasmeen";
console.log(person); // yasmeen
console.log(anotherPerson); // mohammed

let personObj = { name: "Kobe" };
let anotherPersonObj = personObj;
personObj.name = "Bryant";

console.log(anotherPersonObj.name); // Bryant
console.log(personObj.name); // Bryant

function Person(name, age, job, gender) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.gender = gender;

  this.print = () => {
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}, Gender: ${gender}`);
  };
}

let personObjMohammed = new Person("Mohammed", 26, "Developer", "Male");
personObjMohammed.print(); // Name: Mohammed, Age: 26, Job: Developer, Gender: Male

// Prototype Pattern for Creating Objects
function Fruit() {}

Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function() {
  console.log("This is a " + this.fruitName);
};

let mangoFruit = new Fruit();
mangoFruit.showName(); // This is a Generic Fruit

// Create a new school object with a property name schoolName
let school = {
  schoolName: "MIT",
  schoolAccredited: true,
  schoolLocation: "Massachusetts"
};

// Prints true because schoolName is an own property on the school object
console.log("schoolName" in school); // true

// Prints false because we did not define a schoolType property on the school object, and neither did the object inherit a schoolType property from its prototype object Object.prototype.
console.log("schoolType" in school); // false

// Prints true because the school object inherited the toString method from Object.prototype.
console.log("toString" in school); // true

// Prints true because schoolName is an own property on the school object
console.log(school.hasOwnProperty("schoolName"));

// Prints false because the school object inherited the toString method from Object.prototype,
// therefore toString is not an own property of the school object.
console.log(school.hasOwnProperty("toString")); // false

//Use of the for/in loop to access the properties in the school object
for (let property in school) {
  if (school.hasOwnProperty(property)) {
    console.log(`${property}: ${school[property]}`);
  }
}
// Implement inheritance with the HigherLearning constructor
function HigherLearning() {
  this.educationLevel = "University";
}

school = new HigherLearning();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";

let christmasList = { mike: "Book", jason: "sweater", chelsea: "iPad" };
console.log(JSON.stringify(christmasList, null, 4)); // "{"mike":"Book","jason":"sweater","chelsea":"iPad"}"

let christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
console.log(JSON.parse(christmasListStr, null, 2));

/*  Notes
    1. JavaScript has one complex data type, the Object data type, and
       it has five simple data types: Number, String, Boolean, Undefined, and Null.
    2. Property names can be a string or a number,
       but if the property name is a number, it has to be accessed with the bracket notation.
       //- It is best to avoid using numbers as property names.
    3. Primitive Data Types are stored directly to a variable
    4. Reference Data Type value is stored as a reference it is not stored directly on the variable, as a value.
    5. Object Data Properties Have Attributes
         — Configurable Attribute: Specifies whether the property can be deleted or changed.
         — Enumerable: Specifies whether the property can be returned in a for/in loop.
         — Writable: Specifies whether the property can be changed.
    6. Creating Objects
         — Object Literals
             => let homeObj = {}
             => let bagObj = {id: 0, name: "bag"}
         — Object Constructor
             => A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
             => let person = new Object()
             => animal.color = 'white'
             => animal.age = 12
     7. Practical Patterns for Creating Objects
         — Constructor Pattern for Creating Objects
             - An inherited property is defined on the object’s prototype property.
             - An own property is defined directly on the object itself.
             - To access a property of an object, we use object.property,
             - To invoke a method of an object, we use object.method()
         — Prototype Pattern for Creating Objects
     8. How to Access Properties on an Object
         — Dot Notation
             => let bookObj = {title: "Ways to Go"}
             => bookObj.title
         — Bracket Notation
             => let bookObj = {title: "Ways to Go"}
             => bookObj['title']
             //Or, in case you have the property name in a variable:
             => const bookTitle = "title";
             => console.log ( book[bookTitle]); // Ways to Go
     9. Own and Inherited Properties
         — Own and Inherited Properties
             Objects have inherited properties and own properties.
             The own properties are properties that were defined on the object,
             while the inherited properties were inherited from the object’s Prototype object
         — hasOwnProperty
             To find out if an object has a specific property as one of its own property,
             you use the hasOwnProperty method.
         — Accessing and Enumerating Properties on Objects
             To access the enumerable (own and inherited) properties on objects,
             you use the for/in loop or a general for loop.
         — Accessing Inherited Properties
             Properties inherited from Object.prototype are not enumerable,
             so the for/in loop does not show them. However, inherited properties
             that are enumerable are revealed in the for/in loop iteration.
     10. Object’s Prototype Attribute and Prototype Property
         — The prototype attribute and prototype property of an object are critically
           important concepts to understand in JavaScript.
     11. Deleting Properties of an Object
         — To delete a property from an object, you use the delete operator.
         — You cannot delete properties that were inherited,
           nor can you delete properties with their attributes set to configurable.
             => delete objName.propertyName
     12. Serialize and Deserialize Objects
         — To transfer your objects via HTTP or to otherwise convert it to a string,
           you will need to serialize it (convert it to a string);
           you can use the JSON.stringify function to serialize your objects.
         — To Deserialize your object (convert it to an object from a string),
           you use the JSON.parse function from the same json2 library.
 
    */
