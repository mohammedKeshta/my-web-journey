const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("x-server-date", new Date());
  next();
});

app.get("/", (req, res) => res.send(`Hello, I am a web-server`));
app.get("/time", (req, res) =>
  res.send(`Time now is ${new Date().toString()}`)
);
app.get("/hello", (req, res) => {
  if (!req.query.name) {
    return res.status(400).end();
  }
  res.send(`Hello, ${req.query.name}`);
});

app.get("/user/:name", (req, res) => {
  res.send(`Userprofile of ${req.params.name}`);
});
app.listen(8080);
