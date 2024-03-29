import { CreateExamUseCase } from "@/@core/application/exam/create-exam.usecase";
import { Question } from "@/@core/domain/entities/question";
import { ExamHttpGateway } from "@/@core/infra/gateways/exam.http.getway";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl, FormLabel, Input, Stack, Table, Tbody, Td, Th, Thead, Tr, useToast
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { http } from "../../../utils/http";

interface IAddQuestion {
    teacherIdProps: string;
    buttonTitle: string;
    questions: Question[]
}

interface IQuestionId {
    question_id: string;
}

interface IQuestionsIds {
    questions_ids: IQuestionId[]
}

export default function AddExam(props: IAddQuestion) {
    const { teacherIdProps, buttonTitle, questions } = props;

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

    const toast = useToast();

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
            await useCaseCreate.execute(input.title, input.teacher_id, input.questions_ids);

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

    return (
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
                            {questions?.map(question =>
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
                        {buttonTitle}
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}
