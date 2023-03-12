import Question from "../../../domain/questions/entity/question.entity";

export interface InputFindAllQuestionsByExamIdDto {
    examId: string;
}

export interface OutputFindAllQuestionsByExamIdDto {
    questions: Question[];
}
