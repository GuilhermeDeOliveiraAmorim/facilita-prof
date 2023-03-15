import { Question } from "./question";
import { Teacher } from "./teacher";

export type ExamProps = {
    _id: string;
    _title: string;
    _teacher: Teacher;
    _questions: Question[];
};

export class Exam {
    constructor(public props: ExamProps) {}

    get _id() {
        return this.props._id;
    }

    get _title() {
        return this.props._title;
    }

    get _teacher() {
        return this.props._teacher;
    }

    get _questions() {
        return this.props._questions;
    }

    toJSON() {
        return {
            id: this._id,
            title: this._title,
            teacher: this._teacher,
            questions: this._questions,
        };
    }
}
