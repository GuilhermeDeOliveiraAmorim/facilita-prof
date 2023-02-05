import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Question from "../../../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../../../domain/questions/repository/question.repository.interface";
import {
    InputFindByIdQuestionDto,
    OutputFindByIdQuestionDto,
} from "./find_by_id_question.dto";

export default class FindByIdQuestionUseCase implements UseCaseInterface {
    private questionRepository: QuestionRepositoryInterface;

    constructor(questionRepository: QuestionRepositoryInterface) {
        this.questionRepository = questionRepository;
    }

    async execute(
        input: InputFindByIdQuestionDto
    ): Promise<OutputFindByIdQuestionDto> {
        const question = await this.questionRepository.findById(input.id);

        return {
            question: question,
        };
    }
}
