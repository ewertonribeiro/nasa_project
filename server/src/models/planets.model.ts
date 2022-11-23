import { PrismaClient } from "@prisma/client";

//PLanetas resultantes do csv_file

export class planetsModel {
  constructor(private db: PrismaClient) {}

  async getAllPlanets(): Promise<HabitablePlanet[]> {
    const allPlanets = await this.db.planet.findMany();
    return allPlanets;
  }

  async createPlanets({ kepler_name }: HabitablePlanet): Promise<void> {
    await this.db.planet.upsert({
      where: {
        kepler_name,
      },
      update: {
        kepler_name,
      },
      create: {
        kepler_name,
      },
    });
  }
}

export default new planetsModel(new PrismaClient());
