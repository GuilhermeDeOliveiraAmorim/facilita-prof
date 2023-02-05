import Exam from "../../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class ExamRepository implements ExamRepositoryInterface {
    async add(exam: Exam): Promise<void> {
        console.log(exam);
        await prisma.exam.create({
            data: {
                id: exam.id,
                title: exam.title,
                teacher: {
                    connect: {
                        id: exam.teacher.id,
                    },
                },
                questions: {
                    connect: {
                        id: exam.questions[0].id,
                    },
                },
            },
        });
    }
}
