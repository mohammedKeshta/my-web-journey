const express = require("express");
const path = require('path')
const root = require('../util/path')

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(root, 'views', 'shop.html'));
});

module.exports = router;
