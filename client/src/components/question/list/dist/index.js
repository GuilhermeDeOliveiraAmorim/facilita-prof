"use strict";
exports.__esModule = true;
function ListQuestion(props) {
    var listQuestion = props.listQuestion;
    return (React.createElement("ul", null, listQuestion.map(function (question) {
        return React.createElement("li", { key: question.id }, question.content);
    })));
}
exports["default"] = ListQuestion;
