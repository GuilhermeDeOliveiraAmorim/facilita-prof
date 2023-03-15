import { Prisma } from "@prisma/client";
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
            teacherId: req.body.teacherId,
        };
        const output = await questionFacade.createQuestion(input);
        res.send(output);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                res.status(500).send({
                    message:
                        "A new question cannot be created with this content",
                });
            }
        }
    }
});

questionRouter.get("/find/all", async (req: Request, res: Response) => {
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

questionRouter.get("/find/:id", async (req: Request, res: Response) => {
    const questionFacade = QuestionFacadeFactory.create();

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

questionRouter.get(
    "/find/all/exam/:id",
    async (req: Request, res: Response) => {
        const questionFacade = QuestionFacadeFactory.create();

        try {
            const input = {
                examId: req.params.id,
            };

            const output = await questionFacade.findAllByExamId(input);
            res.send(output);
        } catch (err: any) {
            res.status(500).send({
                message: err.message,
            });
        }
    }
);
