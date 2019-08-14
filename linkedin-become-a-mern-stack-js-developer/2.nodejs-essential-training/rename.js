const fs = require("fs");

// copy file alex.jpg to storage-delete
fs.rename("./assets/alex.jpg", "./storage-files/alex-delet.jpg", err => {
  if (err) throw err;
});
// copy file notes.md -> storage-files/notes.md
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
  if (err) throw err;
});
// rename file notes.md -> notes-rename.md
fs.renameSync("./storage-files/notes.md", "./storage-files/notes-rename.md");

setTimeout(() => {
  // delete alex-delet.jpg file
  fs.unlinkSync("./storage-files/alex-delet.jpg");
}, 4000);
