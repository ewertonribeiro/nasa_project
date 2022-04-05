import express, { json } from "express";

import cors from "cors";

import { planetsRouter } from "./routes/planets/planets.router.js"

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))
app.use(json());
app.use(planetsRouter);

export { app }
