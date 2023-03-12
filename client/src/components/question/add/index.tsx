import { FormEvent, useState } from "react";
import { CreateQuestionUseCase } from "../../../@core/application/question/create-question.usecase";
import { Question } from "../../../@core/domain/entities/question";
import { QuestionHttpGateway } from "../../../@core/infra/gateways/question.http.gateway";
import { http } from "../../../utils/http";
import ListQuestion from "../list";

export default function AddQuestion() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (title === "") {
            return setError("Please enter a title");
        }

        if (content === "") {
            return setError("Please enter a content");
        }

        if (answer === "") {
            return setError("Please enter a answer");
        }

        const input = {
            title: title,
            content: content,
            answer: answer
        };

        try {
            const gateway = new QuestionHttpGateway(http);
            const useCase = new CreateQuestionUseCase(gateway);
            const question = await useCase.execute(input.title, input.content, input.answer);

        } catch (error: any) {
            setError(error.response.data.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => setTitle(event.target.value)} placeholder='Título' />
                <input type="text" onChange={(event) => setContent(event.target.value)} placeholder='Pergunta' />
                <input type="text" onChange={(event) => setAnswer(event.target.value)} placeholder='Resposta' />
                <button type="submit">Cadastrar</button>
            </form>
            <div>
                <p>{error}</p>
            </div>
            <ListQuestion listQuestion={questions} />
        </div>
    )
}
