/**
 * Created on 3/8/20, 2:21 PM
 * Copyright (c) 2020 - Mohammed Elzanaty - sceel.io
 * @desc: Callbacks and Higher-Order Functions
 * @link: http://csbin.io/callbacks
 */
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

/**
 * Challenge 1
 * Create a function addTwo that accepts one input and adds 2 to it.
 * */
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3)); // 5
// console.log(addTwo(10)); // 12

/**
 * Challenge 2
 * Create a function addS that accepts one input and adds an "s" to it.
 * */
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS('pizza')); // pizzas
// console.log(addS('bagel')); // bagels

// Challenge 3
/**
  Create a function called map that takes two inputs:
    1. an array of numbers (a list of numbers)
    2. a 'callback' function - a function that is applied to each element
     of the array (inside of the function 'map')
  Have map return a new array filled with numbers that are the result
  of using the 'callback' function on each element of the input array.
*/
function map(array, callback) {
  //First approach
  let output = [];
  for (let elem of array) {
    output.push(callback(elem));
  }
  return output;

  // Second approach
  /** return array.map(function(elem) {
        return callback(elem));
  })
  */
}

// console.log(map([1, 2, 3], addTwo)); // [ 3, 4, 5 ]

// Challenge 4
/**
  The function forEach takes an array and a callback,
  and runs the callback on each element of the array.
  forEach does not return anything
*/
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, char => {
  alphabet += char;
});
// console.log(alphabet); // 'abcd'

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
/**
 * In the first part of the extension, you're going to rebuild map as mapWith.
 * This time you're going to use forEach inside of mapWith instead of using a for loop
 */
function mapWith(array, callback) {
  let output = [];
  forEach(array, el => {
    output.push(callback(el));
  });
  return output;
}
// console.log(mapWith([4, 2, 6], addTwo)); // [ 6, 4, 8 ]

//Extension 2
/**
 *
 The function reduce takes an array and reduces the elements to a single value.
 For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
 */
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  forEach(array, el => {
    acc = callback(acc, el);
  });
  return acc;
}

const nums = [4, 1, 3];
const add = function(a, b) {
  return a + b;
};
const reduceResult = reduce(nums, add, 0); //-> 8

//Extension 3
/**
 * Construct a function intersection that compares input arrays and returns a new array
 *  with elements found in all of the inputs. BONUS: Use reduce!
 */

function intersection(...arrays) {
  const initialValue = arrays[0];
  const callback = (a, b) => a.filter(el => b.includes(el));
  return reduce(arrays, callback, initialValue);
}

// console.log(
//   intersection(
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ),
// );
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      let result = a;
      for (let elem of b) {
        if (a.indexOf(elem) === -1) {
          result.push(elem);
        }
      }
      return result;
    },
    []
  );
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//Extension 7
function objectFilter(obj, callback) {}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
