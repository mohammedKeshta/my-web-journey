const { endpoint, apiKey } = require('./config')
const axios = require('axios')

axios
    .get(`${endpoint}/forecast/${apiKey}/28.2567928,33.6287564`)
    .then(function(response) {
        // handle success
        console.log(response.data.currently)
    })
    .catch(function(error) {
        // handle error and show message
        console.log(`error: ${error.message}`)
    })
