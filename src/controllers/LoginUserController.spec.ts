
import request from "supertest"
import { app } from "../app"

describe("LoginUserController", () => {
    it("Create token and login user", async () => {

        const response  = await request(app).post("/user/login").send({
           	email: "elunue@gmail.com",
	        password: "123eaea"
        })

        expect(response.status).toBe(200)
        expect(response.body.user.email).toBe("elunue@gmail.com")
    })
})