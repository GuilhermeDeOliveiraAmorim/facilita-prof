import AddQuestion from "@/components/question/add";
import { Grid } from "@chakra-ui/react";
import Section from "./section";

export default function Main() {
    return (
        <Grid
            templateColumns="repeat(3, 1fr)"
            gap="25px"
            padding="25px"
        >
            <Section title="Adicionar Questões" component={<AddQuestion teacherIdProps="" />} />
            <Section title="Criar Prova" component={<AddQuestion teacherIdProps="" />} />
            <Section title="Histórioco de Provas" component={<AddQuestion teacherIdProps="" />} />
        </Grid>
    )
}
