import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import ExamFacadeInterface, {
    CreateExamFacadeInputDto,
    CreateExamFacadeOutputDto,
    FindExamByTeacherIdFacadInputDto,
    FindExamByTeacherIdFacadOutputDto,
    FindExamFacadeInputDto,
    FindExamFacadeOutputDto,
} from "./exam.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
    findExamUseCase: UseCaseInterface;
    findExamByTeacherIdUseCase: UseCaseInterface;
}

export default class ExamFacade implements ExamFacadeInterface {
    private _createUseCase: UseCaseInterface;
    private _findExamUseCase: UseCaseInterface;
    private _findExamByTeacherIdUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
        this._findExamUseCase = useCaseProps.findExamUseCase;
        this._findExamByTeacherIdUseCase =
            useCaseProps.findExamByTeacherIdUseCase;
    }

    createExam(
        input: CreateExamFacadeInputDto
    ): Promise<CreateExamFacadeOutputDto> {
        return this._createUseCase.execute(input);
    }

    findExam(input: FindExamFacadeInputDto): Promise<FindExamFacadeOutputDto> {
        return this._findExamUseCase.execute(input);
    }

    findExamByTeacherId(
        input: FindExamByTeacherIdFacadInputDto
    ): Promise<FindExamByTeacherIdFacadOutputDto> {
        return this._findExamByTeacherIdUseCase.execute(input);
    }
}
