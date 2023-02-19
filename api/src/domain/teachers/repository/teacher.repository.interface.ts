import Exam from "../../exams/entity/exam.entity";
import Question from "../../questions/entity/question.entity";
import Teacher from "../entity/teacher.entity";

export default interface TeacherRepositoryInterface {
    add(teacher: Teacher): Promise<void>;

    find(id: string): Promise<Teacher>;

    createExam(
        teacher: Teacher,
        exam: Exam,
        questions: Question[]
    ): Promise<Exam>;
}
