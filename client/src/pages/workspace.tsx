import { GetServerSideProps } from 'next';
import { FindTeacherUseCase } from '../@core/application/teacher/find-teacher.usecase';
import { TeacherHttpGateway } from '../@core/infra/gateways/teacher.http.gateway';
import AddQuestion from '../components/question/add';
import { http } from '../utils/http';

type ITeacher = {
    id: string;
    name: string;
    username: string;
};

export default function Workspace<NextPage>(props: ITeacher) {
    const { id, name, username } = props;
    return (
        <div>
            <h1>Olá, {name}!</h1>
            <section>
                <h2>Cadastrar Questão</h2>
                <AddQuestion />
            </section>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {

    const teacherId = context.req.cookies.teacher;

    const gateway = new TeacherHttpGateway(http);
    const useCase = new FindTeacherUseCase(gateway);
    const teacher = await useCase.execute(teacherId);

    return {
        props: {
            id: teacher.teacher._id,
            name: teacher.teacher._name,
            username: teacher.teacher._username
        }
    };
}