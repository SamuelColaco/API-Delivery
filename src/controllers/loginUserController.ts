
import {Request, Response } from "express"
import { prisma } from "../../prisma/prisma"
import { sign } from "jsonwebtoken"
import { AppError } from "../utils/AppError"
import { authConfig } from "../config/auth"

export class LoginUserController{

    async index(req: Request, res: Response){

        const {email, password } = req.body

        const user = await prisma.user.findUnique({where: { email }})

        if(user?.password !== password){
            throw new AppError("Senha ou E-mail errado")
        }

        const { secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret, {
            expiresIn,
            subject: user?.id
        })

        res.status(200).json( { user: user, token: token} )
    }
}