import Exam from "../entity/exam.entity";

export default interface ExamRepositoryInterface {
    add(exam: Exam): Promise<void>;
    find(id: string): Promise<Exam>;
}
