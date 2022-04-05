

import { planets } from "../models/planets.js";

class planetsController {


  async handle(req, res) {


    return res.status(200).json(planets)

  }
}

const PlanetCOntroller = new planetsController()


export default PlanetCOntroller;

