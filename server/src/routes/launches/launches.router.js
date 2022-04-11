import { Router } from "express";

import controller from "../../controllers/launches.controller.js";

import LaunchMiddleware from "../../midllewares/launchMidlleware.js";

const launchesRouter = Router()

launchesRouter.get("/launches", controller.getAll);
launchesRouter.post("/launches", LaunchMiddleware.verifyData, controller.createNew);
launchesRouter.delete("/launches/:flightNumber", controller.deleteLaunch);


export { launchesRouter };
