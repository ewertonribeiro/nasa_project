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
const launches_model_1 = __importDefault(require("../models/launches.model"));
class launchesController {
    getAll(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allLaunches = yield launches_model_1.default.getAllLaunches();
            return res.status(200).json(allLaunches);
        });
    }
    createNew(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const launch = req.body;
            try {
                const newLaunch = res
                    .status(201)
                    .json(yield launches_model_1.default.creatrNewlaunche(launch));
                return newLaunch;
            }
            catch (error) {
                return res.status(404).json({
                    erro: `Planet ${launch.destination} Not Found, the launch wast not created`,
                });
            }
        });
    }
    deleteLaunch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Convert to number becuse it is how was stored
            const flightNumber = Number(req.params.flightNumber);
            try {
                const aborted = yield launches_model_1.default.abortLaunch(flightNumber);
                return res.status(200).json(aborted);
            }
            catch (error) {
                return res.status(404).json({ error: "Launch Not Found" });
            }
        });
    }
}
const controller = new launchesController();
exports.default = controller;
