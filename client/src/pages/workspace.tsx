import { FindAllQuestionsUseCase } from '@/@core/application/question/find-all-questions.usecase';
import { Question } from '@/@core/domain/entities/question';
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
    }
};

export default function Workspace(props: ITeacher) {
    const { teacher, questions } = props;
    return (
        <Box
            height="100vh"
            backgroundColor="#F1FAEE"
            overflow="auto"
        >
            <Perfil name={teacher.teacher._name} picture={"https://bit.ly/dan-abramov"} />
            <Menu />
            <Main teacherIdProps={teacher.teacher._id} questions={questions.questions} />
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

    return {
        props: {
            teacher: teacher,
            questions: questions
        }
    };
}