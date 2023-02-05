import Question from "../../questions/entity/question.entity";
import Teacher from "../../teachers/entity/teacher.entity";

export interface CreateExamFacadeInputDto {
    title: string;
    teacher: Teacher;
    questions: Question[];
}

export interface CreateExamFacadeOutputDto {
    id: string;
    title: string;
    teacher: Teacher;
    questions: Question[];
}

export default interface ExamFacadeInterface {
    createExam(
        input: CreateExamFacadeInputDto
    ): Promise<CreateExamFacadeOutputDto>;
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
