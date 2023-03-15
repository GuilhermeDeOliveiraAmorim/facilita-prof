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
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var create_question_usecase_1 = require("../../../@core/application/question/create-question.usecase");
var question_http_gateway_1 = require("../../../@core/infra/gateways/question.http.gateway");
var http_1 = require("../../../utils/http");
function AddQuestion(props) {
    var teacherIdProps = props.teacherIdProps;
    var _a = react_2.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_2.useState(""), content = _b[0], setContent = _b[1];
    var _c = react_2.useState(""), answer = _c[0], setAnswer = _c[1];
    var _d = react_2.useState(""), teacherId = _d[0], setTeacherId = _d[1];
    var toast = react_1.useToast();
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var input, gateway, useCaseCreate, question, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (title === "") {
                            toast({
                                title: 'Error',
                                description: "Please enter a title",
                                status: 'error',
                                duration: 10000,
                                isClosable: true
                            });
                            return [2 /*return*/];
                        }
                        if (content === "") {
                            toast({
                                title: 'Error',
                                description: "Please enter a content",
                                status: 'error',
                                duration: 10000,
                                isClosable: true
                            });
                            return [2 /*return*/];
                        }
                        if (answer === "") {
                            toast({
                                title: 'Error',
                                description: "Please enter a answer",
                                status: 'error',
                                duration: 10000,
                                isClosable: true
                            });
                            return [2 /*return*/];
                        }
                        setTeacherId(teacherIdProps);
                        input = {
                            title: title,
                            content: content,
                            answer: answer,
                            teacherId: teacherId
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        gateway = new question_http_gateway_1.QuestionHttpGateway(http_1.http);
                        useCaseCreate = new create_question_usecase_1.CreateQuestionUseCase(gateway);
                        return [4 /*yield*/, useCaseCreate.execute(input.title, input.content, input.answer, input.teacherId)];
                    case 2:
                        question = _a.sent();
                        toast({
                            title: 'Success',
                            description: "Question " + content + " created successfully",
                            status: 'success',
                            duration: 4000,
                            isClosable: true
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        toast({
                            title: 'Error',
                            description: error_1.response.data.message,
                            status: 'error',
                            duration: 10000,
                            isClosable: true
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement(react_1.FormControl, null,
                React.createElement(react_1.FormLabel, null, "T\u00EDtulo"),
                React.createElement(react_1.Input, { type: 'text', onChange: function (event) { return setTitle(event.target.value); } })),
            React.createElement(react_1.FormControl, null,
                React.createElement(react_1.FormLabel, null, "Pergunta"),
                React.createElement(react_1.Input, { type: 'text', onChange: function (event) { return setContent(event.target.value); } })),
            React.createElement(react_1.FormControl, null,
                React.createElement(react_1.FormLabel, null, "Resposta"),
                React.createElement(react_1.Input, { type: 'text', onChange: function (event) { return setAnswer(event.target.value); } })),
            React.createElement(react_1.Button, { mt: 4, type: 'submit' }, "Cadastrar"))));
}
exports["default"] = AddQuestion;
