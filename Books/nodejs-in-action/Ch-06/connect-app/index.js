const connect = require('connect')
const logger = require('./logger')
const errorHandler = require('./errorHandler')

const app = connect()

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, world!')
}

app.use(logger(':method :url')).use(hello).use(errorHandler)

app.listen(8080, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Server is running at PORT: 8080`)
})
