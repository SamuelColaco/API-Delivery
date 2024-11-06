
import {  Router } from "express"
import { DeliveryController } from "../controllers/DeliveryControllers"
import { ensureAuthenticated } from "../middleware/ensureAuthenticated"
import { verifyUserAuthorization } from "../middleware/verifyUserAuthorization"

const deliveryRoutes = Router()
const deliveryController = new DeliveryController()

deliveryRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))

deliveryRoutes.get("/delivery",  deliveryController.index)
deliveryRoutes.post("/delivery/:userId", deliveryController.create)

export { deliveryRoutes }