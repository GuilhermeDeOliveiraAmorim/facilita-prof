import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import TeacherModel from "../teacher/repository/teacher.model";
import { teacherRouter } from "./routers/teacher.router";
import cors from "cors";

export const app: Express = express();

app.use(express.json());

app.use(cors());

app.use("/teacher", teacherRouter);

export let sequelize: Sequelize;

const user = process.env.DB_USER;
const host = process.env.DB_USER;
const database = process.env.DB_NAME;
const port = process.env.DB_PORT;
const password = process.env.DB_PASSWORD;

async function setupDb() {
    sequelize = new Sequelize(database, user, password, {
        host: host,
        port: Number(port),
        dialect: "postgres",
        logging: false,
        sync: { force: true },
    });

    sequelize.addModels([TeacherModel]);
    await sequelize.sync();
}

setupDb();
