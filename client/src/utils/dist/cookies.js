"use strict";
exports.__esModule = true;
exports.deleteCookie = exports.getCookie = exports.setCookie = void 0;
/*
 * General utils for managing cookies in Typescript.
 */
function setCookie(name, val) {
    var date = new Date();
    var value = val;
    // Set it expire in 7 days
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    // Set it
    document.cookie =
        name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}
exports.setCookie = setCookie;
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value === null || value === void 0 ? void 0 : value.split("; " + name + "=");
    if ((parts === null || parts === void 0 ? void 0 : parts.length) == 2) {
        return parts === null || parts === void 0 ? void 0 : parts.pop().split(";").shift();
    }
}
exports.getCookie = getCookie;
function deleteCookie(name) {
    var date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
    // Set it
    document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
}
exports.deleteCookie = deleteCookie;
