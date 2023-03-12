import Question from "../entity/question.entity";

export default interface QuestionRepositoryInterface {
    add(question: Question): Promise<void>;
    findAll({}): Promise<Question[]>;
    findById(id: string): Promise<Question>;
    findAllByExamId(examId: string): Promise<Question[]>;
}
