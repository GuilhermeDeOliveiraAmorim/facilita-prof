"use strict";
exports.__esModule = true;
exports.http = void 0;
var axios_1 = require("axios");
exports.http = axios_1["default"].create({
    baseURL: "http://localhost:8000"
});
