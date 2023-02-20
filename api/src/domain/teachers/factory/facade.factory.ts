import TeacherRepository from "../../../infra/teacher/repository/teacher.repository";
import TeacherFacade from "../facade/teacher.facade";
import CreateTeacherUseCase from "../../../usecases/teacher/create_teacher/create_teacher.usecase";
import FindTeacherUseCase from "../../../usecases/teacher/find_teacher/find_teacher";
import FindTeachersUseCase from "../../../usecases/teacher/find_teachers/find_teachers";

export default class TeacherFacadeFactory {
    static create() {
        const teacherRepository = new TeacherRepository();

        const createTeacherUseCase = new CreateTeacherUseCase(
            teacherRepository
        );

        const findTeacherUseCase = new FindTeacherUseCase(teacherRepository);

        const findTeachersUseCase = new FindTeachersUseCase(teacherRepository);

        const teacherFacade = new TeacherFacade({
            createTeacherUseCase: createTeacherUseCase,
            findTeacherUseCase: findTeacherUseCase,
            findTeachersUseCase: findTeachersUseCase,
        });

        return teacherFacade;
    }
}
