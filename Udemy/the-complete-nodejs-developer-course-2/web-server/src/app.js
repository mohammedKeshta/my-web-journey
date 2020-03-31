const path = require('path'),
    express = require('express'),
    //Loads the handlebars module
    hbs = require('express-handlebars')
const { PORT } = require('../config/config')
const geocode = require('./utils/geocode')
const getWeather = require('./utils/forecast')

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
    const { address } = req.query
    if (!(req.query && address)) {
        return res.json({
            error: 'Please provide a correct address',
        })
    }

    geocode(address)
        .then(({ error, data }) => {
            if (!error) {
                const { latitude, longitude, location } = data
                getWeather({ latitude, longitude })
                    .then((response) => {
                        if (!response.error) {
                            const { daily, currently } = response.data

                            let data = {
                                forecast: `${daily.summary}, it's currently ${currently.temperature} degree out. There is a ${currently.precipProbability} chance to rain.`,
                                location: location,
                                address: address,
                            }
                            return res
                                .status(200)
                                .json({
                                    status: 'success',
                                    message: 'Retrieved All Data successfully',
                                    data,
                                })
                                .end()
                        } else {
                            return res
                                .status(400)
                                .json({
                                    status: 'error',
                                    message: response.error,
                                })
                                .end()
                        }
                    })
                    .catch((error) => {
                        return res
                            .status(400)
                            .json({
                                status: 'error',
                                message: error.message,
                            })
                            .end()
                    })
            } else {
                return res
                  .status(200)
                  .json({
                    status: 'error',
                    message:error,
                  })
                  .end()
            }
        })
        .catch((error) => {
            return res
                .status(400)
                .json({
                    status: 'error',
                    message: error.message,
                })
                .end()
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
