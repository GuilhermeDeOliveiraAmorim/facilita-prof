import { Exam } from "../../domain/entities/exam";
import { ExamGateway } from "../../domain/gateways/exam.gateway";

export class CreateExamUseCase {
    constructor(private examGateway: ExamGateway) {}

    async execute(
        title: string,
        teacherId: string,
        questionsIds: { question_id: string }[]
    ): Promise<Exam> {
        return await this.examGateway.create(title, teacherId, questionsIds);
    }
}
