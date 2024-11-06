
import {Request, Response, NextFunction} from "express"
import { AppError } from "../utils/AppError"
import { verify } from "jsonwebtoken"
import { authConfig } from "../config/auth"

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authHeader = req.headers.authorization?.slice(7)

    if(!authHeader){
        throw new AppError("JWT token não dito")
    }

    verify(authHeader, authConfig.jwt.secret)

    return next()
}