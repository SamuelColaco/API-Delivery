
import {Request, Response } from "express"
import { prisma } from "../prisma"
import { sign } from "jsonwebtoken"
import { AppError } from "../utils/AppError"
import { authConfig } from "../config/auth"
import { compare } from "bcrypt"
import z from "zod"

export class LoginUserController{

    async create(req: Request, res: Response){

        const { email, password } = req.body


        const bodySchema = z.object({
            email: z.string().email(),
            password: z.string().trim().min(6)
        })

        bodySchema.parse(req.body)

        const user = await prisma.user.findUnique({ where: { email } })

        if(!user){
            throw new AppError("Usuário não existe")
        }
        
        const passwordMatch = await compare(password, user.password)


        if(!passwordMatch){
            throw new AppError("Senha ou E-mail errado")
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ role: user.role ?? "customer" }, secret, {
            expiresIn,
            subject: user?.id
        })

        const { password: hashed, ...userWithoutPassword} = user

        res.status(200).json( { user: userWithoutPassword, token: token } )
    }
}