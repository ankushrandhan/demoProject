import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const AdminSessions = sequelize.define(
    'admin_sessions',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
    },
    {
      timestamps: false,
    }
  );
  return AdminSessions;
};
