export interface CreateQuestionFacadeInputDto {
    title: string;
    content: string;
    answer: string;
}

export interface CreateQuestionFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindQuestionFacadeInputDto {
    id: string;
}

export interface FindQuestionFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindAllQuestionsFacadeInputDto {}

export interface FindAllQuestionsFacadeOutputDto {
    teachers: {
        id: string;
        username: string;
    }[];
}

export default interface QuestionFacadeInterface {
    createQuestion(
        input: CreateQuestionFacadeInputDto
    ): Promise<CreateQuestionFacadeOutputDto>;
    // findTeacher(
    //   input: FindTeacherFacadeInputDto
    // ): Promise<FindTeacherFacadeOutputDto>;
    // findAllTeachers(
    //   input: FindAllTeachersFacadeInputDto
    // ): Promise<FindAllTeachersFacadeOutputDto>;
    // authenticateTeacher(
    //   input: AuthenticateTeacherFacadeInputDto
    // ): Promise<AuthenticateTeacherFacadeOutputDto>;
}
