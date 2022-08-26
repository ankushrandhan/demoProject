import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      designation: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
