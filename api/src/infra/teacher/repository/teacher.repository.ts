import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import Teacher from "../../../domain/teachers/entity/teacher.entity";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class TeacherRepository implements TeacherRepositoryInterface {
    async add(teacher: Teacher): Promise<void> {
        await prisma.teacher.create({
            data: {
                name: teacher.name,
                username: teacher.username,
            },
        });
    }

    async find(id: string): Promise<Teacher> {
        const teacher = await prisma.teacher.findFirst({
            where: { id: id },
        });

        if (!teacher) {
            throw new Error(`Teacher with id ${id} not found`);
        }

        const teacherProps = {
            id: teacher.id,
            name: teacher.name,
            username: teacher.username,
        };

        return new Teacher(teacherProps);
    }

    async findAll(): Promise<Teacher[]> {
        const teachersDb = await prisma.teacher.findMany();

        const teachers = teachersDb.map(
            (teacher: any) =>
                new Teacher({
                    id: teacher.id,
                    name: teacher.name,
                    username: teacher.username,
                })
        );

        return teachers;
    }

    async findByTeacherUsername(username: string): Promise<Teacher> {
        const teachersDb = await prisma.teacher.findFirst({
            where: { username: username },
        });

        if (!teachersDb) {
            throw new Error(`Teacher with username ${username} not found`);
        }

        const teacherProps = {
            id: teachersDb.id,
            name: teachersDb.name,
            username: teachersDb.username,
        };

        return new Teacher(teacherProps);
    }

    async verifyTeacherUsername(username: string): Promise<boolean> {
        const teachersDb = await prisma.teacher.findFirst({
            where: { username: username },
        });

        if (teachersDb) {
            return true;
        } else {
            return false;
        }
    }
}
