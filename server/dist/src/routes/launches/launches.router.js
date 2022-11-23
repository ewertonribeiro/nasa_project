"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchesRouter = void 0;
const express_1 = require("express");
const launches_controller_1 = __importDefault(require("../../controllers/launches.controller"));
const launchMidlleware_js_1 = __importDefault(require("../../midllewares/launchMidlleware.js"));
const launchesRouter = (0, express_1.Router)();
exports.launchesRouter = launchesRouter;
launchesRouter.get("/launches", launches_controller_1.default.getAll);
launchesRouter.post("/launches", launchMidlleware_js_1.default.verifyData, launches_controller_1.default.createNew);
launchesRouter.delete("/launches/:flightNumber", launches_controller_1.default.deleteLaunch);
