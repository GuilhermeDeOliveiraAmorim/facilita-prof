import { Question } from "@/@core/domain/entities/question";
import { Checkbox, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface IListQuestion {
    questions: Question[]
}

export default function ListQuestion(props: IListQuestion) {
    const { questions } = props;
    return (
        <Stack width="100%" height="100%" backgroundColor="white">
            <Table variant='striped' colorScheme='teal' width="100%">
                <Thead>
                    <Tr>
                        <Th>Título</Th>
                        <Th>Pergunta</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {questions?.map(question =>
                        <Tr>
                            <Td>{question._title}</Td>
                            <Td>{question._content}</Td>
                            <Td>
                                <Checkbox defaultChecked={false} backgroundColor="white" padding="4px" rounded="4px" />
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Stack>

    );
}
