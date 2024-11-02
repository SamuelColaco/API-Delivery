
import {  Router } from "express"
import { DeliveryController } from "../controllers/DeliveryControllers"

const deliveryRoutes = Router()
const deliveryController = new DeliveryController()

deliveryRoutes.get("/delivery", deliveryController.index)
deliveryRoutes.post("/delivery/:userId", deliveryController.create)

export { deliveryRoutes }