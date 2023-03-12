import cors from "cors";
import express, { Express } from "express";
import { examRouter } from "./routers/exam.router";
import { questionRouter } from "./routers/question.router";
import { teacherRouter } from "./routers/teacher.router";

export const app: Express = express();

app.use(express.json());

app.use(cors());

app.use("/teacher", teacherRouter);
app.use("/question", questionRouter);
app.use("/exam", examRouter);
