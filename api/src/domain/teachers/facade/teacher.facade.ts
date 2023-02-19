import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import TeacherFacadeInterface, {
    CreateTeacherExamInputDto,
    CreateTeacherExamOutputDto,
    CreateTeacherFacadeInputDto,
    CreateTeacherFacadeOutputDto,
    FindTeacherFacadeInputDto,
    FindTeacherFacadeOutputDto,
} from "./teacher.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
}

export default class TeacherFacade implements TeacherFacadeInterface {
    private _createUseCase: UseCaseInterface;
    private _createTeacherExam: UseCaseInterface;
    private _findUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
        this._createTeacherExam = useCaseProps.createUseCase;
        this._findUseCase = useCaseProps.createUseCase;
    }

    createTeacher(
        input: CreateTeacherFacadeInputDto
    ): Promise<CreateTeacherFacadeOutputDto> {
        return this._createUseCase.execute(input);
    }

    createExam(
        input: CreateTeacherExamInputDto
    ): Promise<CreateTeacherExamOutputDto> {
        return this._createTeacherExam.execute(input);
    }

    findTeacher(
        input: FindTeacherFacadeInputDto
    ): Promise<FindTeacherFacadeOutputDto> {
        return this._findUseCase.execute(input);
    }
}
