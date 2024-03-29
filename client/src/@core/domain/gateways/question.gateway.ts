import { Question } from "../entities/question";

export interface QuestionGateway {
    create(
        title: string,
        content: string,
        answer: string,
        teacherId: string
    ): Promise<Question>;
    find(id: string): Promise<Question>;
    findAll(): Promise<Question[]>;
}
