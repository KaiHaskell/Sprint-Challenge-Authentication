const request = require("supertest");
const server = require("../api/server");

// Random generated userdata specifically for testing

let randomNum = Math.random() * 4000;

const testUser = {
  username: `test${randomNum}`,
  password: `LambdaSchool`
};

const user = {
  username: "test1452.318791518997",
  password: "LambdaSchool"
};

describe("GET Jokes", () => {
  it("Should return with a status of 201", async function() {
    //creates a new user using a random number generator
    await request(server)
      .post("/api/auth/register")
      .send(testUser)
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it("returns a token after login", function() {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .then(res => {
        expect(res.body).toHaveProperty("token");
      });
  });
  it("should return with a status of 200 when getting a joke", function() {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .then(res => {
        const token = res.body.token;
        // checks if the user is able to access /api/jokes with a token
        return request(server)
          .get("/api/jokes")
          .set("authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
  });
});
