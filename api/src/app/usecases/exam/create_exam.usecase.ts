import { NIL } from "uuid";
import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import Exam from "../../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";
import Question from "../../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
import Teacher from "../../../domain/teachers/entity/teacher.entity";
import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
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

        const questions: Question[] = [];

        input.questions_ids.forEach(async (question_id) => {
            questions.push(
                await this.questionRepository.findById(question_id.question_id)
            );
        });

        const examProps = {
            title: input.title,
            teacher: teacher,
            questions: questions,
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
