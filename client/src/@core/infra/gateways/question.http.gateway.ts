import { AxiosInstance } from "axios";
import { Question } from "../../domain/entities/question";
import { QuestionGateway } from "../../domain/gateways/question.gateway";

export class QuestionHttpGateway implements QuestionGateway {
    constructor(private http: AxiosInstance) {}

    async create(
        title: string,
        content: string,
        answer: string
    ): Promise<Question> {
        const question = await this.http.post("/question", {
            title: title,
            content: content,
            answer: answer,
        });

        const newQuestion = new Question({
            id: question.data.id,
            title: question.data.title,
            content: question.data.content,
            answer: question.data.answer,
        });

        return newQuestion;
    }

    async find(id: string): Promise<Question> {
        const question = await this.http.get(`/question/find/${id}`);

        const findedQuestion = new Question({
            id: question.data.id,
            title: question.data.title,
            content: question.data.content,
            answer: question.data.answer,
        });

        return findedQuestion;
    }

    async findAll(): Promise<void | Question[]> {
        return await this.http
            .get<Question[]>("question/find/all")
            .then((response) => {
                response.data.map((question) => {
                    new Question({
                        id: question.id,
                        title: question.title,
                        content: question.content,
                        answer: question.answer,
                    });
                });
            });
    }
}
