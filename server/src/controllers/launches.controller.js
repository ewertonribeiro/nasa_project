import Model from "../models/launches.model.js";


class launchesController {
  async getAll(req, res) {

    return res.status(200).json(Model.getAllLaunches());
  }

  async createNew(req, res) {

    const launch = req.body;

    return res.status(201).json(Model.creatrNewlaunche(launch));

  }
}

const controller = new launchesController()

export default controller;
