import TeacherRepository from "../../../infra/teacher/repository/teacher.repository";
import TeacherFacade from "../facade/teacher.facade";
import CreateTeacherUseCase from "../../../usecases/teacher/create_teacher/create_teacher.usecase";

export default class TeacherFacadeFactory {
    static create() {
        const teacherRepository = new TeacherRepository();

        const createTeacherUseCase = new CreateTeacherUseCase(
            teacherRepository
        );

        const teacherFacade = new TeacherFacade({
            createUseCase: createTeacherUseCase,
        });

        return teacherFacade;
    }
}
