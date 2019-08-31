const express = require("express");
const router = express.Router();

let articles = [];

/* GET */
router.get("/api/articles", (req, res) => {
  res.status(200).send(articles);
});

/* Get Article */
router.get("/api/articles/:name", (req, res) => {
  res.status(200).send(req.params.name);
});

/* add article endpoint*/
router.post("/api/articles", (req, res) => {
  const { articleName, upvote, comment } = req.body;
  articles.push({ articleName, upvote, comment });
  res.status(200).send(req.body);
});

/* up vote endpoint*/
router.post("/api/articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;
  res.status(200).send(articleName);
});

/* add comment endpoint*/
router.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  res
    .status(200)
    .send(`The ${articleName} for ${username} add comment ${text}`);
});

module.exports = router;
