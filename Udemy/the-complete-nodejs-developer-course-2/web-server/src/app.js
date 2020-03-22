const express = require('express')
const { PORT } = require('../config')
const app = express()

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.get('/weather', (req, res) => {
    res.send('weather Page')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(3000, () => {
    console.log(`server is running at port: ${PORT}`)
})
