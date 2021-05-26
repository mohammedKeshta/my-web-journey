import express from "express"
import teachersRoutes from "./api/teachers"
import studentsRoutes from "./api/students"

const routes = express.Router()

routes.use("/teachers", teachersRoutes)
routes.use("/students", studentsRoutes)

export default routes
