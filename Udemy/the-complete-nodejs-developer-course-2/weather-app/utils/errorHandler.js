const handlingError = (error, customMsg) => {
    // handle error and show message
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { data, status } = error.response
        console.log(`Server reply with error: ${data.error} with status: ${status}`)
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log(`${customMsg}, error: ${error.message}`)
    }
}

module.exports = handlingError
