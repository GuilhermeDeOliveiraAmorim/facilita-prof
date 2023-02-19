import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";
import { InputFindExamDto, OutputFindExamDto } from "./find_exam.dto";

export default class FindExamUseCase implements UseCaseInterface {
    private examRepository: ExamRepositoryInterface;

    constructor(examRepository: ExamRepositoryInterface) {
        this.examRepository = examRepository;
    }

    async execute(input: InputFindExamDto): Promise<OutputFindExamDto> {
        const exam = await this.examRepository.find(input.id);

        return {
            id: exam.id,
            title: exam.title,
            teacher: exam.teacher,
            questions: exam.questions,
        };
    }
}
