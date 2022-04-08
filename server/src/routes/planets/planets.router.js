import { Router } from "express"

import PlanetController from "../../controllers/planets.controller.js";

const planetsRouter = Router()

planetsRouter.get("/planets", PlanetController.handle)

export { planetsRouter }
