import { Prisma } from "@prisma/client";
import express, { Request, Response } from "express";
import TeacherFacadeFactory from "../../../domain/teachers/factory/facade.factory";

export const teacherRouter = express.Router();

teacherRouter.post("/", async (req: Request, res: Response) => {
    const teacherFacade = TeacherFacadeFactory.create();

    try {
        const input = {
            name: req.body.name,
            username: req.body.username,
        };
        const output = await teacherFacade.createTeacher(input);
        res.send(output);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                res.status(500).send({
                    message:
                        "A new teacher cannot be created with this username",
                });
            }
        }
    }
});

teacherRouter.get("/find/all", async (req: Request, res: Response) => {
    const teacherFacade = TeacherFacadeFactory.create();

    try {
        const input = {};
        const output = await teacherFacade.findTeachers(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});

teacherRouter.get("/find/:id", async (req: Request, res: Response) => {
    const teacherFacade = TeacherFacadeFactory.create();

    try {
        const input = {
            id: req.params.id,
        };
        const output = await teacherFacade.findTeacher(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});
