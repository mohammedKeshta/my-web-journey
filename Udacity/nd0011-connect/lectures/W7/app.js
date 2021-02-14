// server code
const express = require("express");

const app = express();

const todos = []; // DataBase

app.use(express.static("public"));

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/add", (req, res) => {
  // get name todo
  // push todos array
  const todo = req.body;
  console.log(todo);
  todos.push(todo);
  res.send("success");
});

app.listen(3000, () => {
  console.log("Server is running");
});
