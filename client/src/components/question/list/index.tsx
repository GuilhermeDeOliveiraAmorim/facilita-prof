import { useState } from "react";
import { FindAllQuestionsUseCase } from "../../../@core/application/question/find-all-questions.usecase";
import { Question } from "../../../@core/domain/entities/question";
import { QuestionHttpGateway } from "../../../@core/infra/gateways/question.http.gateway";
import { http } from "../../../utils/http";

interface IListQuestion {
    listQuestion: Question[];
}

export default function ListQuestion() {
    const [questions, setQuestions] = useState<Question[]>([]);

    const gateway = new QuestionHttpGateway(http);
    const useCaseFindAll = new FindAllQuestionsUseCase(gateway);

    const result: any = async () => {
        return await useCaseFindAll.execute();
    }

    return <div>Lista</div>;
}

