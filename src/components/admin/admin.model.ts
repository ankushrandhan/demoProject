import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const Admin = sequelize.define(
    'admin',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Admin;
};
