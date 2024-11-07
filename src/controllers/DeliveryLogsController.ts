
import { Request, Response } from "express"
import { prisma } from "../../prisma/prisma"

export class DeliveryLogsController{

   async index(req: Request, res: Response){

    const deliveryLog = await prisma.deliveryLog.findMany()

    res.status(200).json(deliveryLog.length > 0 ? deliveryLog : "Não tem logs do delivery")
    
   }
}