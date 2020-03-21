const { MAP_BOX_API_URL, MAP_BOX_ACCESS_TOKEN, DARK_SKY_API_URL, DARK_SKY_SECRET_KEY } = require('./config')
const axios = require('axios')

async function getWeather(lattude, lngtude) {
    try {
        const response = await axios.get(`${DARK_SKY_API_URL}/forecast/${DARK_SKY_SECRET_KEY}/${lattude}, ${lngtude}`)
        const { currently, daily } = response.data
        console.log(
            `${daily.summary}, it's currently ${currently.temperature} degree out. There is a ${currently.precipProbability} chance to rain.`
        )
    } catch (error) {
        // handle error and show message
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const { data, status } = error.response
            console.log(`Server reply with error: ${data.error} with status: ${status}`)
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log(`unable to connect to weather services, error: ${error.message}`)
        }
    }
}

async function getGeoCodeLocation(query) {
    try {
        const response = await axios.get(`${MAP_BOX_API_URL}${query}.json?limit=1&access_token=${MAP_BOX_ACCESS_TOKEN}`)
        const { features } = response.data
        if (features && features.length !== 0) {
            const LATITUDE = features[0].center[0]
            const LONGITUDE = features[0].center[1]
            console.log(`LATITUDE:${LATITUDE} and LONGITUDE:${LONGITUDE} for ${query}`)
            await getWeather(LATITUDE, LONGITUDE)
        } else {
            console.log('try another longitude,latitude')
        }
    } catch (error) {
        // handle error and show message
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const { data, status } = error.response
            console.log(`Server reply with error: ${data.error} with status: ${status}`)
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log(`unable to connect to map-box services, error: ${error.message}`)
        }
    }
}

getGeoCodeLocation('Cairo, Egpyt')
