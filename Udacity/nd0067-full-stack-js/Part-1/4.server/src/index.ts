import express from "express"
import morgan from "morgan"

import routes from "./routes"

import "./modules/file"
import "./modules/csv"

// create an instance server
const app = express()
const port = 3000

// HTTP request logger middleware
app.use(morgan(":method :url :status :response-time ms - :res[content-length]"))

app.use("/api", routes)

// start express server
app.listen(port, () => {
  console.log("server is starting")
})
