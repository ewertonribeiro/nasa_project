import { Router } from "express";

import controller from "../../controllers/launches.controller.js";

const launchesRouter = Router()

launchesRouter.get("/launches", controller.handle);

export { launchesRouter };
