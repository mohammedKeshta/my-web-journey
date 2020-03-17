const utils = require('./utilities')
const getNotes = require('./notes')

console.log(utils.name) // Mohammed
console.log(utils.add(1, 2)) // 3
console.log(utils.add(1, 2, 3, 4, 5)) // 15

const msg = getNotes()
console.log(msg)
