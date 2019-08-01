const express = require("express");

const router = express.Router();

const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Hello Home");
});
router.use("/speakers", speakersRoute);
router.use("/feedback", feedbackRoute);

module.exports = router;
