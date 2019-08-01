const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.listen(3000);
module.exports = app;
