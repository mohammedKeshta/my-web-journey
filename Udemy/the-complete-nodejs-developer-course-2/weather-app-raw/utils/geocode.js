const { MAP_BOX_API_URL, MAP_BOX_ACCESS_TOKEN } = require('../config')
const handlingError = require('./errorHandler')
const axios = require('axios')

async function getGeoCodeLocation(query) {
    try {
        if (!!query) {
            const response = await axios.get(
                `${MAP_BOX_API_URL}${encodeURIComponent(query)}.json?limit=1&access_token=${MAP_BOX_ACCESS_TOKEN}`
            )
            const { features } = response.data
            if (features && features.length === 0) {
                return console.log('u entered an invalid location, try another longitude,latitude')
            }
            let data = {
                latitude: features[0].center[0],
                longitude: features[0].center[1],
                location: features[0].place_name,
            }
            console.log(`LATITUDE:${data.latitude} and LONGITUDE:${data.longitude} for location: ${data.location}`)
            return data
        }
        console.log('plz enter a valid location')
        return null
    } catch (error) {
        handlingError(error, 'unable to connect to map-box services')
    }
}

module.exports = getGeoCodeLocation
