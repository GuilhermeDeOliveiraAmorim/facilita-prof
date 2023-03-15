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
            id: question.data.id,
            title: question.data.title,
            content: question.data.content,
            answer: question.data.answer,
            teacherId: question.data.teacherId,
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
            teacherId: question.data.teacherId,
        });

        return findedQuestion;
    }

    async findAll(): Promise<Question[]> {
        const questions = await this.http.get("question/find/all");

        const allQuestions: Question[] = [];

        questions.data.map((question: any) => {
            allQuestions.push(question);
        });

        return allQuestions;
    }
}
