import UseCaseInterface from "../../domain/@shared/usecase/use-case.interface";
import Exam from "../../domain/exams/entity/exam.entity";
import ExamRepositoryInterface from "../../domain/exams/repository/exam.repository.interface";
import Question from "../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../domain/questions/repository/question.repository.interface";
import Teacher from "../../domain/teachers/entity/teacher.entity";
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

        const teacherProps = {
            id: input.teacher_id,
            name: teacher.name,
            username: teacher.username,
        };

        const teacherEntity = new Teacher(teacherProps);

        const questionsToAdded: Question[] = [];

        input.questions_ids.map(async (questionId) => {
            const question = await this.questionRepository.findById(
                questionId.question_id
            );

            const questionProps = {
                id: question.id,
                title: question.title,
                content: question.content,
                answer: question.answer,
                teacherId: question.teacherId,
            };

            const questionEntity = new Question(questionProps);

            questionsToAdded.push(questionEntity);
        });

        const examProps = {
            title: input.title,
            teacher: teacherEntity,
            questions: questionsToAdded,
        };

        const exam = new Exam(examProps);

        await this.examRepository.add(exam);

        return {
            id: exam.id,
            title: exam.title,
            teacher: teacher,
            questions: questionsToAdded,
        };
    }
}
