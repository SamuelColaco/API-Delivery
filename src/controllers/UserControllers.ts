
import { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/AppError"
import { prisma } from "../../prisma/prisma"
import { hash } from "bcrypt"
import z from "zod"

export class UserControllers{

    async index(req: Request, res: Response){
        const Users = await prisma.user.findMany()
        
        res.status(200).json(Users.length > 0 ? Users:  "Nada encontrado" ) 
    }

    async create(req: Request, res: Response){
        
        const { name, email, password, role } = req.body
        
        const bodySchema = z.object({
            name: z.string(),
            email: z.string().trim().min(6).email(),
            password: z.string().trim().min(6),
            role: z.string()
        })

        bodySchema.parse(req.body)
        const hashedPassword = await hash(password, 8)

        await prisma.user.create({data: { name, email, password: hashedPassword, role }}) 

        res.status(201).json()
    }

    async update(req: Request, res: Response){
        const { id } = req.params
        const { ...all } = req.body

        await prisma.user.update({where: { id }, data: { ...all}})

        res.status(200).json()
    }

    async delete(req: Request, res: Response){
        const { id } = req.params

        await prisma.user.delete({where: { id }})

        res.status(200).json()
    }
}