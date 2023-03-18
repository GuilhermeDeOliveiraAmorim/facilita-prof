import { Exam } from "../../domain/entities/exam";
import { ExamGateway } from "../../domain/gateways/exam.gateway";

export class FindExamByTeacherIdUseCase {
    constructor(private examGateway: ExamGateway) {}

    async execute(teacherId: string): Promise<Exam[]> {
        return await this.examGateway.findByTeacherId(teacherId);
    }
}
