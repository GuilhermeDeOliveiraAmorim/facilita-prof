import api from "./backend";

export type IQuestion = {
    id: string;
    title: string;
    answer: string;
    content: string;
};

export interface InputCreateQuestionDto {
    title: string;
    answer: string;
    content: string;
}

export interface OutputCreateQuestionDto {
    id: string;
    title: string;
    answer: string;
    content: string;
}

const postQuestion = async (
    input: InputCreateQuestionDto
): Promise<OutputCreateQuestionDto> => {
    const url = `question/`;

    const res = await api.post(url, input);

    return res.data;
};

const getQuestion = async (input: string): Promise<IQuestion> => {
    const url = `question/find/${input}`;

    const res = await api.get(url);

    return res.data;
};

const getQuestions = async () => {
    const url = `question/find/all`;

    const res = await api.get(url);

    const data = res.data;

    return data;
};
