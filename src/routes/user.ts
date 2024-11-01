
import { Router } from "express"
import { UserControllers } from "../controllers/UserControllers"

const userRoutes = Router()
const userControllers = new UserControllers()

userRoutes.get("/", userControllers.index)
userRoutes.post("/user", userControllers.create)


export { userRoutes }