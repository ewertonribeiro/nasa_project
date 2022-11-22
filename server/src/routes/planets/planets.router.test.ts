import { expect, describe, it, beforeEach, afterEach } from "vitest";
import request from "supertest";

import { app } from "../../app";
import {
  habitablePlanets,
  loadPlanetsData,
} from "../../../data/data/getplanetdata";

describe("test for the planets Router", () => {
  beforeEach(async () => {
    await loadPlanetsData();
  });

  afterEach(() => {
    while (habitablePlanets.length > 0) {
      habitablePlanets.pop();
    }
  });

  it("should return a 200 status code", async () => {
    await request(app).get("/planets").expect(200);
  });

  it("Should return a array of 8 Habitable Planet objects", async () => {
    const res = await request(app).get("/planets");

    expect(res.body.length).toBe(8);

    res.body.forEach((planet: { kepler_name: string }) => {
      expect(planet).toHaveProperty("kepler_name");
    });
  });
});
