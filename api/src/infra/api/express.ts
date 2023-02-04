import express, { Express } from "express";
import { teacherRouter } from "./routers/teacher.router";
import cors from "cors";

export const app: Express = express();

app.use(express.json());

app.use(cors());

app.use("/teacher", teacherRouter);
