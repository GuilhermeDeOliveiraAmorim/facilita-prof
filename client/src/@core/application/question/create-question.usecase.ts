import { Question } from "../../domain/entities/question";
import { QuestionGateway } from "../../domain/gateways/question.gateway";

export class CreateQuestionUseCase {
    constructor(private teacherGateway: QuestionGateway) {}

    async execute(
        title: string,
        content: string,
        answer: string
    ): Promise<Question> {
        return await this.teacherGateway.create(title, content, answer);
    }
}
