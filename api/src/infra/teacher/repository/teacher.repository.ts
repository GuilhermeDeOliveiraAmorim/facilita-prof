import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import Teacher from "../../../domain/teachers/entity/teacher.entity";
import TeacherModel from "./teacher.model";

export default class TeacherRepository implements TeacherRepositoryInterface {
  async add(teacher: Teacher): Promise<void> {
    await TeacherModel.create({
      id: teacher.id,
      name: teacher.name,
      username: teacher.username,
      password: teacher.password,
    });
  }

  async find(id: string): Promise<Teacher> {
    const teacher = await TeacherModel.findOne({
      where: { id: id },
      include: [{ all: true }],
    });

    if (!teacher) {
      throw new Error(`Teacher with id ${id} not found`);
    }

    const teacherProps = {
      id: teacher.id,
      name: teacher.name,
      username: teacher.username,
      password: teacher.password,
    };

    return new Teacher(teacherProps);
  }

  async findAll(): Promise<Teacher[]> {
    const teachersDb = await TeacherModel.findAll({ include: [{ all: true }] });

    const teachers = teachersDb.map(
      (teacher: any) =>
        new Teacher({
          id: teacher.id,
          name: teacher.name,
          username: teacher.username,
          password: teacher.password,
        })
    );

    return teachers;
  }

  async findByTeacherUsername(username: string): Promise<Teacher> {
    const teachersDb = await TeacherModel.findOne({
      where: { username: username },
      include: [{ all: true }],
    });

    if (!teachersDb) {
      throw new Error(`Teacher with username ${username} not found`);
    }

    const teacherProps = {
      id: teachersDb.id,
      name: teachersDb.name,
      username: teachersDb.username,
      password: teachersDb.password,
    };

    return new Teacher(teacherProps);
  }

  async verifyTeacherUsername(username: string): Promise<boolean> {
    const teachersDb = await TeacherModel.findOne({
      where: { username: username },
    });

    if (teachersDb) {
      return true;
    } else {
      return false;
    }
  }
}
