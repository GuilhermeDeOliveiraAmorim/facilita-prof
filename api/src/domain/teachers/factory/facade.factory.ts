import TeacherRepository from "../../../infra/teacher/repository/teacher.repository";
import CreateTeacherUseCase from "../../../app/usecases/teacher/create_teacher/create_teacher.usecase";
import TeacherFacade from "../facade/teacher.facade";
import ExamRepository from "../../../infra/exam/repository/exam.repository";
import QuestionRepository from "../../../infra/question/repository/question.repository";

export default class TeacherFacadeFactory {
    static create() {
        const teacherRepository = new TeacherRepository();
        const examRepository = new ExamRepository();
        const questionRepository = new QuestionRepository();
        const createTeacherUseCase = new CreateTeacherUseCase(
            teacherRepository,
            examRepository,
            questionRepository
        );
        const teacherFacade = new TeacherFacade({
            createUseCase: createTeacherUseCase,
        });

        return teacherFacade;
    }
}
