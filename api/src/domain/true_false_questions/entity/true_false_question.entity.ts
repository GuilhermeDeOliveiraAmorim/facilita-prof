import TrueFalseQuestionInterface from "./true_false_question.interface";

export default class TrueFalseQuestion implements TrueFalseQuestionInterface {
    private _id: string;
    private _statement: string;
    private _year: number;
    private _author: string;
    private _level: number;
    private _answer: string;
}
