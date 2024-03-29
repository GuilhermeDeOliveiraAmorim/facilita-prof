import { FindExamByTeacherIdUseCase } from '@/@core/application/exam/find-exam-by-teacher-id.usecase';
import { FindAllQuestionsUseCase } from '@/@core/application/question/find-all-questions.usecase';
import { Exam } from '@/@core/domain/entities/exam';
import { Question } from '@/@core/domain/entities/question';
import { ExamHttpGateway } from '@/@core/infra/gateways/exam.http.getway';
import { QuestionHttpGateway } from '@/@core/infra/gateways/question.http.gateway';
import Main from '@/components/workspace/main';
import Menu from '@/components/workspace/menu';
import Perfil from '@/components/workspace/perfil';
import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FindTeacherUseCase } from '../@core/application/teacher/find-teacher.usecase';
import { TeacherHttpGateway } from '../@core/infra/gateways/teacher.http.gateway';
import { http } from '../utils/http';

type ITeacher = {
    teacher: {
        teacher: {
            _id: string;
            _name: string;
            _username: string;
        }
    },
    questions: {
        questions: Question[]
    },
    exams: Exam[]
};

export default function Workspace(props: ITeacher) {
    const { teacher, questions, exams } = props;
    return (
        <Box
            height="100vh"
            backgroundColor="#F1FAEE"
            overflow="auto"
        >
            <Perfil name={teacher.teacher._name} picture={"https://bit.ly/dan-abramov"} />
            <Menu />
            <Main teacherIdProps={teacher.teacher._id} questions={questions.questions} exams={exams} />
        </Box>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {

    const teacherId = context.req.cookies.teacher;

    const gatewayTeacher = new TeacherHttpGateway(http);
    const useCase = new FindTeacherUseCase(gatewayTeacher);
    const teacher = await useCase.execute(teacherId);

    const gatewayQuestion = new QuestionHttpGateway(http);
    const useCaseFindAll = new FindAllQuestionsUseCase(gatewayQuestion);
    const questions = await useCaseFindAll.execute();

    const gatewayExam = new ExamHttpGateway(http);
    const useCaseFindExamByTeacherId = new FindExamByTeacherIdUseCase(gatewayExam);
    const exams = await useCaseFindExamByTeacherId.execute(teacherId);

    return {
        props: {
            teacher: teacher,
            questions: questions,
            exams: exams
        }
    };
}