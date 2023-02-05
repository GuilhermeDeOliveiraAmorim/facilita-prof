import Teacher from "../entity/teacher.entity";

export default interface TeacherRepositoryInterface {
    add(teacher: Teacher): Promise<void>;
}
