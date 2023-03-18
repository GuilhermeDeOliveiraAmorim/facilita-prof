import { Exam } from "@/@core/domain/entities/exam";
import { DownloadIcon } from '@chakra-ui/icons';
import { Link, Stack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

interface IListExam {
    exams: Exam[]
}

export default function ListExam(props: IListExam) {
    const { exams } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [examItem, setExamItem] = useState<Exam | undefined>();

    const handleSizeClick = (examItem: Exam) => {
        setExamItem(examItem);
        onOpen()
    }

    return (
        <Stack width="100%" height="100%" backgroundColor="white">
            <Table variant='striped' colorScheme='teal' width="100%">
                <Thead>
                    <Tr>
                        <Th>Título</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {exams?.map(exam =>
                        <Tr key={exam._id}>
                            <Td>{exam._title}</Td>
                            <Td>
                                <Link colorScheme='blue' href="/pdf">
                                    <DownloadIcon />
                                </Link>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Stack>
    )
}