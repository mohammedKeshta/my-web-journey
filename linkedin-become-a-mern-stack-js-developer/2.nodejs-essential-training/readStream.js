const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');
let fileText ='';

console.log('Type something ...');
readStream.on('data', data => {
    console.log(`I read ${data.length - 1 } character of text`);
    fileText += data;
})

readStream.once('data', data => {
  console.log(data)
})

readStream.on('end', () => {
  console.log(`Finished and the length of file is ${fileText.length - -1 }`);

})
