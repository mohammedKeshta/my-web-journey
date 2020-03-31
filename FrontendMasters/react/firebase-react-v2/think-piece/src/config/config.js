require('dotenv').config()

const config = {
  NODE_ENV: process.env.REACT_APP_NODE_ENV,
  API_KEY: process.env.REACT_APP_API_KEY,
  AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
  DATABASE_URL: process.env.REACT_APP_DATABASE_URL,
  PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
  STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.REACT_APP_MESSAGING_SENDER_ID,
  APP_ID: process.env.REACT_APP_APP_ID,
  MEASUREMENT_ID: process.env.REACT_APP_MEASUREMENT_ID,
}

export default config
