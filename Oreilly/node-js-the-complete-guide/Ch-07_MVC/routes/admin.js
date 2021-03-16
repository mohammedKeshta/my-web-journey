const express = require('express')

const router = express.Router()
const products = []

router.get('/add-product', (req, res) => {
  res.status(200).render('pages/add-product', {
    pageTitle: 'Add Products',
  })
})

router.post('/add-product', (req, res) => {
  products.push(req.body)
  res.status(302).redirect('/')
})

module.exports = { router, products }
