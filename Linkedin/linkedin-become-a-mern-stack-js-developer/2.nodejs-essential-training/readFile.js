const fs = require("fs");

console.log("start reading file");
const textSync = fs.readFileSync("./assets/Readme.md", "UTF-8");
console.log(textSync);
console.log("Complet Sync reading file");

fs.readFile("./assets/alex.jpg", (err, imgAsync) => {
  if (err) {
    console.log(`An error has occcured ${err.message}`);
    process.exit();
  }
  console.log("Complet Async reading Image");
  console.log(imgAsync);
});
