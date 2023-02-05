import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
import Question from "../../../domain/questions/entity/question.entity";

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

        const output: Question[] = [];

        questions.forEach((question) => {
            output.push(new Question(question));
        });

        return output;
    }
}
