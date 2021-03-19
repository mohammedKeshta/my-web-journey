require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const db = require('./db/index')
const middlewares = require('./middlewares/index')
const logsRoute = require('./api/logs')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log("we're connected!")
})

const app = express()
app.use(morgan('combined'))
app.use(helmet())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)
app.use(express.json())

app.use('/api/logs', logsRoute)

app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  })
})
// handle not found route
app.use(middlewares.notFound)
// handle errors
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1337

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
