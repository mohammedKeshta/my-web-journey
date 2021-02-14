const express = require("express")
const router = express.Router()
const Entry = require("../models/entry")

router.get("/", (req, res, next) => {
  Entry.getRange(0, -1, (err, entries) => {
    if (err) return next(err)
    res.render("index", {
      title: "Entries",
      entries,
    })
  })
})
router.get("/post", (req, res, next) => {
  res.render("post", {
    title: "Post",
  })
})

router.post("/post", (req, res, next) => {
  const { title, body } = req.body.entry
  const user = res.locals.user
  const username = user ? user.username : 'Elzanaty'
  const entry = new Entry({
    username,
    title,
    body,
  })
  entry.save((err) => {
    if (err) return next(err)
    res.redirect("/")
  })
})

module.exports = router
