import { AxiosInstance } from "axios";
import { Question } from "../../domain/entities/question";
import { QuestionGateway } from "../../domain/gateways/question.gateway";

export class QuestionHttpGateway implements QuestionGateway {
    constructor(private http: AxiosInstance) {}

    async create(
        title: string,
        content: string,
        answer: string,
        teacherId: string
    ): Promise<Question> {
        const input = {
            title: title,
            content: content,
            answer: answer,
            teacherId: teacherId,
        };

        const question = await this.http.post("/question", input);

        const newQuestion = new Question({
            _id: question.data.id,
            _title: question.data.title,
            _content: question.data.content,
            _answer: question.data.answer,
            _teacherId: question.data.teacherId,
        });

        return newQuestion;
    }

    async find(id: string): Promise<Question> {
        const question = await this.http.get(`/question/find/${id}`);

        const findedQuestion = new Question({
            _id: question.data.id,
            _title: question.data.title,
            _content: question.data.content,
            _answer: question.data.answer,
            _teacherId: question.data.teacherId,
        });

        return findedQuestion;
    }

    async findAll(): Promise<Question[]> {
        const questions = await this.http.get("/question/find/all");

        return questions.data;
    }
}
