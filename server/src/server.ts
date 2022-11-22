import { createServer } from "http";

import { app } from "./app.js";

import { loadPlanetsData } from "../data/data/getplanetdata.js";

const Port = process.env.PORT || 5000;

const server = createServer(app);

await loadPlanetsData();

server.listen(Port, () => console.log(`Server is running on ${Port}`));
