
import { Router } from "express"
import { UserControllers } from "../controllers/UserControllers"

const routes = Router()
const userControllers = new UserControllers()

routes.get("/", userControllers.index)


export { routes }