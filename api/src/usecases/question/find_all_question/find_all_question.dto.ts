import Question from "../../../domain/questions/entity/question.entity";

export interface InputFindAllQuestionsDto {}

export interface OutputFindAllQuestionsDto {
    questions: Question[];
}
