import Question from "../../../domain/questions/entity/question.entity";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

export interface InputFindExamDto {
    id: string;
}

export interface OutputFindExamDto {
    id: string;
    title: string;
    teacher: Teacher;
    questions: Question[];
}
