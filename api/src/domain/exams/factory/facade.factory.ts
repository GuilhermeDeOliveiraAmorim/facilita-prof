import ExamRepository from "../../../infra/exam/repository/exam.repository";
import QuestionRepository from "../../../infra/question/repository/question.repository";
import TeacherRepository from "../../../infra/teacher/repository/teacher.repository";
import CreateExamUseCase from "../../../usecases/exam/create_exam.usecase";
import FindExamUseCase from "../../../usecases/exam/find_exam.usecase";
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

        const findExamUseCase = new FindExamUseCase(examRepository);

        const examFacade = new ExamFacade({
            createUseCase: createExamUseCase,
            findExamUseCase: findExamUseCase,
        });

        return examFacade;
    }
}
