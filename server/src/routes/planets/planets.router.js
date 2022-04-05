import { Router } from "express"

import PlanetController from "../../controllers/planets.js";

const planetsRouter = Router()

planetsRouter.get("/planets", PlanetController.handle)

export { planetsRouter }
