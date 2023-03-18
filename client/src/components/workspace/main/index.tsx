import { Exam } from "@/@core/domain/entities/exam";
import { Question } from "@/@core/domain/entities/question";
import AddExam from "@/components/exam/add";
import ListExam from "@/components/exam/list";
import AddQuestion from "@/components/question/add";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Section from "./section";

interface IMain {
    teacherIdProps: string,
    questions: Question[],
    exams: Exam[]
}

export default function Main(props: IMain) {
    const { teacherIdProps, questions, exams } = props;
    return (
        <div>
            <Grid
                templateAreas={`
                    "add-questions add-exam"
                    "list-exams list-exams"
                `}
                gridTemplateColumns={'1fr 2fr'}
                gridTemplateRows={'1fr'}
                gap="25px"
                padding="25px"
            >
                <GridItem area={'add-questions'}>
                    <Flex flexDirection="column" gap="25px">
                        <Section
                            title="Adicionar Questões"
                            component={<AddQuestion buttonTitle="Adicionar" teacherIdProps={teacherIdProps} />}
                        />
                    </Flex>
                </GridItem>

                <GridItem area={'add-exam'}>
                    <Flex flexDirection="column" gap="25px">
                        <Section
                            title="Criar Prova"
                            component={<AddExam buttonTitle="Criar" teacherIdProps={teacherIdProps} questions={questions} />}
                        />
                    </Flex>
                </GridItem>

                <GridItem area={'list-exams'}>
                    <Section
                        title="Histórioco de Provas"
                        component={<ListExam exams={exams} />}
                    />
                </GridItem>
            </Grid>
        </div >
    )
}
