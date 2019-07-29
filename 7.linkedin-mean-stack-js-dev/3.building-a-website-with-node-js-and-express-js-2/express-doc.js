const express = require("express");
const path = require("path");
const app = express();
const PORT_NUMBER = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.all("/secret", (req, res, next) => {
  res.send("it's Secret");
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

app.get("/", (req, res) => {
  res.send("root");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/random.text", (req, res) => {
  res.send("/random.text");
});

// This route path will match acd and abcd.
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});
// This route path will match abcd, abbcd, abbbcd, and so on.
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});
// This route path will match anything with an “a” in it.
app.get(/a/, (req, res) => {
  res.send("/a/");
});

app.listen(PORT_NUMBER, () =>
  console.log(`Example app listening on port ${PORT_NUMBER}!`)
);
