"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(props) {
        this.props = props;
    }
    Object.defineProperty(Teacher.prototype, "id", {
        get: function () {
            return this.props.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "name", {
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "username", {
        get: function () {
            return this.props.username;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            username: this.username
        };
    };
    return Teacher;
}());
exports.Teacher = Teacher;
