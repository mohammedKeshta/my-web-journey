const createError = require("http-errors");
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

// Catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));
// Error Handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3000);
module.exports = app;
