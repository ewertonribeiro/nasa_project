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
const http_1 = require("http");
const app_js_1 = require("./app.js");
const getplanetdata_js_1 = require("../data/data/getplanetdata.js");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const Port = process.env.PORT || 5000;
    const server = (0, http_1.createServer)(app_js_1.app);
    yield (0, getplanetdata_js_1.loadPlanetsData)();
    server.listen(Port, () => console.log(`Server is running on ${Port}`));
});
main();
