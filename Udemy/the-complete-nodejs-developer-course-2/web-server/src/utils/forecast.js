const { DARK_SKY_API_URL, DARK_SKY_SECRET_KEY } = require('../../config/config')
const axios = require('axios')

async function getWeather({ latitude, longitude }) {
    try {
        const response = await axios.get(
            `${DARK_SKY_API_URL}/forecast/${DARK_SKY_SECRET_KEY}/${latitude}, ${longitude}?units=si`
        )
        const { currently, daily } = response.data
        return {
            data: {
                daily,
                currently,
            },
        }
    } catch (error) {
        return {
            error: 'unable to connect to weather services',
        }
    }
}

module.exports = getWeather
