import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import {
    InputFindTeachersDto,
    OutputFindTeachersDto,
} from "./find_teachers.dto";

export default class FindTeachersUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;

    constructor(teacherRepository: TeacherRepositoryInterface) {
        this.teacherRepository = teacherRepository;
    }

    async execute(input: InputFindTeachersDto): Promise<OutputFindTeachersDto> {
        const teachers = await this.teacherRepository.findAll(input);

        return {
            teachers: teachers,
        };
    }
}
