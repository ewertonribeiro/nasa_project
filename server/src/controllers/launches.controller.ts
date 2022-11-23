import type { Request, Response } from "express";
import Model from "../models/launches.model";

class launchesController {
  async getAll(_: Request, res: Response) {
    const allLaunches = await Model.getAllLaunches();
    return res.status(200).json(allLaunches);
  }

  async createNew(req: Request, res: Response) {
    const launch = req.body;

    try {
      const newLaunch = res
        .status(201)
        .json(await Model.creatrNewlaunche(launch));
      return newLaunch;
    } catch (error) {
      return res.status(404).json({
        erro: `Planet ${launch.destination} Not Found, the launch wast not created`,
      });
    }
  }

  async deleteLaunch(req: Request, res: Response) {
    //Convert to number becuse it is how was stored
    const flightNumber = Number(req.params.flightNumber);

    try {
      const aborted = await Model.abortLaunch(flightNumber);
      return res.status(200).json(aborted);
    } catch (error) {
      return res.status(404).json({ error: "Launch Not Found" });
    }
  }
}

const controller = new launchesController();

export default controller;
