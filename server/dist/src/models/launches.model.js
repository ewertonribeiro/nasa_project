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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class launchesModel {
    constructor(db) {
        this.db = db;
    }
    getAllLaunches() {
        return __awaiter(this, void 0, void 0, function* () {
            const launches = yield this.db.launch.findMany({
                include: {
                    destination: true,
                },
            });
            return launches;
        });
    }
    getLatestFlightNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const launches = yield this.getAllLaunches();
            if (launches.length == 0) {
                //Default FlightNumber
                return 100;
            }
            const [latest] = launches.sort((a, b) => b.flightNumber - a.flightNumber);
            return latest.flightNumber;
        });
    }
    creatrNewlaunche({ rocket, mission, launchDate, destination }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newFlightNumber = (yield this.getLatestFlightNumber()) + 1;
            const newLaunch = yield this.db.launch.create({
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
        });
    }
    launchExists(flightNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const launch = yield this.db.launch.findFirstOrThrow({
                where: {
                    flightNumber,
                },
            });
            return launch;
        });
    }
    abortLaunch(flightNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.launchExists(flightNumber);
            yield this.db.launch.update({
                where: {
                    flightNumber: flightNumber,
                },
                data: {
                    upcoming: false,
                    success: false,
                },
            });
            return { aborted: true };
        });
    }
}
const LaunchesModel = new launchesModel(new client_1.PrismaClient());
exports.default = LaunchesModel;
