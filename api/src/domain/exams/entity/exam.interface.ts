import Question from "../../questions/entity/question.entity";
import Teacher from "../../teachers/entity/teacher.entity";

export default interface ExamInterface {
    get id(): string;
    get title(): string;
    get teacher(): Teacher;
    get questions(): Question[];
    set questions(questions: Question[]);
}
