const fs = require("fs");

const FILE_NAME = "storage-files";
if (!fs.existsSync(FILE_NAME)) {
  fs.mkdir(FILE_NAME, err => {
    if (err) throw err;
    console.log("Directory Created");
  });
} else {
  console.log("Already Directory Created");
}
