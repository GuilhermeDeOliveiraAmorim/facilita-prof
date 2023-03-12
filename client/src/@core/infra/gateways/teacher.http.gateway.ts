import { AxiosInstance } from "axios";
import { Teacher } from "../../domain/entities/teacher";
import { TeacherGateway } from "../../domain/gateways/teacher.gateway";

export class TeacherHttpGateway implements TeacherGateway {
    constructor(private http: AxiosInstance) {}

    async create(name: string, username: string): Promise<Teacher> {
        return await this.http.post("/teacher", {
            name: name,
            username: username,
        });
    }

    async find(id: string): Promise<Teacher | void> {
        return await this.http.get<Teacher>(`/teacher/find/${id}`).then(
            (response) =>
                new Teacher({
                    id: response.data.id,
                    name: response.data.name,
                    username: response.data.username,
                })
        );
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
