import TeacherRepository from "../../../infra/teacher/repository/teacher.repository";
import CreateTeacherUseCase from "../../../app/usecases/teacher/create_teacher/create_teacher.usecase";
import TeacherFacade from "../facade/teacher.facade";

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
