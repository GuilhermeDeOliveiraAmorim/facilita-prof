"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ListQuestionProvider = exports.ListQuestionContext = void 0;
var react_1 = require("react");
var defaultContext = {
    questions: [],
    addQuestion: function () { }
};
exports.ListQuestionContext = react_1.createContext(defaultContext);
exports.ListQuestionProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(null), questions = _b[0], setQuestions = _b[1];
    var addQuestion = react_1.useCallback(function (question) {
        setQuestions(function (questions) { return __spreadArrays(questions, [question]); });
    }, []);
    return React.createElement(exports.ListQuestionContext.Provider, { value: { questions: questions || [], addQuestion: addQuestion } }, children);
};
