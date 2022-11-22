import type { Request, Response } from "express";
import Model from "../models/launches.model";

class launchesController {
  async getAll(_: Request, res: Response) {
    return res.status(200).json(Model.getAllLaunches());
  }

  async createNew(req: Request, res: Response) {
    const launch = req.body;

    return res.status(201).json(Model.creatrNewlaunche(launch));
  }

  async deleteLaunch(req: Request, res: Response) {
    //Convert to number becuse it is how was stored
    const flightNumber = Number(req.params.flightNumber);

    if (!Model.launchExists(flightNumber)) {
      return res.status(404).json({ error: "Launch Not Found" });
    }

    const aborted = Model.abortLaunch(flightNumber);

    return res.status(200).json(aborted);
  }
}

const controller = new launchesController();

export default controller;
