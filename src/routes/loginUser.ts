
import { Router } from "express"
import { LoginUserController } from "../controllers/loginUserController"

const loginUserRoute = Router()
const loginUserController = new LoginUserController()

loginUserRoute.get("/user/login", loginUserController.index)

export { loginUserRoute }