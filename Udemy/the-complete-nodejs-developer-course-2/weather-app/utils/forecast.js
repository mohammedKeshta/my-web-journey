const { DARK_SKY_API_URL, DARK_SKY_SECRET_KEY } = require('../config')
const handlingError = require('./errorHandler')
const axios = require('axios')

async function getWeather({ latitude, longitude }) {
    try {
        const response = await axios.get(
            `${DARK_SKY_API_URL}/forecast/${DARK_SKY_SECRET_KEY}/${latitude}, ${longitude}?units=si`
        )
        const { currently, daily } = response.data
        let msg = `${daily.summary}, it's currently ${currently.temperature} degree out. There is a ${currently.precipProbability} chance to rain.`
        console.log(msg)
    } catch (error) {
        handlingError(error, 'unable to connect to weather services')
    }
}

module.exports = getWeather
