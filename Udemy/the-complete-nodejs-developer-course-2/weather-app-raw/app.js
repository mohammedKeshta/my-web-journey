const getGeoCodeLocation = require('./utils/geocode')
const getWeather = require('./utils/forecast')
const handlingError = require('./utils/errorHandler')

const location = process.argv[2]
getGeoCodeLocation(location)
    .then(response => {
        if (response) {
            getWeather(response)
        }
    })
    .catch(error => {
        handlingError(error, 'unable to connect to map-box services')
    })
