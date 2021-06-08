import express, { Application, Response, Request } from 'express'

const app: Application = express()

const address: string = '0.0.0.0:3000'

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello, world'
  })
})

app.listen(3000, () => {
  console.log(`starting app on  ${address}`)
})
