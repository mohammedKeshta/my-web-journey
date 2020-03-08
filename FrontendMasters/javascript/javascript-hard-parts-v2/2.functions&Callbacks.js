/*
 * Created on 3/8/20, 12:52 PM
 * Copyright (c) 2020 - Mohammed Elzanaty - sceel.io
 * @desc: Functions & Callbacks
 */

console.log('Functions & Callbacks');

function copyArrayMultiplyBy2(array) {
  /*return array.map(el => el  2)*/
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayMultiplyBy2(myArray);
console.log(result); // [2, 4, 6]

/*
 *   ---------------------------------------------------------------------------------------------------------------------------------------------
 *   |    Global Memory              |    Context                                                           |    Call Stack
 *   |--------------------------------------------------------------------------------------------------------------------------------------------
 *   |                                   GLOBAL EXECUTION CONTEXT
 *   |   copyArrayMultiplyBy2 : {f}
 *   |   myArray: [1, 2, 3]
 *   |   result :
 *   |                                   NEW THREAD EXECUTION CONTEXT
 *   |                                   -------------------------------------
 *   |                                   | CONTEXT  copyArrayMultiplyBy2([1, 2, 3])  |  Local Memory             copyArrayMultiplyBy2()
 *   |                                                                                   array: [1, 2, 3]        global()
 *   |                                                                                   output: []
 *   |                                     i = 0  => array[0] = 1 => 1*2 => output[0] = 2
 *   |                                     i = 1  => array[1] = 2 => 2*2 => output[1] = 4
 *   |                                     i = 2  => array[2] = 3 => 3*2 => output[2] = 6
 *   |                                     return output => [2, 4, 6]
 *   |   result : [2, 4, 6]
 * */
// Higher Order Function
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
const arr = [1, 2, 3, 4, 5];
// instructions / Callbacks
const multiplyBy2 = num => num * 2;
const divideBy2 = num => num / 2;
const squareNum = num => num * num;

const multiplyResult = copyArrayAndManipulate(arr, multiplyBy2);
const divideResult = copyArrayAndManipulate(arr, divideBy2);
const squareResult = copyArrayAndManipulate(arr, squareNum);

console.log(`Multiply Result => ${multiplyResult}
Divide Result => ${divideResult}
Square Result => ${squareResult}`);
/*
 * Multiply Result => [2,4,6,8,10]
 * Divide Result => [0.5,1,1.5,2,2.5]
 * Square Result => [1,4,9,16,25]
 * */
