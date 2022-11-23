import { parse } from "csv-parse";
import fs from "fs";

import planetsModel from "../../src/models/planets.model";

type KeplerPkanet = {
  koi_disposition: string;
  koi_insol: number;
  koi_prad: number;
  kepler_name: string;
};

//Funcao resonsavel por verificar quais mundos sao habitaveis
function isHabitable(planet: KeplerPkanet) {
  const result =
    planet.koi_disposition === "CONFIRMED" &&
    planet.koi_insol > 0.36 &&
    planet.koi_insol < 1.11 &&
    planet.koi_prad < 1.6;

  return result;
}

//funcao resonsavel por ler os dados do arquivo csv e converter em json e verificar quais sao possivelmente habitaveis
function loadPlanetsData() {
  return new Promise<void>((resolve, rejects) => {
    fs.createReadStream("./data/kepler_data.csv")
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (chunk: KeplerPkanet) => {
        if (isHabitable(chunk)) {
          planetsModel.createPlanets({ kepler_name: chunk.kepler_name });
        }
      })
      .on("error", (err) => {
        rejects(err);
      })
      .on("end", async () => {
        resolve();
      });
  });
}

export { loadPlanetsData };
