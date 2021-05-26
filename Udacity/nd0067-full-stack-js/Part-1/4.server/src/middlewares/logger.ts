import express from "express"

const logger = (req: express.Request, res: express.Response, next: Function): void => {
  console.log(`${req.method}: this url is visited ${req.headers.host}${req.baseUrl}`)
  next()
}

export default logger
