/* Empty JS object to act as endpoint for all routes */
projectData = {}

/* Express to run server and routes */
const express = require('express')

/* Start up an instance of app */
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')
const cors = require('cors')

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/* Initialize the main project folder*/
app.use(express.static('website'))

const PORT = 3000
/* Spin up the server*/
app.listen(PORT, () => {
  // console.log(server);
  console.log(`running on localhost: ${PORT}`)
})
