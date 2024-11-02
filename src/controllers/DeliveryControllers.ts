
import { Request, Response } from "express"
import { prisma } from "../../prisma/prisma"
import z from "zod"
import { AppError } from "../utils/AppError"

export class DeliveryController{
    async index(req: Request, res: Response){

        const Delivery = await prisma.delivery.findMany()

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
}