import express from "express"
import logger from "../../middlewares/logger"

const routes = express.Router()

routes.get("/", logger, (req, res) => {
  res.json({
    status: "Success",
    message: "Hello from main api students route",
  })
})

export default routes
