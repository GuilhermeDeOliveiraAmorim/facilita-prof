import api from "./backend";

export type ITeacher = {
    id: string;
    name: string;
    username: string;
};

export interface InputCreateTeacherDto {
    name: string;
    username: string;
}

export interface OutputCreateTeacherDto {
    id: string;
    username: string;
}

const postTeacher = async (
    input: InputCreateTeacherDto
): Promise<OutputCreateTeacherDto> => {
    const url = `teacher/`;

    const res = await api.post(url, input);

    return res.data;
};

const getTeacher = async (input: string): Promise<ITeacher> => {
    const url = `teacher/find/${input}`;

    const res = await api.get(url);

    return res.data;
};

const getTeachers = async () => {
    const url = `teacher/find/all`;

    const res = await api.get(url);

    const data = res.data;

    return data;
};
