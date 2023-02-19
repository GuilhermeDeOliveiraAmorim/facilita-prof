import UseCaseInterface from "../../../domain/@shared/usecase/use-case.interface";
import Exam from "../../../domain/exams/entity/exam.entity";
import Question from "../../../domain/questions/entity/question.entity";
import QuestionRepositoryInterface from "../../../domain/questions/repository/question.repository.interface";
import TeacherRepositoryInterface from "../../../domain/teachers/repository/teacher.repository.interface";
import { InputCreateExamDto, OutputCreateExamDto } from "./create_exam.dto";

export default class CreateTeacherExamUseCase implements UseCaseInterface {
    private teacherRepository: TeacherRepositoryInterface;
    private questionRepository: QuestionRepositoryInterface;

    constructor(
        teacherRepository: TeacherRepositoryInterface,
        questionRepository: QuestionRepositoryInterface
    ) {
        this.teacherRepository = teacherRepository;
        this.questionRepository = questionRepository;
    }

    async execute(input: InputCreateExamDto): Promise<OutputCreateExamDto> {
        const teacher = await this.teacherRepository.find(input.teacher_id);

        const questions = await this.questionRepository.findAll({});

        const questionsSelected: Question[] = [];

        questions.forEach((question) => {
            input.questions_ids.forEach((id) => {
                if (question.id === id.question_id) {
                    questionsSelected.push(question);
                }
            });
        });

        const examProps = {
            title: input.examInfo.title,
            teacher: teacher,
            questions: questionsSelected,
        };

        const exam = new Exam(examProps);

        const output: OutputCreateExamDto = {
            exam: exam,
        };

        return output;
    }
}
