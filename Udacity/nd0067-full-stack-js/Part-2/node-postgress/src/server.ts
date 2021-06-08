import express, { Application, Response, Request } from 'express'
import morgan from 'morgan'
import config from './config'
import pool from './database'

const app: Application = express()

const address: string = '0.0.0.0:3000'

app.use(express.json())
app.use(morgan('dev'))

pool
  .connect()
  .then((client) => {
    client
      .query('SELECT * FROM plants')
      .then((res) => {
        console.table(res.rows)
      })
      .catch((err) => {
        console.error(`Error executing query ${err}`)
      })
  })
  .catch((err) => {
    console.error(`Error acquiring client ${err.message}`)
  })

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello, world'
  })
})

app.listen(config.port, () => {
  console.log(`starting app on  ${address}`)
})
