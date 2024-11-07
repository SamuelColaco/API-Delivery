
import { Request, Response } from "express"
import { prisma } from "../../prisma/prisma"
import z from "zod"
import { AppError } from "../utils/AppError"

export class DeliveryController{
    async index(req: Request, res: Response){

        const Delivery = await prisma.delivery.findMany({include: { user: { select:{name: true, email: true }}}})

        res.status(200).json(Delivery.length > 0 ? Delivery : "Não tinha delivery")
    }

    async create(req: Request, res: Response){
        const { description, status } = req.body
        const { userId } = req.params


        const bodySchema = z.object({
            description: z.string(),
            status: z.string().trim()
        })


        bodySchema.parse(req.body)

        const userExist = await prisma.user.findUnique({where: { id: userId  }})
        if(userExist){
            await prisma.delivery.create({data: {  description, status, userId: userId }})
        }
        else{
            throw new AppError("Usuário não encontrado")
        }
        

        res.status(201).json()
    }

    async update(req: Request, res: Response){

        const { status } = req.body

        const { id } = req.params

        const bodySchema = z.object({
            status: z.enum([ "processing", "shipped", "delivered"])
        })

        const paramSchema = z.object({
            id: z.string().uuid()
        })

        paramSchema.parse(req.params)
        
        bodySchema.parse(req.body)

        await prisma.delivery.update({ where: { id }, data: { status }})

        res.status(200).json()
    }
}