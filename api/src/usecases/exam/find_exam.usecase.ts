import UseCaseInterface from "../../domain/@shared/usecase/use-case.interface";
import ExamRepositoryInterface from "../../domain/exams/repository/exam.repository.interface";
import { FindExamInputDto, FindExamOutputDto } from "./find_exam.dto";

export default class FindExamUseCase implements UseCaseInterface {
    private examRepository: ExamRepositoryInterface;

    constructor(examRepository: ExamRepositoryInterface) {
        this.examRepository = examRepository;
    }

    async execute(input: FindExamInputDto): Promise<FindExamOutputDto> {
        const exam = await this.examRepository.find(input.id);

        return {
            id: exam.id,
            title: exam.title,
            teacher: exam.teacher,
            questions: exam.questions,
        };
    }
}
