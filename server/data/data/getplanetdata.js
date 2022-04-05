import { parse } from "csv-parse"
import fs from "fs"

const habitablePlanets = [];

//Funcao resonsavel por verificar quais mundos sao habitaveis
function isHabitable(planet) {

  const result = planet.koi_disposition === "CONFIRMED" && planet.koi_insol > 0.36 && planet.koi_insol < 1.11 && planet.koi_prad < 1.6;


  return result;

}


//funcao resonsavel por ler os dados do arquivo csv e converter em json e verificar quais sao possivelmente habitaveis
function loadPlanetsData() {

  return new Promise((resolve, rejects) => {
    fs.createReadStream("./data/kepler_data.csv")
      .pipe(parse({
        comment: "#",
        columns: true,
      }))
      .on("data", (chunk) => {

        if (isHabitable(chunk)) {
          habitablePlanets.push(chunk);
        }
      })
      .on("error", (err) => {
        rejects(err);
      })
      .on("end", () => {
        resolve();

      })
  })

}





export { habitablePlanets, loadPlanetsData }
