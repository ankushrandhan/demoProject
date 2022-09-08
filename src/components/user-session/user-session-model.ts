import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const UserSessions = sequelize.define(
    'user_sessions',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        required:true
      },
      device_id: {
        type: DataTypes.STRING,
        required:true
      },
      device_token: {
        type: DataTypes.STRING,
        required:true
      },
      status: {
        type: DataTypes.STRING,
        required:true
      },
    },
    {
      timestamps: false,
    }
  );
  return UserSessions;
};
