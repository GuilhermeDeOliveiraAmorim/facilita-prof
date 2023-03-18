import { CreateExamUseCase } from "@/@core/application/exam/create-exam.usecase";
import { MakePdfExamUseCase } from "@/@core/application/exam/make-pdf-exam.usecase";
import { CreateQuestionUseCase } from "@/@core/application/question/create-question.usecase";
import { Exam } from "@/@core/domain/entities/exam";
import { Question } from "@/@core/domain/entities/question";
import { ExamHttpGateway } from "@/@core/infra/gateways/exam.http.getway";
import { QuestionHttpGateway } from "@/@core/infra/gateways/question.http.gateway";
import { http } from "@/utils/http";
import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Grid, GridItem, Input, Link, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

interface IMain {
    teacherIdProps: string,
    questions: Question[],
    exams: Exam[]
}

export default function Main(props: IMain) {
    const { teacherIdProps, questions, exams } = props;

    const [questionsArray, setQuestionsArray] = useState<Question[]>(questions);
    const [examsArray, setExamsArray] = useState<Exam[]>(exams);

    const [titleQuestion, setTitleQuestion] = useState("");
    const [content, setContent] = useState("");
    const [answer, setAnswer] = useState("");

    const toast = useToast();

    async function handleSubmitQuestion(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (titleQuestion === "") {
            toast({
                title: 'Error',
                description: "Please enter a title",
                status: 'error',
                duration: 10000,
                isClosable: true,
            });
            return;
        }


        if (content === "") {
            toast({
                title: 'Error',
                description: "Please enter a content",
                status: 'error',
                duration: 10000,
                isClosable: true,
            });
            return;
        }

        if (answer === "") {
            toast({
                title: 'Error',
                description: "Please enter a answer",
                status: 'error',
                duration: 10000,
                isClosable: true,
            });
            return;
        }

        const input = {
            title: titleQuestion,
            content: content,
            answer: answer,
            teacherId: teacherIdProps,
        };

        try {
            const gateway = new QuestionHttpGateway(http);
            const useCaseCreate = new CreateQuestionUseCase(gateway);
            const question = await useCaseCreate.execute(input.title, input.content, input.answer, input.teacherId);

            questionsArray.unshift(question);
            setQuestionsArray(questionsArray);

            setTitleQuestion("");
            setContent("");
            setAnswer("");

            toast({
                title: 'Success',
                description: `Question ${content} created successfully`,
                status: 'success',
                duration: 4000,
                isClosable: true,
            });
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.response.data.message,
                status: 'error',
                duration: 10000,
                isClosable: true,
            });
        }
    }

    const [titleExam, setTitleExam] = useState("");

    var questionsIds: { "question_id": string }[] = [];

    function setChecked(isChecked: boolean, questionId: string,) {
        if (isChecked === true) {
            for (var i = 0; i < questionsIds.length; i++) {
                if (questionsIds[i].question_id === questionId) {
                    toast({
                        title: 'Error',
                        description: "Questão já adicionada",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    });
                    return;
                }
            }
            questionsIds.push({ "question_id": questionId });
        }

        if (isChecked === false) {
            for (var i = 0; i < questionsIds.length; i++) {
                if (questionsIds[i].question_id === questionId) {
                    questionsIds.splice(i, 1);
                }
            }
        }
    }

    async function handleSubmitExam(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (titleExam === "") {
            toast({
                title: 'Error',
                description: "Please enter a title",
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
            return;
        }


        if (teacherIdProps === "") {
            toast({
                title: 'Error',
                description: "Missing teacher",
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
            return;
        }

        if (questionsIds.length == 0) {
            toast({
                title: 'Error',
                description: "Missing questions",
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
            return;
        }

        const input = {
            title: titleExam,
            teacher_id: teacherIdProps,
            questions_ids: questionsIds,
        };

        try {
            const gateway = new ExamHttpGateway(http);
            const useCaseCreate = new CreateExamUseCase(gateway);
            const exam = await useCaseCreate.execute(input.title, input.teacher_id, input.questions_ids);

            examsArray.unshift(exam);
            setExamsArray(examsArray);
            setTitleExam("");
            questionsIds = [];

            toast({
                title: 'Success',
                description: `Exam ${titleExam} created successfully`,
                status: 'success',
                duration: 4000,
                isClosable: true,
            });
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.response.data.message,
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        }
    }

    async function handleLink(id: string) {
        const gatewayExam = new ExamHttpGateway(http);
        const useCaseMakePdf = new MakePdfExamUseCase(gatewayExam);
        await useCaseMakePdf.execute(id);
    }

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
                        <Flex
                            width="100%"
                            backgroundColor="#1D3557"
                            rounded="20px"
                            padding="2px"
                            flexDirection="column"
                        >
                            <Text
                                backgroundColor="#457B9D"
                                roundedTop="18px"
                                padding="8px"
                                color="#F1FAEE"
                                fontWeight="black"
                            >
                                Adicionar QUestões
                            </Text>
                            <Flex
                                width="100%"
                                backgroundColor="white"
                                padding="8px"
                                roundedBottom="18px"
                            >
                                <Box width="100%">
                                    <form onSubmit={handleSubmitQuestion}>
                                        <FormControl marginBottom="20px">
                                            <FormLabel>Título</FormLabel>
                                            <Input type='text' value={titleQuestion} onChange={(event) => setTitleQuestion(event.target.value)} />
                                        </FormControl>
                                        <FormControl marginBottom="20px">
                                            <FormLabel>Pergunta</FormLabel>
                                            <Input type='text' value={content} onChange={(event) => setContent(event.target.value)} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Resposta</FormLabel>
                                            <Input type='text' value={answer} onChange={(event) => setAnswer(event.target.value)} />
                                        </FormControl>
                                        <Flex
                                            alignContent="center"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Button
                                                mt={4}
                                                type="submit"
                                                colorScheme="green"
                                            >
                                                Adicionar
                                            </Button>
                                        </Flex>
                                    </form>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </GridItem>

                <GridItem area={'add-exam'}>
                    <Flex flexDirection="column" gap="25px">
                        <Flex
                            width="100%"
                            backgroundColor="#1D3557"
                            rounded="20px"
                            padding="2px"
                            flexDirection="column"
                        >
                            <Text
                                backgroundColor="#457B9D"
                                roundedTop="18px"
                                padding="8px"
                                color="#F1FAEE"
                                fontWeight="black"
                            >
                                Criar Prova
                            </Text>
                            <Flex
                                width="100%"
                                backgroundColor="white"
                                padding="8px"
                                roundedBottom="18px"
                            >
                                <Box width="100%">
                                    <form onSubmit={handleSubmitExam}>
                                        <FormControl marginBottom="20px">
                                            <FormLabel>Título</FormLabel>
                                            <Input type='text' value={titleExam} onChange={(event) => setTitleExam(event.target.value)} />
                                        </FormControl>
                                        <Stack width="100%" height="100%" backgroundColor="white" maxHeight="160px" overflowY="scroll">
                                            <Table variant='striped' colorScheme='teal' width="100%" size='sm'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Título</Th>
                                                        <Th>Pergunta</Th>
                                                        <Th>Resposta</Th>
                                                        <Th></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {questionsArray?.map(question =>
                                                        <Tr key={question._id}>
                                                            <Td>{question._title}</Td>
                                                            <Td>{question._content}</Td>
                                                            <Td>{question._answer}</Td>
                                                            <Td>
                                                                <Checkbox
                                                                    defaultChecked={false}
                                                                    backgroundColor="white"
                                                                    padding="4px"
                                                                    rounded="4px"
                                                                    onChange={(event) => setChecked(event.target.checked, question._id)}
                                                                />
                                                            </Td>
                                                        </Tr>
                                                    )}
                                                </Tbody>
                                            </Table>
                                        </Stack>
                                        <Flex
                                            alignContent="center"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Button
                                                mt={4}
                                                type="submit"
                                                colorScheme="green"
                                            >
                                                Criar
                                            </Button>
                                        </Flex>
                                    </form>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </GridItem>

                <GridItem area={'list-exams'}>
                    <Flex
                        width="100%"
                        backgroundColor="#1D3557"
                        rounded="20px"
                        padding="2px"
                        flexDirection="column"
                    >
                        <Text
                            backgroundColor="#457B9D"
                            roundedTop="18px"
                            padding="8px"
                            color="#F1FAEE"
                            fontWeight="black"
                        >
                            Histórioco de Provas
                        </Text>
                        <Flex
                            width="100%"
                            backgroundColor="white"
                            padding="8px"
                            roundedBottom="18px"
                        >
                            <Stack width="100%" height="100%" backgroundColor="white" maxHeight="300px"
                                overflowY="scroll">
                                <Table variant='striped' colorScheme='teal' width="100%">
                                    <Thead>
                                        <Tr>
                                            <Th>Título</Th>
                                            <Th>Criada em</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {examsArray?.map(exam =>
                                            <Tr key={exam._id}>
                                                <Td>{exam._title}</Td>
                                                <Td>{exam._createdAt}</Td>
                                                <Td>
                                                    <Link href={`/${exam._id}.pdf`} onClick={() => handleLink(exam._id)}>
                                                        <DownloadIcon />
                                                    </Link>
                                                </Td>
                                            </Tr>
                                        )}
                                    </Tbody>
                                </Table>
                            </Stack>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </div >
    )
}
