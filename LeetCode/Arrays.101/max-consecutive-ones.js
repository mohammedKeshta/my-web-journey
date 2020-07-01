// Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0; //initialize count
  let result = 0; //initialize max
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index];
    if (!current) count = 0;
    else {
      count++;
      result = Math.max(result, count);
    }
  }
  return result;
};

const output = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(`Output: ${output}`);
