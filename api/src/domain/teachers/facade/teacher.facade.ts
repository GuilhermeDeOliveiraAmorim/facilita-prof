import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import TeacherFacadeInterface, {
    CreateTeacherFacadeInputDto,
    CreateTeacherFacadeOutputDto,
    FindTeacherFacadeInputDto,
    FindTeacherFacadeOutputDto,
    FindTeachersFacadeInputDto,
    FindTeachersFacadeOutputDto,
} from "./teacher.facade.interface";

export interface UseCaseProps {
    createTeacherUseCase: UseCaseInterface;
    findTeacherUseCase: UseCaseInterface;
    findTeachersUseCase: UseCaseInterface;
}

export default class TeacherFacade implements TeacherFacadeInterface {
    private _createTeacherUseCase: UseCaseInterface;
    private _findTeacherUseCase: UseCaseInterface;
    private _findTeachersUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createTeacherUseCase = useCaseProps.createTeacherUseCase;
        this._findTeacherUseCase = useCaseProps.findTeacherUseCase;
        this._findTeachersUseCase = useCaseProps.findTeachersUseCase;
    }

    createTeacher(
        input: CreateTeacherFacadeInputDto
    ): Promise<CreateTeacherFacadeOutputDto> {
        return this._createTeacherUseCase.execute(input);
    }

    findTeacher(
        input: FindTeacherFacadeInputDto
    ): Promise<FindTeacherFacadeOutputDto> {
        return this._findTeacherUseCase.execute(input);
    }

    findTeachers(
        input: FindTeachersFacadeInputDto
    ): Promise<FindTeachersFacadeOutputDto> {
        return this._findTeachersUseCase.execute(input);
    }
}
