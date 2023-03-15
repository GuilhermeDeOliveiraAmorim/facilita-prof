import { Box, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FindTeacherUseCase } from '../@core/application/teacher/find-teacher.usecase';
import { TeacherHttpGateway } from '../@core/infra/gateways/teacher.http.gateway';
import AddQuestion from '../components/question/add';
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
        <Box height="100vh">
            <Perfil name={teacher.teacher._name} picture={"https://bit.ly/dan-abramov"} />
            <Menu />
            <Box backgroundColor="white" padding="5px">
                <Text fontSize='md'>Cadastrar Questão</Text>
                <AddQuestion teacherIdProps={teacher.teacher._id} />
            </Box>
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