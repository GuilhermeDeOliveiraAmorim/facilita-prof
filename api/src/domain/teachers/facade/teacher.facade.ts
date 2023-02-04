import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import TeacherFacadeInterface, {
    CreateTeacherFacadeInputDto,
    CreateTeacherFacadeOutputDto,
} from "./teacher.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface;
}

export default class TeacherFacade implements TeacherFacadeInterface {
    private _createUseCase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase;
    }

    createTeacher(
        input: CreateTeacherFacadeInputDto
    ): Promise<CreateTeacherFacadeOutputDto> {
        return this._createUseCase.execute(input);
    }
}
