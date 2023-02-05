import express, { Request, Response } from "express";
import QuestionFacadeFactory from "../../../domain/questions/factory/facade.factory";

export const questionRouter = express.Router();

questionRouter.post("/", async (req: Request, res: Response) => {
    const questionFacade = QuestionFacadeFactory.create();

    try {
        const input = {
            title: req.body.title,
            answer: req.body.answer,
            content: req.body.content,
        };
        const output = await questionFacade.createQuestion(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});

questionRouter.get("/all", async (req: Request, res: Response) => {
    const questionFacade = QuestionFacadeFactory.create();

    try {
        const input = {};
        const output = await questionFacade.findAllQuestions(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});

questionRouter.get("/:id", async (req: Request, res: Response) => {
    const questionFacade = QuestionFacadeFactory.create();

    console.log(req.params.id);

    try {
        const input = {
            id: req.params.id,
        };
        const output = await questionFacade.findByIdQuestion(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});
