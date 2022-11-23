import { PrismaClient } from "@prisma/client";

class launchesModel {
  constructor(private db: PrismaClient) {}

  async getAllLaunches() {
    const launches = await this.db.launch.findMany({
      include: {
        destination: true,
      },
    });
    return launches;
  }

  private async getLatestFlightNumber() {
    const launches = await this.getAllLaunches();

    if (launches.length == 0) {
      //Default FlightNumber
      return 100;
    }
    const [latest] = launches.sort((a, b) => b.flightNumber - a.flightNumber);
    return latest.flightNumber;
  }

  async creatrNewlaunche({ rocket, mission, launchDate, destination }: Launch) {
    const newFlightNumber = (await this.getLatestFlightNumber()) + 1;
    const newLaunch = await this.db.launch.create({
      data: {
        rocket,
        mission,
        launchDate: new Date(launchDate),
        flightNumber: newFlightNumber,

        destination: {
          connect: {
            kepler_name: destination,
          },
        },
      },
    });

    return newLaunch;
  }

  async launchExists(flightNumber: number) {
    const launch = await this.db.launch.findFirstOrThrow({
      where: {
        flightNumber,
      },
    });

    return launch;
  }

  async abortLaunch(flightNumber: number) {
    await this.launchExists(flightNumber);
    await this.db.launch.update({
      where: {
        flightNumber: flightNumber,
      },
      data: {
        upcoming: false,
        success: false,
      },
    });

    return { aborted: true };
  }
}

const LaunchesModel = new launchesModel(new PrismaClient());

export default LaunchesModel;
