import Question from "../../questions/entity/question.entity";
import Teacher from "../../teachers/entity/teacher.entity";
import Exam from "../entity/exam.entity";

export interface CreateExamFacadeInputDto {
    title: string;
    teacher_id: string;
    questions_ids: { question_id: string }[];
}

export interface CreateExamFacadeOutputDto {
    id: string;
    title: string;
    teacher: Teacher;
    questions: Question[];
}

export interface FindExamFacadeInputDto {
    id: string;
}

export interface FindExamFacadeOutputDto {
    id: string;
    title: string;
    teacher: Teacher;
    questions: Question[];
}

export interface FindExamByTeacherIdFacadInputDto {
    teacherId: string;
}

export interface FindExamByTeacherIdFacadOutputDto {
    exams: Exam[];
}

export default interface ExamFacadeInterface {
    createExam(
        input: CreateExamFacadeInputDto
    ): Promise<CreateExamFacadeOutputDto>;

    findExam(input: FindExamFacadeInputDto): Promise<FindExamFacadeOutputDto>;

    findExamByTeacherId(
        input: FindExamByTeacherIdFacadInputDto
    ): Promise<FindExamByTeacherIdFacadOutputDto>;
}
