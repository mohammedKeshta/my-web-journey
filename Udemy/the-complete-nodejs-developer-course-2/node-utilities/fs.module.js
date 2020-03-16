// define file system module and store it to fs variable
const fs = require('fs')

try {
    fs.writeFileSync('notes.txt', 'This file is created by node.js\r\n')
    fs.appendFileSync('notes.txt', 'data to append at new line\r\n')
    fs.appendFileSync('notes.txt', 'data to append at new line')
} catch (e) {
    /* Handle the error */
    throw new Error(e)
}
