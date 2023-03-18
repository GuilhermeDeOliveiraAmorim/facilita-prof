export type TeacherProps = {
    _id: string;
    _name: string;
    _username: string;
};

export class Teacher {
    constructor(public props: TeacherProps) {}

    get _id() {
        return this.props._id;
    }

    get _name() {
        return this.props._name;
    }

    get _username() {
        return this.props._username;
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            username: this._username,
        };
    }
}
