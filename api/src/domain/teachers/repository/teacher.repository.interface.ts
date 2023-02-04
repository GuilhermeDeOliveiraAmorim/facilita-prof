import Teacher from "../entity/teacher.entity";

export default interface TeacherRepositoryInterface {
    add(teacher: Teacher): Promise<void>;
    // find(id: string): Promise<Teacher>;
    // findAll({}): Promise<Teacher[]>;
    // findByTeacherUsername(username: string): Promise<Teacher>;
    // verifyTeacherUsername(username: string): Promise<boolean>;
}
