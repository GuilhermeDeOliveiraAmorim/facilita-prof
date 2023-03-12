export type QuestionProps = {
    id: string;
    title: string;
    content: string;
    answer: string;
};

export class Question {
    constructor(public props: QuestionProps) {}

    get id() {
        return this.props.id;
    }

    get title() {
        return this.props.title;
    }

    get content() {
        return this.props.content;
    }

    get answer() {
        return this.props.answer;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            answer: this.answer,
        };
    }
}
