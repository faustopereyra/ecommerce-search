import request from "supertest";
import { app } from "../../app";

describe("Search items endpoint", () => {
  it("returns a 200 on successful search fetching", async () => {
    return request(app).get("/api/items/").send().expect(200);
  });
  it("returns an array of 4 items", async () => {
    const res = await request(app).get("/api/items/").send();
    expect(res.body.items.length).toBe(4);
  });
  it("returns Fausto Pereyra as author", async () => {
    const res = await request(app).get("/api/items/").send();
    expect(res.body.author.name).toBe("Fausto");
    expect(res.body.author.lastname).toBe("Pereyra");
  });
});

describe("Item detail endpoint", () => {
  it("returns a 200 on successful item id fetching", async () => {
    return request(app).get("/api/items/MLA899935496").send().expect(200);
  });

  it("returns a 404 on invalid id", async () => {
    return request(app).get("/api/items/invalid_id").send().expect(404);
  });
  it("returns Fausto Pereyra as author", async () => {
    const res = await request(app).get("/api/items/MLA899935496").send();
    expect(res.body.author.name).toBe("Fausto");
    expect(res.body.author.lastname).toBe("Pereyra");
  });
});
