import express, { json } from "express";

import cors from "cors";

import { planetsRouter } from "./routes/planets/planets.router";

import { launchesRouter } from "./routes/launches/launches.router";

//Create the __dirname variable
import path from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.static("public"));
app.use(json());

app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (_, res) =>
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
);

export { app };
