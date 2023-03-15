export type QuestionProps = {
    _id: string;
    _title: string;
    _content: string;
    _answer: string;
    _teacherId: string;
};

export class Question {
    constructor(public props: QuestionProps) {}

    get _id() {
        return this.props._id;
    }

    get _title() {
        return this.props._title;
    }

    get _content() {
        return this.props._content;
    }

    get _answer() {
        return this.props._answer;
    }

    get _teacherId() {
        return this.props._teacherId;
    }

    toJSON() {
        return {
            id: this._id,
            title: this._title,
            content: this._content,
            answer: this._answer,
            teacherId: this._teacherId,
        };
    }
}
