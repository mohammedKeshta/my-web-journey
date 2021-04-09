const fs = require('fs');

const currentFile = __filename
    .split('/')
    .splice(9)
    .join('/');

console.log('NODE RAN: ', currentFile)