const fs = require("fs");

// Create Directory
const DIR_NAME = "storage-file";
if (!fs.existsSync(DIR_NAME)) {
  fs.mkdir(DIR_NAME, err => {
    if (err) throw err;
    console.log("Directory Created");
  });
} else {
  console.log("Already Directory Created");
}

// Rename Directory
fs.renameSync(`./${DIR_NAME}`, "./storage");

// Delete Directory
fs.rmdir("./storage", err => {
  if (err) throw err;
  console.log("Dir Deleted");
});
