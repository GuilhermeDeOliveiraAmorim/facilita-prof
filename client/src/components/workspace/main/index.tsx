import { Exam } from "@/@core/domain/entities/exam";
import { Question } from "@/@core/domain/entities/question";
import AddExam from "@/components/exam/add";
import ListExam from "@/components/exam/list";
import AddQuestion from "@/components/question/add";
import ListQuestion from "@/components/question/list";
import { Flex, Grid } from "@chakra-ui/react";
import Section from "./section";

interface IMain {
    teacherIdProps: string,
    questions: Question[],
    exams: Exam[]
}

export default function Main(props: IMain) {
    const { teacherIdProps, questions, exams } = props;
    return (
        <Grid
            templateColumns="1fr 2fr"
            gap="25px"
            padding="25px"
        >
            <Flex flexDirection="column" gap="25px">
                <Section
                    title="Adicionar Questões"
                    component={<AddQuestion buttonTitle="Adicionar" teacherIdProps={teacherIdProps} />}
                />
                <Section
                    title="Histórioco de Provas"
                    component={<ListExam exams={exams} />}
                />
            </Flex>
            <Flex flexDirection="column" gap="25px">
                <Section
                    title="Criar Prova"
                    component={<AddExam buttonTitle="Criar" teacherIdProps={teacherIdProps} questions={questions} />}
                />
                <Section
                    title="Lista de Questões"
                    component={<ListQuestion questions={questions} />}
                />
            </Flex>
        </Grid>
    )
}
