import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const UserSessions = sequelize.define(
    'user_sessions',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        required:true
      },
      device_id: {
        type: Sequelize.STRING,
        required:true
      },
      device_type: {
        type: Sequelize.STRING,
        required:true
      },
      status: {
        type: Sequelize.STRING,
        required:true
      },
      created_at: {
        type: Sequelize.STRING,
      },
      updated_at: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return UserSessions;
};
