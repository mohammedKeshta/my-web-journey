function copyArrayAndManipulate(array, instruction) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
}

const myArray = [1, 2, 3];
const multiplyBy2 = a => a * 2;
let result = copyArrayAndManipulate(myArray, multiplyBy2);
