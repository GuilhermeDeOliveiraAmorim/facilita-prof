import express, { Request, Response } from "express";
import ExamFacadeFactory from "../../../domain/exams/factory/facade.factory";

export const examRouter = express.Router();

examRouter.post("/", async (req: Request, res: Response) => {
    const examFacade = ExamFacadeFactory.create();

    try {
        const input = {
            title: req.body.title,
            teacher: req.body.teacher,
            questions: req.body.questions,
        };
        const output = await examFacade.createExam(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});
