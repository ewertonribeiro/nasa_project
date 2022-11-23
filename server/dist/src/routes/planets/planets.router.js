"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.planetsRouter = void 0;
const express_1 = require("express");
const planets_controller_1 = __importDefault(require("../../controllers/planets.controller"));
const planetsRouter = (0, express_1.Router)();
exports.planetsRouter = planetsRouter;
planetsRouter.get("/planets", planets_controller_1.default.handle);
