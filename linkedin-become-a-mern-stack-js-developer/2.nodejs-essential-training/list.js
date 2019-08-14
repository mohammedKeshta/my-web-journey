const fs = require("fs");

console.log('start');
const filesSync = fs.readdirSync("./assets");
console.log('complete');
console.log(filesSync);

const filesAsync = fs.readdir("./assets", (err ,files) => {
  if (err) throw err;
  console.log('complete');
  console.log(files);
});
console.log('start Reading Files ');

