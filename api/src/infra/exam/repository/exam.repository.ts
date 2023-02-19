import Exam from "../../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";

import { PrismaClient } from "@prisma/client";
import Teacher from "../../../domain/teachers/entity/teacher.entity";
import Question from "../../../domain/questions/entity/question.entity";
const prisma = new PrismaClient();

export default class ExamRepository implements ExamRepositoryInterface {
    async add(exam: Exam): Promise<void> {
        const examId = exam.id;
        const examTitle = exam.title;
        const examTeacher = exam.teacher.id;
        const examQuestions = exam.questions;

        const data = {
            id: examId,
            title: examTitle,
            teacher: {
                connect: {
                    id: examTeacher,
                },
            },
        };

        await prisma.exam.create({
            data: data,
        });

        await Promise.all(
            examQuestions.map(async (question) => {
                await prisma.exam.update({
                    where: {
                        id: examId,
                    },
                    data: {
                        questions: {
                            connect: {
                                id: question.id,
                            },
                        },
                    },
                });
            })
        );
    }

    async find(id: string): Promise<Exam> {
        const exam = await prisma.exam.findFirst({
            where: {
                id: id,
            },
            include: {
                teacher: true,
                questions: true,
            },
        });

        const teacher = new Teacher({
            id: exam.teacher.id,
            name: exam.teacher.name,
            username: exam.teacher.username,
        });

        const questionsAdded: Question[] = [];

        exam.questions.map((question) => {
            questionsAdded.push(
                new Question({
                    id: question.id,
                    answer: question.answer,
                    content: question.content,
                    title: question.title,
                })
            );
        });

        return new Exam({
            id: exam.id,
            title: exam.title,
            teacher: teacher,
            questions: questionsAdded,
        });
    }
}
