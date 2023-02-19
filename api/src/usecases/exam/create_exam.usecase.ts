import UseCaseInterface from "../../domain/@shared/usecase/use-case.interface";
import Exam from "../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../domain/exams/repository/exam.repository.interface";
import Question from "../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../domain/questions/repository/question.repository.interface";
import TeacherRepositoryInterface from "../../domain/teachers/repository/teacher.repository.interface";
import { InputCreateExamDto, OutputCreateExamDto } from "./create_exam.dto";

export default class CreateExamUseCase implements UseCaseInterface {
    private examRepository: ExamRepositoryInterface;
    private questionRepository: QuestionRepositoryInterface;
    private teacherRepository: TeacherRepositoryInterface;

    constructor(
        examRepository: ExamRepositoryInterface,
        questionRepository: QuestionRepositoryInterface,
        teacherRepository: TeacherRepositoryInterface
    ) {
        this.examRepository = examRepository;
        this.questionRepository = questionRepository;
        this.teacherRepository = teacherRepository;
    }

    async execute(input: InputCreateExamDto): Promise<OutputCreateExamDto> {
        const teacher = await this.teacherRepository.find(input.teacher_id);

        const questions = await this.questionRepository.findAll({});

        const questionsToAdded: Question[] = [];

        questions.map((question) => {
            input.questions_ids.map((questionToAdded) => {
                if (question.id === questionToAdded.question_id) {
                    questionsToAdded.push(question);
                }
            });
        });

        const examProps = {
            title: input.title,
            teacher: teacher,
            questions: questionsToAdded,
        };

        const exam = new Exam(examProps);

        await this.examRepository.add(exam);

        const output: OutputCreateExamDto = null;

        output.id = exam.id;
        output.title = exam.title;
        output.teacher = exam.teacher;
        output.questions = exam.questions;

        return output;
    }
}
