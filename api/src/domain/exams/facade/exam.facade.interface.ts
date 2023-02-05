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
}
