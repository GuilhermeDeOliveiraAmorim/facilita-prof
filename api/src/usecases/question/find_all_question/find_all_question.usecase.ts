import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
import {
    InputFindAllQuestionsDto,
    OutputFindAllQuestionsDto,
} from "./find_all_question.dto";

export default class FindAllQuestionsUseCase implements UseCaseInterface {
    private questionRepository: QuestionRepositoryInterface;

    constructor(questionRepository: QuestionRepositoryInterface) {
        this.questionRepository = questionRepository;
    }

    async execute(
        input: InputFindAllQuestionsDto
    ): Promise<OutputFindAllQuestionsDto> {
        const questions = await this.questionRepository.findAll(input);

        return {
            questions: questions,
        };
    }
}
