import supertest from "supertest"
import app from "../server"

const request = supertest(app)

describe("Test Server", () => {
  it("should get the api endpoint", async (done) => {
    const response = await request.get("/api")
    expect(response.status).toBe(200)
    done()
  })
})
