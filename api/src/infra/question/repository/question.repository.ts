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
}
