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
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../app");
const getplanetdata_1 = require("../../../data/data/getplanetdata");
(0, vitest_1.describe)("test for the planets Router", () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, getplanetdata_1.loadPlanetsData)();
    }));
    (0, vitest_1.it)("should return a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.app).get("/planets").expect(200);
    }));
    (0, vitest_1.it)("Should return a array of 8 Habitable Planet objects", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app).get("/planets");
        (0, vitest_1.expect)(res.body.length).toBe(8);
        res.body.forEach((planet) => {
            (0, vitest_1.expect)(planet).toHaveProperty("kepler_name");
            (0, vitest_1.expect)(planet).toHaveProperty("id");
        });
    }));
});
