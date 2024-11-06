
import { Router } from "express"
import { LoginUserController } from "../controllers/LoginUserController"

const loginUserRoute = Router()
const loginUserController = new LoginUserController()

loginUserRoute.post("/user/login", loginUserController.create)

export { loginUserRoute }