console.log("################################################");
console.log("###################..... Data Types .....#######");
console.log("################################################");
console.log();
console.log("###################..... Numbers .....##########");

/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log(`100 - 60 + 2 = ${100 - 60 + 2}`);

console.log();
console.log("###################..... Strings .....##########");
/*
 *   Program that reverse the strings
 *
 * */
str = "hello";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}
console.log(`Original String is ${str} and Reverse of it ${revStr} `);

/*
 * implicit type coercion and it's a feature of JavaScript.
 * JavaScript multiplies the 5*10 to become 50 and then changes the number 50 into the string "50",
 * so you're adding together the same data type. This then gets combined with the string "Hello".
 * */

console.log(`Hello${5 * 10}`);

/*
 * Programming Quiz: Converting Temperatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the formula above
 * 2. Log the fahrenheit variable to the console
 *
 */

let celsius = 12;
/* convert celsius to fahrenheit here */
let fahrenheit = celsius * 1.8 + 32;
/* print out result here */
console.log(`Celsius: ${celsius} / Fahrenheit: ${fahrenheit} `);

let quote = "Stay awhile and listen!";
console.log(quote[6]); // w
console.log(quote.charAt(6)); // w
// In JavaScript, you use the backslash to escape other characters.
console.log('The man whispered, "please speak to me."');
console.log(
  'The file located at "C:\\\\Desktop\\My Documents\\Roster\\names.txt" contains the names on the roster.'
);
console.log("https://mzl.la/32E4Tn4");

/*Comparing Strings*/
console.log("Yes" === "yes");
/*
 * Programming Quiz: Favorite Food (2-3)
 */

console.log(`Burger`);
/*
 * Programming Quiz: Yosa Buson (2-6)
 */

let haiku =
  "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east.";
console.log(haiku);

/*Null, Undefined, and NaN*/
// calculating the square root of a negative number will return NaN
console.log(Math.sqrt(-10));

// trying to divide a string by 5 will return NaN
console.log("hello" / 5);

/*
 * Programming Quiz: Semicolons! (2-8)
 */

let thingOne = "red";
let thingTwo = "blue";
console.log(`${thingOne} ${thingTwo}`);

/*
 * Programming Quiz: What's my Name? (2-9)
 */
let fullName = "Mohammed Elzanaty";
console.log(fullName);

/*
 * Programming Quiz: Out to Dinner (2-10)
 */

let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = bill + tip;
console.log(total.toFixed(2));

/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

let firstName = "Julia";
let interest = "cats";
let hobby = "play video games";
let awesomeMessage =
  "Hi, my name is " +
  firstName +
  ". I love " +
  interest +
  ". In my spare time, I like to " +
  hobby +
  ".";
console.log(awesomeMessage);
