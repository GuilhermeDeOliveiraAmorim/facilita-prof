import { Exam } from "../entities/exam";

export interface ExamGateway {
    create(
        title: string,
        teacherId: string,
        questionsIds: { question_id: string }[]
    ): Promise<Exam>;
    find(id: string): Promise<Exam>;
    findByTeacherId(teacherId: string): Promise<Exam[]>;
    makePdf(id: string): Promise<string>;
}
