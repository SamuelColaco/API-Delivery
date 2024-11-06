
import {Request, Response, NextFunction} from "express"
import { AppError } from "../utils/AppError"
import { verify } from "jsonwebtoken"
import { authConfig } from "../config/auth"

interface TokenPayload{
    sub: string,
    role: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authHeader = req.headers.authorization?.slice(7)

    if(!authHeader){
        throw new AppError("JWT token não dito")
    }

    const { role, sub: user_id} = verify(authHeader, authConfig.jwt.secret) as TokenPayload

    req.user = {
        id: user_id,
        role
    }

    return next()
}