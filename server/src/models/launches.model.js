const launches = new Map();

const lauch = {
  flightNumber: 100,
  mission: "Kepler 1",
  rocket: "Explorer",
  launchDate: new Date("October 18, 2023"),
  destination: "Kepler-1652 b",
  custumer: ["ztm , NASA"],
  upcoming: true,
  success: true,

}


launches.set(lauch.flightNumber, lauch);

class launchesModel {
  getAllLaunches() {

    return Array.from(launches.values())
  }
}


const LaunchesModel = new launchesModel()


export default LaunchesModel;
