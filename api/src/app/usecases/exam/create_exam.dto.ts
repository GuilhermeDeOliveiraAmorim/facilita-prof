import Question from "../../../domain/questions/entity/question.entity";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

export interface OutputTeacherDto {
    id: string;
    username: string;
}

export interface InputCreateExamDto {
    title: string;
    teacher_id: string;
    questions_ids: { question_id: string }[];
}

export interface OutputCreateExamDto {
    id: string;
    title: string;
    teacher: Teacher;
    questions: Question[];
}
