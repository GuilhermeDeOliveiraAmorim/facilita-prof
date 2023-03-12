import { Question } from "../../../@core/domain/entities/question";

interface IListQuestion {
    listQuestion: Question[];
}

export default function ListQuestion(props: IListQuestion) {
    const { listQuestion } = props;
    return (
        <ul>
            {listQuestion.map(question =>
                <li key={question.id}>
                    {question.content}
                </li>
            )}
        </ul>
    )
}
