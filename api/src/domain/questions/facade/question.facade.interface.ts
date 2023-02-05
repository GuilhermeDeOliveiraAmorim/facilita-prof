import Question from "../entity/question.entity";

export interface CreateQuestionFacadeInputDto {
    title: string;
    content: string;
    answer: string;
}

export interface CreateQuestionFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindQuestionFacadeInputDto {
    id: string;
}

export interface FindQuestionFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindAllQuestionsFacadeInputDto {}

export interface FindAllQuestionsFacadeOutputDto {}

export interface FindByIdQuestionFacadeInputDto {
    id: string;
}

export interface FindByIdQuestionFacadeOutputDto {
    question: Question;
}

export default interface QuestionFacadeInterface {
    createQuestion(
        input: CreateQuestionFacadeInputDto
    ): Promise<CreateQuestionFacadeOutputDto>;

    findAllQuestions(
        input: FindAllQuestionsFacadeInputDto
    ): Promise<FindAllQuestionsFacadeOutputDto>;

    findByIdQuestion(
        input: FindByIdQuestionFacadeInputDto
    ): Promise<FindByIdQuestionFacadeOutputDto>;
}
