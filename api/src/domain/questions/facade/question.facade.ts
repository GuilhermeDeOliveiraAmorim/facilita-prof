import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import QuestionFacadeInterface, {
    CreateQuestionFacadeInputDto,
    CreateQuestionFacadeOutputDto,
    FindAllQuestionsFacadeInputDto,
    FindAllQuestionsFacadeOutputDto,
    FindByIdQuestionFacadeInputDto,
    FindByIdQuestionFacadeOutputDto,
} from "./question.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
    findAllQuestionsUseCase: UseCaseInterface;
    findByIdQuestionUseCase: UseCaseInterface;
}

export default class QuestionFacade implements QuestionFacadeInterface {
    private _createUseCase: UseCaseInterface;
    private _findAllQuestionsUseCase: UseCaseInterface;
    private _findByIdQuestionUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
        this._findAllQuestionsUseCase = useCaseProps.findAllQuestionsUseCase;
        this._findByIdQuestionUseCase = useCaseProps.findByIdQuestionUseCase;
    }

    findByIdQuestion(
        input: FindByIdQuestionFacadeInputDto
    ): Promise<FindByIdQuestionFacadeOutputDto> {
        return this._findByIdQuestionUseCase.execute(input);
    }

    createQuestion(
        input: CreateQuestionFacadeInputDto
    ): Promise<CreateQuestionFacadeOutputDto> {
        return this._createUseCase.execute(input);
    }

    findAllQuestions(
        input: FindAllQuestionsFacadeInputDto
    ): Promise<FindAllQuestionsFacadeOutputDto> {
        return this._findAllQuestionsUseCase.execute(input);
    }
}
