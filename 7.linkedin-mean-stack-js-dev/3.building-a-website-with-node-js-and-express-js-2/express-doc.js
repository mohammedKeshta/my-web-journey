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
/*
 * Route path: /users/:userId/books/:bookId
 * Request URL: http://localhost:3000/users/34/books/8989
 * req.params: { "userId": "34", "bookId": "8989" }
 * */
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(JSON.stringify(req.params, null, 2));
});

const getBook = (req, res) => {
  res.send("Get a random book");
};
const postBook = (req, res) => {
  res.send("Post a random book");
};
const putBook = (req, res) => {
  res.send("Put a random book");
};
app
  .route("/book")
  .get(getBook)
  .post(postBook)
  .put(putBook);

app.listen(PORT_NUMBER, () =>
  console.log(`Example app listening on port ${PORT_NUMBER}!`)
);
