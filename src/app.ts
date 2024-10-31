
import express from "express"
import "express-async-errors"

import { ErrorHandling  } from "./middleware/ErrorHandling"
import { routes } from "./routes/user"


const app = express()

app.use(express.json())
app.use(routes)


app.use(ErrorHandling)


export { app }