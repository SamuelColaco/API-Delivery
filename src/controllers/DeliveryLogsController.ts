
import { Request, Response } from "express"
import { prisma } from "../prisma"
import z from "zod"
import { AppError } from "../utils/AppError"

export class DeliveryLogsController{

   async index(req: Request, res: Response){

    const deliveryLog = await prisma.deliveryLog.findMany()

    res.status(200).json(deliveryLog.length > 0 ? deliveryLog : "Não tem logs do delivery")
    
   }

   async create(req: Request, res: Response){

      const { description } = req.body

      const { id } = req.params


      const bodySchema = z.object({
         description: z.string()
      })

      const parseSchema = z.object({
         id: z.string().uuid()
      })
      
      parseSchema.parse(req.params)

      bodySchema.parse(req.body)

      const delivery = await prisma.delivery.findUnique({ where: { id }})

      if(!delivery){
         throw new AppError("Esse delivery não existe")
      }

      if(delivery.description === "delivered"){
         throw new AppError("Esse delivery já foi entregue")
      }

      if(delivery.description === "processing"){
         throw new AppError("O status tem que ser shipped")
      }

      await prisma.deliveryLog.create({ data: { description, deliveryId: id }})

      res.status(201).json()


   }
}