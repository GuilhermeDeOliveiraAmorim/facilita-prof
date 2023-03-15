import Question from "../../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class QuestionRepository implements QuestionRepositoryInterface {
    async add(question: Question): Promise<void> {
        await prisma.question.create({
            data: {
                id: question.id,
                title: question.title,
                answer: question.answer,
                content: question.content,
                teacherId: question.teacherId,
            },
        });
    }

    async findById(id: string): Promise<Question> {
        const question = await prisma.question.findFirst({
            where: {
                id: id,
            },
        });
        return new Question(question);
    }

    async findAll(): Promise<Question[]> {
        const questions = await prisma.question.findMany();

        console.log(questions);

        const output: Question[] = [];

        questions.forEach((question) => {
            output.push(new Question(question));
        });

        return output;
    }

    async findAllByExamId(examId: string): Promise<Question[]> {
        const questions = await prisma.question.findMany({
            where: {
                exams: { every: { examId } },
            },
        });

        const output: Question[] = [];

        questions.forEach((question) => {
            output.push(new Question(question));
        });

        return output;
    }
}
