import Question from "../../domain/questions/entity/question.entity";
import Teacher from "../../domain/teachers/entity/teacher.entity";

export interface FindExamInputDto {
    id: string;
}

export interface FindExamOutputDto {
    id: string;
    title: string;
    createdAt: string;
    teacher: Teacher;
    questions: Question[];
}
