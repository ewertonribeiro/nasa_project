import request from "supertest";
import { app } from "../../app";

describe("Teste GET /launches", () => {
  it("should Respond with a 200 status code", async () => {
    await request(app).get("/launches").expect(200);
  });
});

describe("Test POST /launches", () => {
  const launchData = {
    mission: "US Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "January 4, 2028",
  };

  const launchDataWithInvalidDate = {
    mission: "US Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "invalid date",
  };

  const launchDataWithoutTarget = {
    mission: "US Enterprise",
    rocket: "NCC 1701-D",
    launchDate: "invalid date",
  };

  it("Should respond with a 201 status code and the proper object response", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchData)
      .expect(201);

    // transform the dates to the same format to compare
    launchData.launchDate = String(new Date(launchData.launchDate));
    response.body.launchDate = String(new Date(response.body.launchDate));

    expect(response.body).toMatchObject(launchData);
  });

  it("Should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect(400);

    expect(response.body).toStrictEqual({ error: "Invalid Date Format!" })
  });

  it("Should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutTarget)
      .expect(400);

    expect(response.body).toStrictEqual({ error: "Required data missing for the launch!" })
  });
});
