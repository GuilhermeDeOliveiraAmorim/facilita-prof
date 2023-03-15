import AddQuestion from "@/components/question/add";
import { Grid } from "@chakra-ui/react";
import Section from "./section";

interface IMain {
    teacherIdProps: string;
}

export default function Main(props: IMain) {
    const { teacherIdProps } = props;
    return (
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap="25px"
            padding="25px"
        >
            <Section title="Adicionar Questões" colSpan={1} component={<AddQuestion teacherIdProps={teacherIdProps} />} />
            <Section title="Criar Prova" colSpan={2} component={<AddQuestion teacherIdProps={teacherIdProps} />} />
            <Section title="Histórioco de Provas" colSpan={1} component={<AddQuestion teacherIdProps={teacherIdProps} />} />
            <Section title="Lista de Questões" colSpan={2} component={<AddQuestion teacherIdProps={teacherIdProps} />} />
        </Grid>
    )
}
