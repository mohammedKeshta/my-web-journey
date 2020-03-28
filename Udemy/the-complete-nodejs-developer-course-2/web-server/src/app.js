const path = require('path')
const express = require('express')
const { PORT } = require('../config/config')
const app = express()

const PUBLIC_PATH = path.join(__dirname, '../public')
app.use(express.static(PUBLIC_PATH))

app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/weather', (req, res) => {
    res.json({
        name: 'Mohammed',
        age: 26,
    })
})

app.listen(3000, () => {
    console.log(`server is running at port: ${PORT}`)
})
