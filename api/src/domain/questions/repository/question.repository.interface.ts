import Question from "../entity/question.entity";

export default interface QuestionRepositoryInterface {
    add(question: Question): Promise<void>;
    // find(id: string): Promise<Teacher>;
    // findAll({}): Promise<Teacher[]>;
    // findByTeacherUsername(username: string): Promise<Teacher>;
    // verifyTeacherUsername(username: string): Promise<boolean>;
}
