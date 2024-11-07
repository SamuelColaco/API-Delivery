
import {  Router } from "express"
import { DeliveryLogsController } from "../controllers/DeliveryLogsController"
import { ensureAuthenticated } from "../middleware/ensureAuthenticated"
import { verifyUserAuthorization } from "../middleware/verifyUserAuthorization"

const deliveryLogsRoute = Router()
const deliveryLogsController = new DeliveryLogsController()

deliveryLogsRoute.get("/log", ensureAuthenticated, verifyUserAuthorization(["customer", "sale"]), deliveryLogsController.index)
deliveryLogsRoute.post("/log/:id", ensureAuthenticated, verifyUserAuthorization(["sale"]), deliveryLogsController.create)

export { deliveryLogsRoute }