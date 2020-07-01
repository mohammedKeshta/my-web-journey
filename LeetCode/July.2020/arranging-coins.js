/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (numberOfCoins) {
  let currentRow = 1;
  let rows = 0;
  while (numberOfCoins > 0) {
    numberOfCoins = numberOfCoins - currentRow;
    rows++;
    currentRow++;
  }
  return numberOfCoins === 0 ? rows : --rows;
};

const rows = arrangeCoins(6);
console.log(rows);
