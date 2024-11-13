
import request from "supertest"
import { app } from "../app"

describe("DeliveryController", () => {

    it("List all deliveries", async () => {

        const authenticated = await request(app).post("/user/login").send({
            email: "elunue@gmail.com",
	        password: "123eaea"
        })

        const token = authenticated.body.token

        const response = await request(app).get("/delivery").set("Authorization", `Bearer ${token}`)

        expect(response.status).toBe(200)
        expect(response.body).toBe(response.body)
    }),

    it("Create new delivery", async () => {

        const authenticated = await request(app).post("/user/login").send({
            email: "elunue@gmail.com",
	        password: "123eaea"
        })

        const token = authenticated.body.token


        const response = await request(app).post("/delivery/f74bb138-d62b-4649-889a-d3b58b1fcd50").set("Authorization", `Bearer ${token}`).send({
            description: "Carne a molho de champion",
            status: "processing"
        })
        
        expect(response.status).toBe(201)
    })
})