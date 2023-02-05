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
}
