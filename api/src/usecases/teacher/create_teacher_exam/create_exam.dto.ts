import Exam from "../../../../domain/exams/entity/exam.entity";

export interface InputCreateExamDto {
    teacher_id: string;
    questions_ids: { question_id: string }[];
    examInfo: {
        title: string;
    };
}

export interface OutputCreateExamDto {
    exam: Exam;
}
