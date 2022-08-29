import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";
/**
 * Interface for Admin
 * @interface
 */
export interface IAdmin {
  id?: String;
  name: String;
  email: String;
  password: String;
}
module.exports = (sequelize: any, Sequelize: any) => {
  const Admin = sequelize.define(
    "admin",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Admin;
};
