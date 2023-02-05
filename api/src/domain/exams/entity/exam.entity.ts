import { v4 as uuidv4 } from "uuid";
import ExamInterface from "./exam.interface";
import Teacher from "../../teachers/entity/teacher.entity";
import Question from "../../questions/entity/question.entity";

type ExamProps = {
    id?: string;
    title: string;
    teacher: Teacher;
    questions?: Question[];
};

export default class Exam implements ExamInterface {
    private _id: string;
    private _title: string;
    private _teacher: Teacher;
    private _questions: Question[];

    constructor(props: ExamProps) {
        this._id = props.id || uuidv4();
        this._title = props.title;
        this._teacher = props.teacher;
        this._questions = props.questions;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._teacher.id === null) {
            throw new Error("Teacher is required");
        }
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get teacher(): Teacher {
        return this._teacher;
    }

    get questions(): Question[] {
        return this._questions;
    }

    set questions(questions: Question[]) {
        this._questions = questions;
    }
}
