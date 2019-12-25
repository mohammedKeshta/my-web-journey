import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/item', router)
const route = express.Router()

// Logging Middleware
const log = (req, res, next) => {
  console.log(`Logging Middleware`)
  next()
}

route.get('/me', (req, res) => {
  res.json({ data: 'me' })
})

app.use('/api', route)

// GET
app.get('/', log, (req, res) => {
  res.json({ message: 'All Messages' })
})
// PUT
app.put('/', (req, res) => {
  res.json({ message: 'Message Updated' })
})
// POST
app.post('/', (req, res) => {
  const MESSAGE = req.body.message || 'Message Created'
  res.json({ message: MESSAGE })
})
// DELETE
app.delete('/', (req, res) => {
  res.json({ message: 'Message Deleted' })
})

export const start = () => {
  app.listen(3000, () => console.log(`server is running at port 3000`))
}
