import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import Teacher from "../../../domain/teachers/entity/teacher.entity";
import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import {
    InputCreateTeacherDto,
    OutputCreateTeacherDto,
} from "./create_teacher.dto";

export default class CreateTeacherUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;

    constructor(teacherRepository: TeacherRepositoryInterface) {
        this.teacherRepository = teacherRepository;
    }

    async execute(
        input: InputCreateTeacherDto
    ): Promise<OutputCreateTeacherDto> {
        const teacherProps = {
            name: input.name,
            username: input.username,
        };

        const teacher = new Teacher(teacherProps);

        await this.teacherRepository.add(teacher);

        return {
            id: teacher.id,
            name: teacher.name,
            username: teacher.username,
        };
    }
}
