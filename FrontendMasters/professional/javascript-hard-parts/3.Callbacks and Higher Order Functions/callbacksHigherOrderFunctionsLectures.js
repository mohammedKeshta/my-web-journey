function copyArrayAndMultiplyBy2(array) {
  let output = [];
  let multiplyBy2 = number => number * 2;
  for (let i = 0; i < array.length; i++) {
    output.push(multiplyBy2(array[i]));
  }
  return output;
}

const myArray = [1, 2, 3];
let result = copyArrayAndMultiplyBy2(myArray); // [2, 4, 6]
