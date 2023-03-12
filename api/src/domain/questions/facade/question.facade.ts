import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import QuestionFacadeInterface, {
    CreateQuestionFacadeInputDto,
    CreateQuestionFacadeOutputDto,
    FindAllQuestionsByExamIdFacadeInputDto,
    FindAllQuestionsByExamIdFacadeOutputDto,
    FindAllQuestionsFacadeInputDto,
    FindAllQuestionsFacadeOutputDto,
    FindByIdQuestionFacadeInputDto,
    FindByIdQuestionFacadeOutputDto,
} from "./question.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
    findAllQuestionsUseCase: UseCaseInterface;
    findByIdQuestionUseCase: UseCaseInterface;
    findAllQuestionsByExamIdUseCase: UseCaseInterface;
}

export default class QuestionFacade implements QuestionFacadeInterface {
    private _createUseCase: UseCaseInterface;
    private _findAllQuestionsUseCase: UseCaseInterface;
    private _findByIdQuestionUseCase: UseCaseInterface;
    private _findAllQuestionsByExamIdUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
        this._findAllQuestionsUseCase = useCaseProps.findAllQuestionsUseCase;
        this._findByIdQuestionUseCase = useCaseProps.findByIdQuestionUseCase;
        this._findAllQuestionsByExamIdUseCase =
            useCaseProps.findAllQuestionsByExamIdUseCase;
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

    findAllByExamId(
        input: FindAllQuestionsByExamIdFacadeInputDto
    ): Promise<FindAllQuestionsByExamIdFacadeOutputDto> {
        return this._findAllQuestionsByExamIdUseCase.execute(input);
    }
}
