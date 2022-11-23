"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPlanetsData = void 0;
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
const planets_model_1 = __importDefault(require("../../src/models/planets.model"));
//Funcao resonsavel por verificar quais mundos sao habitaveis
function isHabitable(planet) {
    const result = planet.koi_disposition === "CONFIRMED" &&
        planet.koi_insol > 0.36 &&
        planet.koi_insol < 1.11 &&
        planet.koi_prad < 1.6;
    return result;
}
//funcao resonsavel por ler os dados do arquivo csv e converter em json e verificar quais sao possivelmente habitaveis
function loadPlanetsData() {
    return new Promise((resolve, rejects) => {
        fs_1.default.createReadStream("./data/kepler_data.csv")
            .pipe((0, csv_parse_1.parse)({
            comment: "#",
            columns: true,
        }))
            .on("data", (chunk) => {
            if (isHabitable(chunk)) {
                planets_model_1.default.createPlanets({ kepler_name: chunk.kepler_name });
            }
        })
            .on("error", (err) => {
            rejects(err);
        })
            .on("end", () => __awaiter(this, void 0, void 0, function* () {
            resolve();
        }));
    });
}
exports.loadPlanetsData = loadPlanetsData;
