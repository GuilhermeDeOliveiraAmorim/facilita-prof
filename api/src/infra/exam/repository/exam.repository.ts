import Exam from "../../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";

import { PrismaClient } from "@prisma/client";
import Teacher from "../../../domain/teachers/entity/teacher.entity";
import Question from "../../../domain/questions/entity/question.entity";
const prisma = new PrismaClient();

export default class ExamRepository implements ExamRepositoryInterface {
    async add(exam: Exam): Promise<void> {
        await prisma.exam.create({
            data: {
                id: exam.id,
                title: exam.title,
                teacher: {
                    connect: {
                        id: exam.teacher.id,
                    },
                },
            },
        });
    }

    async find(id: string): Promise<Exam> {
        const exam = await prisma.exam.findFirst({
            where: {
                id: id,
            },
            include: {
                teacher: true,
            },
        });

        return new Exam({
            id: exam.id,
            title: exam.title,
            teacher: new Teacher({
                id: exam.teacher.id,
                name: exam.teacher.name,
                username: exam.teacher.username,
            }),
        });
    }
}
