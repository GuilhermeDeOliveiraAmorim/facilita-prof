import { PrismaClient } from "@prisma/client";

import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";

import Exam from "../../../domain/exams/entity/exam.entity";
import Question from "../../../domain/questions/entity/question.entity";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

const prisma = new PrismaClient();

export default class TeacherRepository implements TeacherRepositoryInterface {
    async add(teacher: Teacher): Promise<void> {
        await prisma.teacher.create({
            data: {
                id: teacher.id,
                name: teacher.name,
                username: teacher.username,
            },
        });
    }

    async find(id: string): Promise<Teacher> {
        const teacher = await prisma.teacher.findFirst({
            where: {
                id: id,
            },
        });
        return new Teacher(teacher);
    }

    async createExam(
        teacher: Teacher,
        exam: Exam,
        questions: Question[]
    ): Promise<Exam> {
        const teacherId = teacher.id;

        const newExam = await prisma.exam.create({
            data: {
                id: exam.id,
                title: exam.title,
                teacher: {
                    connect: {
                        id: teacherId,
                    },
                },
            },
        });

        const examProps = {
            id: newExam.id,
            title: newExam.title,
            createdAt: exam.createdAt.toString(),
            teacher: teacher,
            questions: questions,
        };

        return new Exam(examProps);
    }

    async findAll(): Promise<Teacher[]> {
        const teachers = await prisma.teacher.findMany();

        const output: Teacher[] = [];

        teachers.forEach((teacher) => {
            output.push(new Teacher(teacher));
        });

        return output;
    }
}
