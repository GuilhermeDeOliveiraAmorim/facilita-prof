export type TeacherProps = {
    id: string;
    name: string;
    username: string;
};

export class Teacher {
    constructor(public props: TeacherProps) {}

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get username() {
        return this.props.username;
    }
}
