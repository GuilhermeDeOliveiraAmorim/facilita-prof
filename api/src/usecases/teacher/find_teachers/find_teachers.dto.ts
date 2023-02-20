import Teacher from "../../../domain/teachers/entity/teacher.entity";

export interface InputFindTeachersDto {}

export interface OutputFindTeachersDto {
    teachers: Teacher[];
}
