const express = require('express')
const volleyball = require('volleyball')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')

dotenv.config()

const auth = require('./auth/auth.routes')
const middleware = require('./auth/auth.middlewares')

const app = express()

app.use(volleyball)
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use(middleware.checkTokenSetUser)

app.use('/auth', auth)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
    user: req.user,
  })
})

app.get('/notes', middleware.isLoggedIn, (req, res) => {
  res.json({
    message: 'Authorized 🔓',
  })
})

function notFound(req, res, next) {
  res.status(404)
  const error = new Error('Not Found - ' + req.originalUrl)
  next(error)
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500)
  res.json({
    message: err.message,
    stack: err.stack,
  })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
