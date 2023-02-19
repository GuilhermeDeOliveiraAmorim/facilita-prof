import Exam from "../../exams/entity/exam.entity";
import Question from "../../questions/entity/question.entity";

export interface CreateTeacherFacadeInputDto {
    name: string;
    username: string;
}

export interface CreateTeacherFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindTeacherFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindAllTeachersFacadeInputDto {}

export interface FindAllTeachersFacadeOutputDto {
    teachers: {
        id: string;
        username: string;
    }[];
}

export interface CreateTeacherExamInputDto {
    teacher_id: string;
    questions_ids: { question_id: string }[];
    examInfo: {
        title: string;
    };
}

export interface CreateTeacherExamOutputDto {
    exam: Exam;
}

export interface FindTeacherFacadeInputDto {
    teacher_id: string;
}

export interface FindTeacherFacadeOutputDto {
    id: string;
    username: string;
}

export default interface TeacherFacadeInterface {
    createTeacher(
        input: CreateTeacherFacadeInputDto
    ): Promise<CreateTeacherFacadeOutputDto>;

    createExam(
        input: CreateTeacherExamInputDto
    ): Promise<CreateTeacherExamOutputDto>;

    findTeacher(
        input: FindTeacherFacadeInputDto
    ): Promise<FindTeacherFacadeOutputDto>;
}
