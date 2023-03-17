import UseCaseInterface from "../../domain/@shared/usecase/use-case.interface";
import ExamRepositoryInterface from "../../domain/exams/repository/exam.repository.interface";
import {
    FindExamByTeacherIdInputDto,
    FindExamByTeacherIdOutputDto,
} from "./find_exams_by_teacher_id.dto";

export default class FindExamByTeacherIdUseCase implements UseCaseInterface {
    private examRepository: ExamRepositoryInterface;

    constructor(examRepository: ExamRepositoryInterface) {
        this.examRepository = examRepository;
    }

    async execute(
        input: FindExamByTeacherIdInputDto
    ): Promise<FindExamByTeacherIdOutputDto> {
        const exams = await this.examRepository.findExamByTeacherId(
            input.teacherId
        );

        return {
            exams,
        };
    }
}
