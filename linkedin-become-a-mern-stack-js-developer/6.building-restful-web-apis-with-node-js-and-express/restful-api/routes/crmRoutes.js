const express = require("express");
const router = express.Router();

router
  .route("/contact")
  .get((req, res) => {
    res.send("Get Request Successfully ");
  })
  .post((req, res) => {
    res.send("Post Request Successfully");
  });

router
  .route("/contact/:contactId")
  .put((req, res) => {
    res.send("Put Request Successfully ");
  })
  .delete((req, res) => {
    res.send("Delete Request Successfully");
  });

module.exports = router;
