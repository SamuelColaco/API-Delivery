
import { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/AppError"

export class UserControllers{

    async index(req: Request, res: Response){
        
        res.status(200).json()
    }

    async create(req: Request, res: Response){
        
        res.status(201).json()
    }
}