import request from "supertest";
import { app } from "../app";

it("returns a 404 on invalid endpoint", async () => {
  return request(app).get("/skjdsk").send().expect(404);
});
