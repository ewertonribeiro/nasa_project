const launches = new Map();

let latestFlightNumber = 0;

class Launch {
  mission: string;
  rocket: string;
  destination: string;
  launchDate: Date;

  flightNumber: number;
  custumer: string[];
  upcoming: boolean;
  success: boolean;

  constructor(launch: Launch) {
    this.mission = launch.mission;
    this.rocket = launch.rocket;
    this.destination = launch.destination;
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

  creatrNewlaunche(launch: Launch) {
    const newLaunch = new Launch(launch);

    launches.set(newLaunch.flightNumber, newLaunch);

    return newLaunch;
  }

  launchExists(flightNumber: number) {
    const launch = launches.has(flightNumber);

    if (!launch) {
      return false;
    } else {
      return true;
    }
  }

  abortLaunch(flightNumber: number) {
    const aborted = launches.get(flightNumber);

    aborted.success = false;
    aborted.upcoming = false;

    return aborted;
  }
}

const LaunchesModel = new launchesModel();

export default LaunchesModel;
