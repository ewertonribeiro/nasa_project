

import Model from "../models/planets.model.js";

class planetsController {


  async handle(req, res) {


    return res.status(200).json(Model.getAllPlanets());

  }
}

const PlanetCOntroller = new planetsController()


export default PlanetCOntroller;

