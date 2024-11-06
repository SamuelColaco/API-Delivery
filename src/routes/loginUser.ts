
import { Router } from "express"
import { LoginUserController } from "../controllers/LoginUserController"
import { ensureAuthenticated } from "../middleware/ensureAuthenticated"

const loginUserRoute = Router()
const loginUserController = new LoginUserController()

loginUserRoute.get("/user/login", ensureAuthenticated,  loginUserController.index)

export { loginUserRoute }