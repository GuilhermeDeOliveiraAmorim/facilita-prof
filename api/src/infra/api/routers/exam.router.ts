import { BLANK_PDF, generate, Template } from "@pdfme/generator";
import { Prisma } from "@prisma/client";
import express, { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import ExamFacadeFactory from "../../../domain/exams/factory/facade.factory";
import Question from "../../../domain/questions/entity/question.entity";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

export const examRouter = express.Router();

examRouter.post("/", async (req: Request, res: Response) => {
    const examFacade = ExamFacadeFactory.create();

    try {
        const input = {
            title: req.body.title,
            teacher_id: req.body.teacher_id,
            questions_ids: req.body.questions_ids,
        };
        const output = await examFacade.createExam(input);
        res.send(output);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                res.status(500).send({
                    message: "A new exam cannot be created with this title",
                });
            }
        }
    }
});

examRouter.get("/find/:id", async (req: Request, res: Response) => {
    const examFacade = ExamFacadeFactory.create();

    try {
        const input = {
            id: req.params.id,
        };
        const output = await examFacade.findExam(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});

examRouter.get("/find/teacher/:id", async (req: Request, res: Response) => {
    const examFacade = ExamFacadeFactory.create();

    try {
        const input = {
            teacherId: req.params.id,
        };
        const output = await examFacade.findExamByTeacherId(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});

examRouter.get("/make/pdf/:id", async (req: Request, res: Response) => {
    const examFacade = ExamFacadeFactory.create();

    try {
        const input = {
            id: req.params.id,
        };
        const exam = await examFacade.findExam(input);
        const output = generatePdf(
            exam.id,
            exam.title,
            exam.teacher,
            exam.questions
        );
        res.send({ link: output });
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});

function generatePdf(
    id: string,
    title: string,
    teacher: Teacher,
    questions: Question[]
): string {
    var download = "";

    const template: Template = {
        basePdf: BLANK_PDF,
        schemas: [
            {
                title: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 15,
                    },
                    width: 200,
                    height: 10,
                    fontSize: 30,
                    fontColor: "#000000",
                },
                teacher: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 35,
                    },
                    width: 200,
                    height: 10,
                    fontSize: 25,
                    fontColor: "#000000",
                    lineHeight: 1,
                },
                questionTitle: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 60,
                    },
                    width: 200,
                    height: 10,
                    alignment: "left",
                    fontSize: 20,
                    fontColor: "#000000",
                    lineHeight: 1,
                },
                question1: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 75,
                    },
                    width: 200,
                    height: 10,
                    alignment: "left",
                    fontSize: 20,
                    characterSpacing: 0,
                    lineHeight: 1,
                },
                question2: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 100,
                    },
                    width: 200,
                    height: 10,
                    alignment: "left",
                    fontSize: 20,
                    characterSpacing: 0,
                    lineHeight: 1,
                },
                question3: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 125,
                    },
                    width: 200,
                    height: 10,
                    alignment: "left",
                    fontSize: 20,
                    characterSpacing: 0,
                    lineHeight: 1,
                },
                question4: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 150,
                    },
                    width: 200,
                    height: 10,
                    alignment: "left",
                    fontSize: 20,
                    characterSpacing: 0,
                    lineHeight: 1,
                },
                question5: {
                    type: "text",
                    position: {
                        x: 5,
                        y: 175,
                    },
                    width: 200,
                    height: 10,
                    alignment: "left",
                    fontSize: 20,
                    characterSpacing: 0,
                    lineHeight: 1,
                },
            },
        ],
    };

    var inputs: Record<string, string>[] = [];

    switch (questions.length) {
        case 1:
            inputs = [
                {
                    title: title,
                    teacher: "Professor: " + teacher.name,
                    questionTitle: "Questões",
                    question1: "1) " + questions[0].content,
                },
            ];
            break;

        case 2:
            inputs = [
                {
                    title: title,
                    teacher: "Professor: " + teacher.name,
                    questionTitle: "Questões",
                    question1: "1) " + questions[0].content,
                    question2: "2) " + questions[1].content,
                },
            ];
            break;

        case 3:
            inputs = [
                {
                    title: title,
                    teacher: "Professor: " + teacher.name,
                    questionTitle: "Questões",
                    question1: "1) " + questions[0].content,
                    question2: "2) " + questions[1].content,
                    question3: "3) " + questions[2].content,
                },
            ];
            break;

        case 4:
            inputs = [
                {
                    title: title,
                    teacher: "Professor: " + teacher.name,
                    questionTitle: "Questões",
                    question1: "1) " + questions[0].content,
                    question2: "2) " + questions[1].content,
                    question3: "3) " + questions[2].content,
                    question4: "4) " + questions[3].content,
                },
            ];
            break;

        case 5:
            inputs = [
                {
                    title: title,
                    teacher: "Professor: " + teacher.name,
                    questionTitle: "Questões",
                    question1: "1) " + questions[0].content,
                    question2: "2) " + questions[1].content,
                    question3: "3) " + questions[2].content,
                    question4: "4) " + questions[3].content,
                    question5: "5) " + questions[4].content,
                },
            ];
            break;

        default:
            break;
    }

    const dir = "/home/guilherme/Workspace/facilita-prof/api/pdfs/";
    const name = id + ".pdf";

    download = dir + id + ".pdf";

    generate({ template, inputs }).then((pdf) => {
        fs.writeFileSync(path.join(dir, name), pdf);
    });

    return download;
}
