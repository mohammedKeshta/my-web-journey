const db = require('./../db/connection')

const users = db.get('users')
users.createIndex('email', { unique: true })

module.exports = users
