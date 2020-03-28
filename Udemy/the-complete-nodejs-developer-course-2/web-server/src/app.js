const path = require('path')
const express = require('express')
const { PORT } = require('../config/config')
const app = express()

const PUBLIC_PATH = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(PUBLIC_PATH))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Mohammed Elzanaty',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Help',
        name: 'Mohammed Elzanaty',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Mohammed Elzanaty',
    })
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
