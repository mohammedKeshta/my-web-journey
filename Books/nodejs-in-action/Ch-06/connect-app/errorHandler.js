function errorHandler(err, req, res) {
    const env = process.env.NODE_ENV || 'development'
    switch (env) {
        case 'development':
            console.error(`Error: ${err.stack}`)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(err))
            break
        default:
            res.send('server error')
    }
}

module.exports = errorHandler
