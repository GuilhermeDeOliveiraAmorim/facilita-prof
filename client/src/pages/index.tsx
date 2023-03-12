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
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === "") {
      return setError("Please enter a name");
    }

    if (username === "") {
      return setError("Please enter a username");
    }

    const input = {
      name: name,
      username: username,
    };

    try {
      const gateway = new TeacherHttpGateway(http);
      const useCase = new CreateTeacherUseCase(gateway);
      await useCase.execute(input.name, input.username);
      return router.push({
        pathname: `/workspace`,
      });
    } catch (error: any) {
      setError(error.response.data.message);
    }
  }

  return (
    <div>
      <h1>Bem vindo ao Facilita Prof!</h1>
      <section>
        <h2>Criar Professor</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event) => setName(event.target.value)} placeholder='Name' />
          <input type="text" onChange={(event) => setUsername(event.target.value)} placeholder='Username' />
          <button type="submit">Criar</button>
        </form>
      </section>
      <div>
        <p>{error}</p>
      </div>
    </div>
  )
}

export default Home;
