import { v4 as uuidv4 } from "uuid";
import QuestionInterface from "./question.interface";

type QuestionProps = {
    id?: string;
    title: string;
    content: string;
    answer: string;
    teacherId: string;
};

export default class Question implements QuestionInterface {
    private _id: string;
    private _title: string;
    private _content: string;
    private _answer: string;
    private _teacherId: string;

    constructor(props: QuestionProps) {
        this._id = props.id || uuidv4();
        this._title = props.title;
        this._content = props.content;
        this._answer = props.answer;
        this._teacherId = props.teacherId;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._title.length === 0) {
            throw new Error("Title is required");
        }

        if (this._content.length === 0) {
            throw new Error("Content is required");
        }

        if (this._answer.length === 0) {
            throw new Error("Answer is required");
        }

        if (this._teacherId.length === 0) {
            throw new Error("Teacher is required");
        }
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get answer(): string {
        return this._answer;
    }

    get teacherId(): string {
        return this._teacherId;
    }
}
