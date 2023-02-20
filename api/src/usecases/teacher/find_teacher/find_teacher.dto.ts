import Teacher from "../../../domain/teachers/entity/teacher.entity";

export interface InputFindTeacherDto {
    id: string;
}

export interface OutputFindTeacherDto {
    teacher: Teacher;
}
