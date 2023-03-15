import { Teacher } from "../../domain/entities/teacher";
import { TeacherGateway } from "../../domain/gateways/teacher.gateway";
export class FindTeacherUseCase {
    constructor(private teacherGateway: TeacherGateway) {}

    async execute(id: string): Promise<Teacher> {
        return await this.teacherGateway.find(id);
    }
}
