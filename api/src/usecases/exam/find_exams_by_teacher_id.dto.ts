import Exam from "../../domain/exams/entity/exam.entity";

export interface FindExamByTeacherIdInputDto {
    teacherId: string;
}

export interface FindExamByTeacherIdOutputDto {
    exams: Exam[];
}
