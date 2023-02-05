import CreateExamUseCase from "../../../app/usecases/exam/create_exam.usecase";
import ExamRepository from "../../../infra/exam/repository/exam.repository";
import QuestionRepository from "../../../infra/question/repository/question.repository";
import TeacherRepository from "../../../infra/teacher/repository/teacher.repository";
import ExamFacade from "../facade/exam.facade";

export default class ExamFacadeFactory {
    static create() {
        const examRepository = new ExamRepository();
        const questionRepository = new QuestionRepository();
        const teacherRepository = new TeacherRepository();
        const createExamUseCase = new CreateExamUseCase(
            examRepository,
            questionRepository,
            teacherRepository
        );
        const examFacade = new ExamFacade({
            createUseCase: createExamUseCase,
        });

        return examFacade;
    }
}
