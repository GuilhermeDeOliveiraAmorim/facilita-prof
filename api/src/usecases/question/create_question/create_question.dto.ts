export interface InputCreateQuestionDto {
    title: string;
    content: string;
    answer: string;
    teacherId: string;
}

export interface OutputCreateQuestionDto {
    id: string;
    title: string;
    content: string;
    answer: string;
    teacherId: string;
}
