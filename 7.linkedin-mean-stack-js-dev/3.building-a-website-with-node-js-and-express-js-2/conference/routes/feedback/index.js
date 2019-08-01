const express = require("express");

const router = express.Router();

/* GET home feedback Page. */
router.get("/", function(req, res) {
  res.send("Hello Home feedback");
});
router.post("/", function(req, res) {
  res.send(`Data Sent`);
});

module.exports = router;
