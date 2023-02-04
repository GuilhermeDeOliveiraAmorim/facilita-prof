import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import QuestionFacadeInterface, {
    CreateQuestionFacadeInputDto,
    CreateQuestionFacadeOutputDto,
} from "./question.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
}

export default class QuestionFacade implements QuestionFacadeInterface {
    private _createUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
    }

    createQuestion(
        input: CreateQuestionFacadeInputDto
    ): Promise<CreateQuestionFacadeOutputDto> {
        return this._createUseCase.execute(input);
    }
}
