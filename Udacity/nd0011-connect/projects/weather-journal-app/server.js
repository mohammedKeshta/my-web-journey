// Setup empty JS object to act as endpoint for all routes
let projectData = {}

// Require Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'))

// route to get all the data
app.get('/all', (req, res) => {
  res.json({
    status: 'success',
    data: projectData,
    message: 'Data Retrieved Successfully',
  })
})

// route to post / save data to our project object
app.post('/add', (req, res) => {
  projectData = { ...req.body }
  res.json({
    status: 'success',
    message: 'Data Saved Successfully',
  })
})

// Setup Server
app.listen(3000, () => `Server is running at port 3000`)
