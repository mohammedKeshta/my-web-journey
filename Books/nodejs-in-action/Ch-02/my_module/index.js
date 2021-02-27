const Currency = require('./lib/currency')

const canadianDollar = 0.91
const currency = new Currency(canadianDollar)

console.log(currency.canadianToUS(100))
console.log(currency.USToCanadian(100))