import { Question } from "../../domain/entities/question";
import { QuestionGateway } from "../../domain/gateways/question.gateway";

export class FindAllQuestionsUseCase {
    constructor(private questionGateway: QuestionGateway) {}

    async execute(): Promise<Question[]> {
        return await this.questionGateway.findAll();
    }
}
