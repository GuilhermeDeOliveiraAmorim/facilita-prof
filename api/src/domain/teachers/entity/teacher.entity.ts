import { v4 as uuidv4 } from "uuid";
import TeacherInterface from "./teacher.interface";

type TeacherProps = {
    id?: string;
    name: string;
    username: string;
};

export default class Teacher implements TeacherInterface {
    private _id: string;
    private _name: string;
    private _username: string;

    constructor(props: TeacherProps) {
        this._id = props.id || uuidv4();
        this._name = props.name;
        this._username = props.username;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._name.length === 0) {
            throw new Error("Name is required");
        }

        if (this._username.length === 0) {
            throw new Error("Username is required");
        }
    }

    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get name(): string {
        return this._name;
    }
}
