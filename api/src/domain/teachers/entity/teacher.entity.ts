import { v4 as uuidv4 } from "uuid";
import TeacherInterface from "./teacher.interface";
import bcrypt from "bcryptjs";

type TeacherProps = {
  id?: string;
  name: string;
  username: string;
  password: string;
};

export default class Teacher implements TeacherInterface {
  private _id: string;
  private _name: string;
  private _username: string;
  private _password: string;

  constructor(props: TeacherProps) {
    this._id = props.id || uuidv4();
    this._name = props.name;
    this._username = props.username;
    this._password = props.password;
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

    if (this._password.length === 0) {
      throw new Error("Password is required");
    }
  }

  get id(): string {
    throw new Error("Method not implemented.");
  }

  get username(): string {
    throw new Error("Method not implemented.");
  }

  get name(): string {
    throw new Error("Method not implemented.");
  }

  get password(): string {
    return this._password;
  }

  encryptPassword() {
    this._password = bcrypt.hashSync(this._password);
  }

  verifyPassword(password: string): boolean {
    const verified = bcrypt.compareSync(password, this._password);
    return verified;
  }
}
