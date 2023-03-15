import { Exam } from "../entities/exam";

export interface ExamGateway {
    create(
        title: string,
        teacherId: string,
        questionsIds: string[]
    ): Promise<Exam>;
    find(id: string): Promise<Exam>;
}
