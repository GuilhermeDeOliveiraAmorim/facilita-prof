import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
import {
    InputFindAllQuestionsByExamIdDto,
    OutputFindAllQuestionsByExamIdDto,
} from "./find_all_questions_by_exam_id.dto";

export default class FindAllQuestionsByExamIdUseCase
    implements UseCaseInterface
{
    private questionRepository: QuestionRepositoryInterface;

    constructor(questionRepository: QuestionRepositoryInterface) {
        this.questionRepository = questionRepository;
    }

    async execute(
        input: InputFindAllQuestionsByExamIdDto
    ): Promise<OutputFindAllQuestionsByExamIdDto> {
        const questions = await this.questionRepository.findAllByExamId(
            input.examId
        );

        return {
            questions: questions,
        };
    }
}
