import Exam from "../../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";

import { PrismaClient } from "@prisma/client";
import Question from "../../../domain/questions/entity/question.entity";
import Teacher from "../../../domain/teachers/entity/teacher.entity";
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

        examQuestions.forEach(async (question) => {
            await prisma.questionExam.create({
                data: {
                    examId: examId,
                    questionId: question.id,
                },
            });
        });
    }

    async find(id: string): Promise<Exam> {
        const exam = await prisma.exam.findFirst({
            where: {
                id: id,
            },
            include: {
                teacher: true,
                questions: {
                    include: {
                        question: {
                            select: {
                                id: true,
                                title: true,
                                content: true,
                                answer: true,
                                teacherId: true,
                            },
                        },
                    },
                },
            },
        });

        const teacherProps = {
            id: exam.teacher.id,
            name: exam.teacher.name,
            username: exam.teacher.username,
        };

        const teacher = new Teacher(teacherProps);

        const questions: Question[] = [];

        exam.questions.map((question) => {
            const questionProps = {
                id: question.question.id,
                title: question.question.title,
                content: question.question.content,
                answer: question.question.answer,
                teacherId: question.question.teacherId,
            };

            const questionEntity = new Question(questionProps);

            questions.push(questionEntity);
        });

        const examProps = {
            id: exam.id,
            title: exam.title,
            teacher: teacher,
            questions: questions,
        };

        return new Exam(examProps);
    }
}
