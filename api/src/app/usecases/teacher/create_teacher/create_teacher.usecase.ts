import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Teacher from "../../../../domain/teachers/entity/teacher.entity";
import TeacherRepositoryInterface from "../../../../domain/teachers/repository/teacher.repository.interface";
import {
    InputCreateTeacherDto,
    OutputCreateTeacherDto,
} from "./create_teacher.dto";

export default class CreateUserUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;

    constructor(userRepository: TeacherRepositoryInterface) {
        this.teacherRepository = userRepository;
    }

    async execute(
        input: InputCreateTeacherDto
    ): Promise<OutputCreateTeacherDto> {
        const teacherProps = {
            name: input.username,
            username: input.username,
        };

        const teacher = new Teacher(teacherProps);

        await this.teacherRepository.add(teacher);

        return {
            id: teacher.id,
            username: teacher.username,
        };
    }
}
