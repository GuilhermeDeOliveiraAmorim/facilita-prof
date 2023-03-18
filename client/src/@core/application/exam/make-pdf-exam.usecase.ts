import { ExamGateway } from "../../domain/gateways/exam.gateway";

export class MakePdfExamUseCase {
    constructor(private examGateway: ExamGateway) {}

    async execute(id: string): Promise<string> {
        return await this.examGateway.makePdf(id);
    }
}
