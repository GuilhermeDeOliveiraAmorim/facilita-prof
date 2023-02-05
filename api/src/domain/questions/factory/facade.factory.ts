import QuestionRepository from "../../../infra/question/repository/question.repository";
import CreateQuestionUseCase from "../../../app/usecases/question/create_question/create_question.usecase";
import QuestionFacade from "../facade/question.facade";
import FindAllQuestionsUseCase from "../../../app/usecases/question/find_all_question/find_all_question.usecase";
import FindByIdQuestionUseCase from "../../../app/usecases/question/find_by_id_question/find_by_id_question.usecase";

export default class QuestionFacadeFactory {
    static create() {
        const questionRepository = new QuestionRepository();

        const createQuestionUseCase = new CreateQuestionUseCase(
            questionRepository
        );

        const findAllQuestionsUseCase = new FindAllQuestionsUseCase(
            questionRepository
        );

        const findByIdQuestionUseCase = new FindByIdQuestionUseCase(
            questionRepository
        );

        const questionFacade = new QuestionFacade({
            createUseCase: createQuestionUseCase,
            findAllQuestionsUseCase: findAllQuestionsUseCase,
            findByIdQuestionUseCase: findByIdQuestionUseCase,
        });

        return questionFacade;
    }
}
