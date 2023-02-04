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
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});
