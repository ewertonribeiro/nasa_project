import { habitablePlanets } from "../../data/data/getplanetdata.js";

//PLanetas resultantes do csv_file
const planets = habitablePlanets;


class planetsModel {
  getAllPlanets() {

    return planets;
  }
}

const PlanetsModel = new planetsModel()



export default PlanetsModel;
