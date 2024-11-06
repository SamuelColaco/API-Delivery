
import { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/AppError"

export function verifyUserAuthorization(role: String[]){
    return( req: Request, res: Response, next: NextFunction ) => {

        if(!req.user){ 
            throw new AppError("Sem autorização para isso")
        }

        if(!role.includes(req.user.role)){
            throw new AppError("Seu cargo não tem autorização")
        }

        return next()
    }


}



