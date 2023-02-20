import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import { InputFindTeacherDto, OutputFindTeacherDto } from "./find_teacher.dto";

export default class FindTeacherUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;

    constructor(teacherRepository: TeacherRepositoryInterface) {
        this.teacherRepository = teacherRepository;
    }

    async execute(input: InputFindTeacherDto): Promise<OutputFindTeacherDto> {
        const teacher = await this.teacherRepository.find(input.id);

        return {
            teacher: teacher,
        };
    }
}
