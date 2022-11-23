declare type HabitablePlanet = {
  kepler_name: string;
};

declare type Launch = {
  mission: string;
  rocket: string;
  destination: string;
  launchDate: Date;

  flightNumber: number;
  custumer: string[];
  upcoming: boolean;
  success: boolean;
};
