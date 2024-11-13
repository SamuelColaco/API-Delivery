
import express from "express"
import "express-async-errors"

import { ErrorHandling  } from "./middleware/ErrorHandling"
import { userRoutes } from "./routes/user"
import { deliveryRoutes } from "./routes/delivery"
import { loginUserRoute } from "./routes/loginUser"
import { deliveryLogsRoute } from "./routes/deliveryLogs"


const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(loginUserRoute)
app.use(deliveryLogsRoute)
app.use(deliveryRoutes)

app.use(ErrorHandling)


export { app }
