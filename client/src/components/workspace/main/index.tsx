import { Question } from "@/@core/domain/entities/question";
import AddQuestion from "@/components/question/add";
import ListQuestion from "@/components/question/list";
import { Grid } from "@chakra-ui/react";
import Section from "./section";

interface IMain {
    teacherIdProps: string,
    questions: Question[]
}

export default function Main(props: IMain) {
    const { teacherIdProps, questions } = props;
    return (
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap="25px"
            padding="25px"
        >
            <Section
                title="Adicionar Questões"
                colSpan={1}
                component={<AddQuestion buttonTitle="Adicionar" teacherIdProps={teacherIdProps} />}
            />
            <Section
                title="Criar Prova"
                colSpan={2}
                component={<AddQuestion buttonTitle="Criar" teacherIdProps={teacherIdProps} />}
            />
            <Section
                title="Histórioco de Provas"
                colSpan={1}
                component={<AddQuestion buttonTitle="Ver todas" teacherIdProps={teacherIdProps} />}
            />
            <Section
                title="Lista de Questões"
                colSpan={2}
                component={<ListQuestion questions={questions} />}
            />
        </Grid>
    )
}
