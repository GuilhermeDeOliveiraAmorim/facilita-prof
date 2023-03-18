import { AxiosInstance } from "axios";
import { Teacher } from "../../domain/entities/teacher";
import { TeacherGateway } from "../../domain/gateways/teacher.gateway";

export class TeacherHttpGateway implements TeacherGateway {
    constructor(private http: AxiosInstance) {}

    async create(name: string, username: string): Promise<Teacher> {
        const teacher = await this.http.post("/teacher", {
            name: name,
            username: username,
        });

        const newTeacher = new Teacher({
            _id: teacher.data.id,
            _name: teacher.data.name,
            _username: teacher.data.username,
        });

        return newTeacher;
    }

    async find(id: string): Promise<Teacher> {
        const teacher = await this.http.get(`/teacher/find/${id}`);
        return teacher.data;
    }

    async findAll(): Promise<Teacher[]> {
        const teachers = await this.http.get("teacher/find/all");

        const allTeachers: Teacher[] = [];

        teachers.data.map((teacher: any) => {
            allTeachers.push(teacher);
        });

        return allTeachers;
    }
}
