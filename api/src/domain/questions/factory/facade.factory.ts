import QuestionRepository from "../../../infra/question/repository/question.repository";
import CreateQuestionUseCase from "../../../app/usecases/question/create_question/create_question.usecase";
import QuestionFacade from "../facade/question.facade";

export default class QuestionFacadeFactory {
    static create() {
        const questionRepository = new QuestionRepository();
        const createQuestionUseCase = new CreateQuestionUseCase(
            questionRepository
        );
        const questionFacade = new QuestionFacade({
            createUseCase: createQuestionUseCase,
        });

        return questionFacade;
    }
}
