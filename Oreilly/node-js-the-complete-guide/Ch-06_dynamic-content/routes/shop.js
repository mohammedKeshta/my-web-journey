const express = require("express");
const root = require('../util/path')

const router = express.Router();
const products = require('../routes/admin').products

router.get("/", (req, res) => {
  res.status(200).render('pages/shop', {
    pageTitle: 'Products',
    products
  });
});

module.exports = router;
