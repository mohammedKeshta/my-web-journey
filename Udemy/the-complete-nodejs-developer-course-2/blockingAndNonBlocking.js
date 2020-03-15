/*
 * Copyright (c) 2020 by Mohammed Elzanaty. All Rights Reserved.
 * @description: Blocking and Non Blocking Nodejs
 * @link: http://bit.ly/2QdkTIY
*/

console.log("Blocking and Non Blocking Nodejs");
/*
// Synchronous: 1,2,3
alert('1');
alert('2');
alert('3');

// Asynchronous: 1,3,2
alert(1);
setTimeout(() => alert(2), 0);
alert(3);
*/
function moreWork() { console.log('moreWork')}
// Blocking
const fs = require('fs');
const data = fs.readFileSync('./LINKS.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

// Non-blocking
fs.readFile('./LINKS.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
