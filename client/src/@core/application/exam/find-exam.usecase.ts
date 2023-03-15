import { Exam } from "../../domain/entities/exam";
import { ExamGateway } from "../../domain/gateways/exam.gateway";
export class FindExamUseCase {
    constructor(private examGateway: ExamGateway) {}

    async execute(id: string): Promise<Exam> {
        return await this.examGateway.find(id);
    }
}
