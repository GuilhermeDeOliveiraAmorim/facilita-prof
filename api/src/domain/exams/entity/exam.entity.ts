import { v4 as uuidv4 } from "uuid";
import Question from "../../questions/entity/question.entity";
import Teacher from "../../teachers/entity/teacher.entity";
import ExamInterface from "./exam.interface";

type ExamProps = {
    id?: string;
    title: string;
    createdAt?: string;
    teacher: Teacher;
    questions?: Question[];
};

export default class Exam implements ExamInterface {
    private _id: string;
    private _title: string;
    private _createdAt: string;
    private _teacher: Teacher;
    private _questions: Question[];

    constructor(props: ExamProps) {
        this._id = props.id || uuidv4();
        this._title = props.title;
        this._createdAt = props.createdAt;
        this._teacher = props.teacher;
        this._questions = props.questions;
    }

    validate() {
        if (this._title.length === 0) {
            throw new Error("Title is required");
        }

        if (this._teacher.id === null) {
            throw new Error("Teacher is required");
        }

        if (!this._questions) {
            throw new Error("Questions is required");
        }
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get teacher(): Teacher {
        return this._teacher;
    }

    get questions(): Question[] {
        return this._questions;
    }
}
