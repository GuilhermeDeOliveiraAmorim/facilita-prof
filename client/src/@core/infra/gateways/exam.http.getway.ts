import { Exam } from "@/@core/domain/entities/exam";
import { ExamGateway } from "@/@core/domain/gateways/exam.gateway";
import { AxiosInstance } from "axios";

export class ExamHttpGateway implements ExamGateway {
    constructor(private http: AxiosInstance) {}

    async create(
        title: string,
        teacher_id: string,
        questions_ids: { question_id: string }[]
    ): Promise<Exam> {
        const input = {
            title: title,
            teacher_id: teacher_id,
            questions_ids: questions_ids,
        };

        const exam = await this.http.post("/exam", input);

        console.log(exam);

        const newExam = new Exam({
            _id: exam.data.id,
            _title: exam.data.title,
            _teacher: exam.data.teacher,
            _questions: exam.data.questions,
            _createdAt: exam.data.createdAt,
        });

        return newExam;
    }

    async find(id: string): Promise<Exam> {
        const exam = await this.http.get(`/exam/find/${id}`);

        const findedExam = new Exam({
            _id: exam.data.id,
            _title: exam.data.title,
            _teacher: exam.data.teacher,
            _questions: exam.data.questions,
            _createdAt: exam.data.createdAt,
        });

        return findedExam;
    }

    async findByTeacherId(teacherId: string): Promise<Exam[]> {
        const exams = await this.http.get(`/exam/find/teacher/${teacherId}`);

        var findedExams: Exam[] = [];

        exams.data.exams.map((exam: Exam) => {
            findedExams.push(exam);
        });

        return findedExams;
    }

    async makePdf(id: string): Promise<string> {
        const pdf = await this.http.get(`exam/make/pdf/${id}`);

        return pdf.data;
    }
}
