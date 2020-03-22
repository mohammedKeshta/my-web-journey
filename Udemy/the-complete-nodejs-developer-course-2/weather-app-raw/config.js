const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    DARK_SKY_API_URL: process.env.DARK_SKY_API_URL,
    DARK_SKY_SECRET_KEY: process.env.DARK_SKY_SECRET_KEY,
    MAP_BOX_API_URL: process.env.MAP_BOX_API_URL,
    MAP_BOX_ACCESS_TOKEN: process.env.MAP_BOX_ACCESS_TOKEN,
}
