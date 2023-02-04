import { Model, Table, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "teachers",
  timestamps: false,
})
export default class TeacherModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  username: string;

  @Column({ allowNull: false })
  password: string;
}
