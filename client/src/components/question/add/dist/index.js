"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var create_question_usecase_1 = require("../../../@core/application/question/create-question.usecase");
var question_http_gateway_1 = require("../../../@core/infra/gateways/question.http.gateway");
var http_1 = require("../../../utils/http");
var list_1 = require("../list");
function AddQuestion() {
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(""), content = _b[0], setContent = _b[1];
    var _c = react_1.useState(""), answer = _c[0], setAnswer = _c[1];
    var _d = react_1.useState(""), error = _d[0], setError = _d[1];
    var _e = react_1.useState([]), questions = _e[0], setQuestions = _e[1];
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var input, gateway, useCase, question, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (title === "") {
                            return [2 /*return*/, setError("Please enter a title")];
                        }
                        if (content === "") {
                            return [2 /*return*/, setError("Please enter a content")];
                        }
                        if (answer === "") {
                            return [2 /*return*/, setError("Please enter a answer")];
                        }
                        input = {
                            title: title,
                            content: content,
                            answer: answer
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        gateway = new question_http_gateway_1.QuestionHttpGateway(http_1.http);
                        useCase = new create_question_usecase_1.CreateQuestionUseCase(gateway);
                        return [4 /*yield*/, useCase.execute(input.title, input.content, input.answer)];
                    case 2:
                        question = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        setError(error_1.response.data.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("input", { type: "text", onChange: function (event) { return setTitle(event.target.value); }, placeholder: 'T\u00EDtulo' }),
            React.createElement("input", { type: "text", onChange: function (event) { return setContent(event.target.value); }, placeholder: 'Pergunta' }),
            React.createElement("input", { type: "text", onChange: function (event) { return setAnswer(event.target.value); }, placeholder: 'Resposta' }),
            React.createElement("button", { type: "submit" }, "Cadastrar")),
        React.createElement("div", null,
            React.createElement("p", null, error)),
        React.createElement(list_1["default"], { listQuestion: questions })));
}
exports["default"] = AddQuestion;
