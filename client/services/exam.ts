import api from "./backend";
import { IQuestion } from "./questions";
import { ITeacher } from "./teachers";

type IExam = {
    id: string;
    title: string;
    teacher: ITeacher;
    questions: IQuestion[];
};

export interface InputCreateExamDto {
    title: string;
    teacher_id: string;
    questions_ids: string[];
}

export interface OutputCreateExamDto {
    id: string;
    title: string;
    teacher: ITeacher;
    questions: IQuestion[];
}

const postExam = async (
    input: InputCreateExamDto
): Promise<OutputCreateExamDto> => {
    const url = `exam/`;

    const res = await api.post(url, input);

    return res.data;
};

const getExam = async (input: string): Promise<IExam> => {
    const url = `exam/find/${input}`;

    const res = await api.get(url);

    return res.data;
};
