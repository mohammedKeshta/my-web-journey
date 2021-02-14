// /* Empty JS object to act as endpoint for all routes */
// projectData = {}
//
// /* Express to run server and routes */
// const express = require('express')
//
// /* Start up an instance of app */
// const app = express()
//
// /* Dependencies */
// const bodyParser = require('body-parser')
// /* Middleware*/
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// const cors = require('cors')
// app.use(cors())
//
// /* Initialize the main project folder*/
// app.use(express.static('website'))
//
// const port = 3000
// /* Spin up the server*/
// const server = app.listen(port, listening)
//
// function listening() {
//   // console.log(server);
//   console.log(`running on localhost: ${port}`)
// }
//
// // GET route
// app.get('/all', sendData)
//
// function sendData(request, response) {
//   response.send(projectData)
// }
//
// // POST route
// app.post('/add', callBack)
//
// function callBack(req, res) {
//   res.send('POST received')
// }
//
// // POST an animal
// const data = []
//
// app.post('/animal', addAnimal)
//
// function addAnimal(req, res) {
//   data.push(req.body)
// }
//
// /*
// Your API key for mohammedelzanaty129@gmail.com is:
//
// aYpSwdsuYRyjons3RyTMgIg9N9qBUCPuv1JA8kl2
// You can start using this key to make web service requests.
// Simply pass your key in the URL when making a web request. Here's an example:
//
// https://api.nasa.gov/planetary/apod?api_key=aYpSwdsuYRyjons3RyTMgIg9N9qBUCPuv1JA8kl2
// For additional support, please contact us. When contacting us,
// please tell us what API
// you're accessing and provide the following account details so we can quickly find you:
//
// Account Email: mohammedelzanaty129@gmail.com
// Account ID: 8e2f4aab-9ac3-4e76-8faa-7630269af1c3
//
//  */
