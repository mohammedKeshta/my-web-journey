const fs = require("fs");
const { colorList } = require("./assets/colors.json");

colorList.forEach(c => {
  fs.appendFile("./storage-files/color.md", `${c.color}: ${c.hex} \n`, err => {
    if (err) throw err;
  });
});
