import { Box, Button, Flex, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { CreateQuestionUseCase } from "../../../@core/application/question/create-question.usecase";
import { QuestionHttpGateway } from "../../../@core/infra/gateways/question.http.gateway";
import { http } from "../../../utils/http";

interface IAddQuestion {
    teacherIdProps: string;
    buttonTitle: string;
}

export default function AddQuestion(props: IAddQuestion) {
    const { teacherIdProps, buttonTitle } = props;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [answer, setAnswer] = useState("");
    const [teacherId, setTeacherId] = useState("");

    const toast = useToast();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();


        if (title === "") {
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

        setTeacherId(teacherIdProps);

        const input = {
            title: title,
            content: content,
            answer: answer,
            teacherId: teacherId,
        };

        try {
            const gateway = new QuestionHttpGateway(http);
            const useCaseCreate = new CreateQuestionUseCase(gateway);
            await useCaseCreate.execute(input.title, input.content, input.answer, input.teacherId);

            setTitle("");
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

    return (
        <Box width="100%">
            <form onSubmit={handleSubmit}>
                <FormControl marginBottom="20px">
                    <FormLabel>Título</FormLabel>
                    <Input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
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
                        {buttonTitle}
                    </Button>
                </Flex>

            </form>
        </Box>
    )
}
