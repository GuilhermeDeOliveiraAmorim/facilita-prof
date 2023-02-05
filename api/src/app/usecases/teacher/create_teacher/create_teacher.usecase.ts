import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import ExamRepositoryInterface from "../../../../domain/exams/repository/exam.repository.interface";
import QuestionRepositoryInterface from "../../../../domain/questions/repository/question.repository.interface";
import Teacher from "../../../../domain/teachers/entity/teacher.entity";
import TeacherRepositoryInterface from "../../../../domain/teachers/repository/teacher.repository.interface";
import {
    InputCreateTeacherDto,
    OutputCreateTeacherDto,
} from "./create_teacher.dto";

export default class CreateTeacherUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;
    private examRepository: ExamRepositoryInterface;
    private questionRepository: QuestionRepositoryInterface;

    constructor(
        teacherRepository: TeacherRepositoryInterface,
        examRepository: ExamRepositoryInterface,
        questionRepository: QuestionRepositoryInterface
    ) {
        this.teacherRepository = teacherRepository;
        this.examRepository = examRepository;
        this.questionRepository = questionRepository;
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
