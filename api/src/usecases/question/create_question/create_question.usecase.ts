import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import Question from "../../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
import {
    InputCreateQuestionDto,
    OutputCreateQuestionDto,
} from "./create_question.dto";

export default class CreateQuestionUseCase implements UseCaseInterface {
    private questionRepository: QuestionRepositoryInterface;

    constructor(questionRepository: QuestionRepositoryInterface) {
        this.questionRepository = questionRepository;
    }

    async execute(
        input: InputCreateQuestionDto
    ): Promise<OutputCreateQuestionDto> {
        const questionProps = {
            title: input.title,
            content: input.content,
            answer: input.answer,
            teacherId: input.teacherId,
        };

        const question = new Question(questionProps);

        await this.questionRepository.add(question);

        return {
            id: question.id,
            title: question.title,
            content: question.content,
            answer: question.answer,
            teacherId: question.teacherId,
        };
    }
}
