import Main from '@/components/workspace/main';
import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FindTeacherUseCase } from '../@core/application/teacher/find-teacher.usecase';
import { TeacherHttpGateway } from '../@core/infra/gateways/teacher.http.gateway';
import Menu from '../components/workspace/menu';
import Perfil from '../components/workspace/perfil';
import { http } from '../utils/http';

type ITeacher = {
    teacher: {
        teacher: {
            _id: string;
            _name: string;
            _username: string;
        }
    };
};

export default function Workspace(props: ITeacher) {
    const { teacher } = props;
    return (
        <Box
            height="100vh"
            backgroundColor="#F1FAEE"
            overflow="auto"
        >
            <Perfil name={teacher.teacher._name} picture={"https://bit.ly/dan-abramov"} />
            <Menu />
            <Main teacherIdProps={teacher.teacher._id} />
        </Box>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {

    const teacherId = context.req.cookies.teacher;

    const gateway = new TeacherHttpGateway(http);
    const useCase = new FindTeacherUseCase(gateway);
    const teacher = await useCase.execute(teacherId);

    return {
        props: {
            teacher: teacher
        }
    };
}