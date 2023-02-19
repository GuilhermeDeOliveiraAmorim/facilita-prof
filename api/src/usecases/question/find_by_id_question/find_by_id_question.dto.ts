import Question from "../../../domain/questions/entity/question.entity";

export interface InputFindByIdQuestionDto {
    id: string;
}

export interface OutputFindByIdQuestionDto {
    question: Question;
}
