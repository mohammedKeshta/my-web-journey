import dotenv from 'dotenv'

dotenv.config()

const { PGHOST, PGPORT, PGDB, PGUSER, PGPASSWORD } = process.env

export default {
  port: process.env.PORT,
  host: PGHOST,
  dbPort: PGPORT,
  database: PGDB,
  user: PGUSER,
  password: PGPASSWORD
}
