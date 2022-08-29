import { Model, DataTypes, Sequelize, INTEGER } from "sequelize";

module.exports = (sequelize: any, Sequelize: any) => {
  const AdminSessions = sequelize.define(
    'admin_sessions',
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
      device_token: {
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
  return AdminSessions;
};
