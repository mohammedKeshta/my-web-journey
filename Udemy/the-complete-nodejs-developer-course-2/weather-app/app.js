const { endpoint, apiKey } = require('./config')
const axios = require('axios')

axios
    .get(`${endpoint}/forecast/${apiKey}/28.2567928,33.6287564`)
    .then(function(response) {
        // handle success
        const { temperature, precipProbability } = response.data.currently
        console.log(`it's currently ${temperature} degree out. There is a ${precipProbability} chance to rain.`)
    })
    .catch(function(error) {
        // handle error and show message
        console.log(`error: ${error.message}`)
    })
