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
            id: teacher.data.id,
            name: teacher.data.name,
            username: teacher.data.username,
        });

        return newTeacher;
    }

    async find(id: string): Promise<Teacher> {
        const teacher = await this.http.get(`/teacher/find/${id}`);
        return teacher.data;
    }

    async findAll(): Promise<Teacher[] | void> {
        return this.http.get<Teacher[]>("/find/all").then((response) => {
            response.data.map((teacher) => {
                new Teacher({
                    id: teacher.id,
                    name: teacher.name,
                    username: teacher.username,
                });
            });
        });
    }
}
