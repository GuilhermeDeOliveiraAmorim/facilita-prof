import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import ExamFacadeInterface, {
    CreateExamFacadeInputDto,
    CreateExamFacadeOutputDto,
} from "./exam.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
}

export default class ExamFacade implements ExamFacadeInterface {
    private _createUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
    }

    createExam(
        input: CreateExamFacadeInputDto
    ): Promise<CreateExamFacadeOutputDto> {
        return this._createUseCase.execute(input);
    }
}
