import { Box, Button, Flex, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { setCookie } from 'cookies-next';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { CreateTeacherUseCase } from '../@core/application/teacher/create-teacher.usecase';
import { TeacherHttpGateway } from '../@core/infra/gateways/teacher.http.gateway';
import { http } from '../utils/http';

const Home: NextPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const toast = useToast();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === "") {
      toast({
        title: 'Error',
        description: "Please enter a name",
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    if (username === "") {
      toast({
        title: 'Error',
        description: "Please enter a username",
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    const input = {
      name: name,
      username: username,
    };

    try {
      const gateway = new TeacherHttpGateway(http);
      const useCase = new CreateTeacherUseCase(gateway);
      const teacher = await useCase.execute(input.name, input.username);

      setCookie("teacher", teacher._id);

      return router.push({
        pathname: `/workspace`,
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
    <Flex justifyContent="center" alignItems="center" direction="column" height="100vh" backgroundColor="#F1FAEE">
      <Text fontSize='xl' padding="10px">Bem vindo ao Facilita Prof!</Text>
      <Box padding="10px" backgroundColor="#1D3557" rounded="2xl" color="#F1FAEE">
        <form onSubmit={handleSubmit}>
          <FormControl marginBottom="20px">
            <FormLabel>Nome</FormLabel>
            <Input type='text' onChange={(event) => setName(event.target.value)} backgroundColor="#A8DADC" color="#1D3557" />
          </FormControl>
          <FormControl>
            <FormLabel>Usuário</FormLabel>
            <Input type='text' onChange={(event) => setUsername(event.target.value)} backgroundColor="#A8DADC" color="#1D3557" />
          </FormControl>
          <Button
            mt={4}
            type='submit'
            colorScheme="blue"
          >
            Cadastrar
          </Button>
        </form>
      </Box>
    </Flex>
  )
}

export default Home;
