
import express from "express"
import "express-async-errors"

import { ErrorHandling  } from "./middleware/ErrorHandling"
import { userRoutes } from "./routes/user"


const app = express()

app.use(express.json())
app.use(userRoutes)


app.use(ErrorHandling)


export { app }