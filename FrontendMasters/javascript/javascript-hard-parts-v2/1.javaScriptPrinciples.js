console.log('JavaScript Principles #1');

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}


const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

/*
*   ---------------------------------------------------------------------------------------
*   |    Memory              |    Context                                       |    Call Stack
*   |--------------------------------------------------------------------------------------
*   |                         GLOBAL EXECUTION CONTEXT
*   |   num : 3
*   |   multiplyBy2: {f}
*   |   output :
*   |                           NEW THREAD EXECUTION CONTEXT
*   |                           -------------------------------------
*   |                           | CONTEXT  multiplyBy2  |  Local Memory
*   |                                                       inputNumber: 3
*   |                                                       result: 6
*   |                             return result => 6
*   |   output : 6
*   |   newOutput :
*   |                           NEW THREAD EXECUTION CONTEXT
*   |                           -------------------------------------
*   |                           | CONTEXT  multiplyBy2  |  Local Memory
*   |                                                       inputNumber: 10
*   |                                                       result: 20
*   |                             return result => 20
*   |   newOutput : 20
* */

