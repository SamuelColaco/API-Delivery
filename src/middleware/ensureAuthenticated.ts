
import {Request, Response, NextFunction} from "express"
import { AppError } from "../utils/AppError"

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authHeader = req.headers.authorization?.slice(7)

    if(!authHeader){
        throw new AppError("JWT token não dito")
    }

    return next()
}