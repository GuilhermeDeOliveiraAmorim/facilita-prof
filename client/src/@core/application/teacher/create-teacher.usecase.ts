import { Teacher } from "../../domain/entities/teacher";
import { TeacherGateway } from "../../domain/gateways/teacher.gateway";

export class CreateTeacherUseCase {
    constructor(private teacherGateway: TeacherGateway) {}

    async execute(name: string, username: string): Promise<Teacher> {
        return await this.teacherGateway.create(name, username);
    }
}
