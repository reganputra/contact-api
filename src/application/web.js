import express from 'express'
import {publicRouter} from "../routes/public_api.js";
import {errorMiddleware} from "../middleware/error_middleware.js";

export const app = express()


app.use(express.json())
app.use(publicRouter)
app.use(errorMiddleware)