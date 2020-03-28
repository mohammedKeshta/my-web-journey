const path = require('path'),
    express = require('express'),
    //Loads the handlebars module
    hbs = require('express-handlebars')
const { PORT } = require('../config/config')

// Initialize Express app
const app = express()
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs')
//Sets handlebars configurations
app.engine(
    'hbs',
    hbs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, '../views/layouts'),
        partialsDir: path.join(__dirname, '../views/partials'),
        defaultLayout: 'main',
    })
)

app.enable('view cache')

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    // Serves the body of the page aka "index.handlebars" to the container //aka "main.handlebars"
    res.render('index', { template: 'Home' })
})

app.get('/about', (req, res) => {
    res.render('about', { template: 'About' })
})

app.get('/help', (req, res) => {
    res.render('help', { template: 'About', helpText: 'This is your help text' })
})

app.get('/weather', (req, res) => {
    res.json({
        name: 'Mohammed',
        age: 26,
    })
})

// Handle 404
app.use((req, res) => {
    res.status(404).render('404', { template: '404: File Not Found', url: req.url.slice(1) })
})

// Handle 500
app.use((error, req, res) => {
    res.status(500).render('500', {
        template: '500: Internal Server Error',
        errorMsg: error.message,
        url: req.url.slice(1),
    })
})

app.listen(3000, () => {
    console.log(`server is running at port: ${PORT}`)
})
