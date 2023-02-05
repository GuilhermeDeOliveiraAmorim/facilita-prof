import Question from "../entity/question.entity";

export default interface QuestionRepositoryInterface {
    add(question: Question): Promise<void>;
}
