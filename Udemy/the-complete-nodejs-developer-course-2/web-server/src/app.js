const express = require('express')
const { PORT } = require('../config/config')
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/weather', (req, res) => {
    res.json({
        name : 'Mohammed',
        age: 26
    })
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.listen(3000, () => {
    console.log(`server is running at port: ${PORT}`)
})
