import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Teacher from "../../../../domain/teachers/entity/teacher.entity";
import TeacherRepositoryInterface from "../../../../domain/teachers/repository/teacher.repository.interface";
import {
    InputCreateTeacherExamDto,
    OutputCreateTeacherExamDto,
} from "./create_teacher_exam.dto";

export default class CreateTeacherExamUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;

    constructor(teacherRepository: TeacherRepositoryInterface) {
        this.teacherRepository = teacherRepository;
    }

    async execute(
        input: InputCreateTeacherExamDto
    ): Promise<OutputCreateTeacherExamDto> {
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
