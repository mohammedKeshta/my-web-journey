const utils = require('./utilities')
const getNotes = require('./notes')
const validator = require('validator')

/* use another module */
console.log(utils.name) // Mohammed
console.log(utils.add(1, 2)) // 3
console.log(utils.add(1, 2, 3, 4, 5)) // 15

/* use our own files */
const msg = getNotes()
console.log(msg)

/*use node modules*/
console.log(validator.isEmail('mo@mo.com')) // true
console.log(validator.isURL('https://google.com')) // true
console.log(validator.isURL('google')) // false
