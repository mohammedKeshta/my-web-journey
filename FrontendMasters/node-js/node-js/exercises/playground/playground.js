const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'README.md');
fs.writeFileSync(dir, '> Mohammed Elzanaty & Frontend Masters');

const file = fs.readFileSync(dir, { encoding: 'utf-8' });
console.log(file);
