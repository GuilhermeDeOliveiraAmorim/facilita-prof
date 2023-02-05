import Question from "../../../domain/questions/entity/question.entity";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

export interface InputCreateExamDto {
    title: string;
    teacher: Teacher;
    questions: Question[];
}

export interface OutputCreateExamDto {
    id: string;
    title: string;
    teacher: Teacher;
    questions: Question[];
}
