import type { Response, Request } from "express";
import Model from "../models/planets.model";

class planetsController {
  async handle(_: Request, res: Response) {
    return res.status(200).json(Model.getAllPlanets());
  }
}

const PlanetCOntroller = new planetsController();

export default PlanetCOntroller;
