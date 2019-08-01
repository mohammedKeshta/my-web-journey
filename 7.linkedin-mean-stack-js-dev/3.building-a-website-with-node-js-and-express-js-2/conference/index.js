const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

if (app.get("env") === "development") app.locals.pretty = true;

app.use(express.static(path.join(__dirname, "public")));
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/", (req, res) => {
  res.render("index", { title: "Conference" });
});
app.use("/", routes);
app.listen(3000);
module.exports = app;
