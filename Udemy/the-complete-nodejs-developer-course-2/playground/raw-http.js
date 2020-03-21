console.log('Raw Http Request')

const https = require('https')
const URL = 'https://jsonplaceholder.typicode.com/todos'

const req = https.request(URL, res => {
    if (res.statusCode === 200) {
        res.on('data', buffer => {
            console.log(buffer + '')
        })
    }
})

req.on('error', error => {
    console.log(`error: ${error.message}`)
})
req.end()
