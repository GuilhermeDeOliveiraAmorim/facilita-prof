"use strict";
exports.__esModule = true;
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(props) {
        this.props = props;
    }
    Object.defineProperty(Question.prototype, "id", {
        get: function () {
            return this.props.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        get: function () {
            return this.props.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "content", {
        get: function () {
            return this.props.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answer", {
        get: function () {
            return this.props.answer;
        },
        enumerable: false,
        configurable: true
    });
    Question.prototype.toJSON = function () {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            answer: this.answer
        };
    };
    return Question;
}());
exports.Question = Question;
