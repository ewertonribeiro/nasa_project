import Model from "../models/launches.model.js";


class launchesController {
  async handle(req, res) {

    return res.status(200).json(Model.getAllLaunches());
  }
}

const controller = new launchesController()

export default controller;
