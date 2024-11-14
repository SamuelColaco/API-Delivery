
import request from "supertest"

import { app } from "../app"



describe("UserController", () => {
    it("List all users" , async () => {
        const response = await request(app).get("/")

        expect(response.status).toBe(200)
        expect(response.body).toBe(response.body)
    }),

    it("Create user",  async() => {
        const response = await request(app).post("/user").send({
            name: "Eluenunu",
            email: "elueaea@gmail.com",
            password: "123eaea",
            role: "customer"
        })
        
        expect(response.status).toBe(201)
    }),

    it("Update user", async () => {

        const response = await request(app).put("/user/4297c497-ea06-4140-ab43-3dfd3db329a1").send({
            "name": "Elunu"
        })

        expect(response.status).toBe(200)
    })
})