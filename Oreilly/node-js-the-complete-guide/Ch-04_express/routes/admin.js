const express = require("express");
const path = require("path");
const root = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(root, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.status(302).redirect("/");
});

module.exports = router;
