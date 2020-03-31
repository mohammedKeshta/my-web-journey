const { MAP_BOX_API_URL, MAP_BOX_ACCESS_TOKEN } = require('../../config/config')
const axios = require('axios')

async function geocode(query) {
    try {
        if (!!query) {
            const response = await axios.get(
                `${MAP_BOX_API_URL}${encodeURIComponent(query)}.json?limit=1&access_token=${MAP_BOX_ACCESS_TOKEN}`
            )
            const { features } = response.data
            if (features && features.length === 0) {
                return {
                    error: 'u entered an invalid location, try another longitude,latitude',
                }
            }
            return {
                data: {
                    latitude: features[0].center[0],
                    longitude: features[0].center[1],
                    location: features[0].place_name,
                },
            }
        }
        return {
            error: 'please enter a valid location',
        }
    } catch (error) {
        return {
            error: 'please enter a valid location',
        }
    }
}

module.exports = geocode
