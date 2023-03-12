import { Teacher } from "../entities/teacher";

export interface TeacherGateway {
    create(name: string, username: string): Promise<Teacher>;
    find(id: string): Promise<Teacher | void>;
    findAll(): Promise<Teacher[] | void>;
}
