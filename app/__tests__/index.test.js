const request = require("supertest");
const app = require("./../index");

it("Check if user can hit index route", async () => {
  await request(app).get("/").send().expect(200);
});
// describe("Check if user can hit index route", ()=>{
//     test()
// })
