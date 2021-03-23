const monk = require('monk')

let dbUrl = process.env.DB_URL

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL
}

const db = monk(dbUrl)

db.then(() => {
  console.log('Connected correctly to server')
})

module.exports = db
