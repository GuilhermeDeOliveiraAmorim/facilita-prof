import { MakePdfExamUseCase } from "@/@core/application/exam/make-pdf-exam.usecase";
import { Exam } from "@/@core/domain/entities/exam";
import { ExamHttpGateway } from "@/@core/infra/gateways/exam.http.getway";
import { http } from "@/utils/http";
import { DownloadIcon } from '@chakra-ui/icons';
import { Link, Stack, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface IListExam {
    exams: Exam[]
}

export default function ListExam(props: IListExam) {
    const { exams } = props;

    console.log(exams);

    async function handleLink(id: string) {
        const gatewayExam = new ExamHttpGateway(http);
        const useCaseMakePdf = new MakePdfExamUseCase(gatewayExam);
        await useCaseMakePdf.execute(id);
    }

    return (
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
                    {exams?.map(exam =>
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
    )
}