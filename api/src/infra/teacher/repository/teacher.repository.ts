import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class TeacherRepository implements TeacherRepositoryInterface {
    async add(teacher: Teacher): Promise<void> {
        await prisma.teacher.create({
            data: {
                id: teacher.id,
                name: teacher.name,
                username: teacher.username,
            },
        });
    }

    async find(id: string): Promise<Teacher> {
        const teacher = await prisma.teacher.findFirst({
            where: {
                id: id,
            },
        });
        return new Teacher(teacher);
    }

    async createExam(teacher: Teacher): Promise<void> {}
}
