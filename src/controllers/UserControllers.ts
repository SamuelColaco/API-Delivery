
import { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/AppError"

export class UserControllers{

    async index(req: Request, res: Response){
        throw new AppError("Erro de pegar")
    }
}