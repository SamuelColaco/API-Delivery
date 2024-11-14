

import request from "supertest"
import { app } from "../app"

describe("DeliveryLogsController", () => {
    it("List all deliveriesLogs", async () => {

        const authenticated = await request(app).post("/user/login").send({
            email: "elunue@gmail.com",
	        password: "123eaea"
        })

        const token =    authenticated.body.token

        const response =   await request(app).get("/log").set("Authorization", `Bearer ${token}`)

        expect(response.body).toBe(response.body)
        expect(response.status).toBe(200)
    }),
    it("Create deiveryLog",  async () => {

        const authenticated = await request(app).post("/user/login").send({
            email: "elunue@gmail.com",
	        password: "123eaea"
        })

        const token =    authenticated.body.token

        const response = await request(app).post("/log/fb9ce093-bb37-4db0-8395-8f0f1c962692").send({
            description: "Pedido chegou"
        }).set("Authorization", `Bearer ${token}`)

        expect(response.status).toBe(201)
        
    })
})