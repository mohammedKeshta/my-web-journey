const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin').router
const shopRoutes = require('./routes/shop')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// set the view engine to ejs
app.set('view engine', 'ejs')

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('pages/404', {
    pageTitle: 'Page Not Found',
  })
})

app.listen(8080, () => {
  console.log(`Server is running at port ${8080}`)
})
