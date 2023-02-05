import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import Exam from "../../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../../domain/exams/repository/exam.repository.interface";
import Question from "../../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
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
        const examProps = {
            title: input.title,
            teacher: input.teacher,
            questions: input.questions,
        };

        const exam = new Exam(examProps);
        const question = new Question(examProps.questions[0]);

        await this.examRepository.add(exam);
        await this.questionRepository.add(question);

        return {
            id: exam.id,
            title: exam.title,
            teacher: exam.teacher,
            questions: exam.questions,
        };
    }
}
