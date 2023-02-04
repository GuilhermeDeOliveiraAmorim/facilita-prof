export interface CreateTeacherFacadeInputDto {
    name: string;
    username: string;
}

export interface CreateTeacherFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindTeacherFacadeInputDto {
    id: string;
}

export interface FindTeacherFacadeOutputDto {
    id: string;
    username: string;
}

export interface FindAllTeachersFacadeInputDto {}

export interface FindAllTeachersFacadeOutputDto {
    teachers: {
        id: string;
        username: string;
    }[];
}

export default interface TeacherFacadeInterface {
    createTeacher(
        input: CreateTeacherFacadeInputDto
    ): Promise<CreateTeacherFacadeOutputDto>;
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
