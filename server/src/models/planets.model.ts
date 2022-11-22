import { habitablePlanets } from "../../data/data/getplanetdata";

//PLanetas resultantes do csv_file
const planets = habitablePlanets;

export class planetsModel {
  getAllPlanets(): HabitablePlanet[] {
    return planets;
  }
}

const PlanetsModel = new planetsModel();

export default PlanetsModel;
