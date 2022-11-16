const launches = new Map();

// const launch = {
//   flightNumber: 100,
//   mission: "Kepler 1",
//   rocket: "Explorer",
//   launchDate: new Date("October 18, 2023"),
//   destination: "Kepler-1652 b",
//   custumer: ["ztm , NASA"],
//   upcoming: true,
//   success: true,

// }

let latestFlightNumber = 0;

class Launch {
  mission;
  rocket;
  target;
  launchDate;

  flightNumber;
  custumer;
  upcoming;
  success;

  constructor(launch) {
    this.mission = launch.mission;
    this.rocket = launch.rocket;
    this.target = launch.target;
    this.launchDate = new Date(launch.launchDate);

    this.custumer = ["ZTM", "NASA"];
    this.upcoming = true;
    this.flightNumber = latestFlightNumber += 1;
    this.success = true;
  }
}

class launchesModel {
  getAllLaunches() {
    return Array.from(launches.values());
  }

  creatrNewlaunche(launch) {
    const newLaunch = new Launch(launch);

    launches.set(newLaunch.flightNumber, newLaunch);

    return newLaunch;
  }

  launchExists(flightNumber) {
    const launch = launches.has(flightNumber);

    if (!launch) {
      return false;
    } else {
      return true;
    }
  }

  abortLaunch(flightNumber) {
    const aborted = launches.get(flightNumber);

    aborted.success = false;
    aborted.upcoming = false;

    return aborted;
  }
}

const LaunchesModel = new launchesModel();

export default LaunchesModel;
