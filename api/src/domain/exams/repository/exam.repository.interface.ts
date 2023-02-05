import Exam from "../entity/exam.entity";

export default interface ExamRepositoryInterface {
    add(exam: Exam): Promise<void>;
}
