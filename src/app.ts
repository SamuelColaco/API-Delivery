
import express from "express"
import "express-async-errors"

import { ErrorHandling  } from "./middleware/ErrorHandling"
import { userRoutes } from "./routes/user"
import { deliveryRoutes } from "./routes/delivery"
import { loginUserRoute } from "./routes/loginUser"


const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(deliveryRoutes)
app.use(loginUserRoute)

app.use(ErrorHandling)


export { app }