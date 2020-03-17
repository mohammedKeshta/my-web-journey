const utils = require('./utilities')
const getNotes = require('./notes')
const { isEmail, isURL } = require('validator')
const chalk = require('chalk')
const log = console.log

/* use another module */
log(utils.name) // Mohammed
log(utils.add(1, 2)) // 3
log(utils.add(1, 2, 3, 4, 5)) // 15

/* use our own files */
const msg = getNotes()
log(msg)

/*use node modules*/
log(isEmail('mo@mo.com')) // true
log(isURL('https://google.com')) // true
log(isURL('google')) // false

/*Printing in color*/
const success = chalk.bold.green.inverse('Success!')
log(success)
