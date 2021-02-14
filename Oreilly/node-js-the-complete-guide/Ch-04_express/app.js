const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.ejs'));
});

app.listen(8080, () => {
  console.log(`Server is running at port ${8080}`);
});
