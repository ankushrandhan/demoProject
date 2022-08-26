import {DataBaseConnection} from "../config/config";
import {Sequelize} from 'sequelize'
const sequelize = new Sequelize(DataBaseConnection.DB as string, DataBaseConnection.USER as string, DataBaseConnection.PASSWORD as string, {
  host: DataBaseConnection.HOST,
  dialect: 'postgres',
  pool: {
    max: DataBaseConnection.pool.max,
    min: DataBaseConnection.pool.min,
    acquire: DataBaseConnection.pool.acquire,
    idle: DataBaseConnection.pool.idle
  }
});
const db:any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.admin = require("../components/admin/admin.model")(sequelize, Sequelize);
db.admin_sessions = require("../components/admin-session/admin-session-model")(sequelize, Sequelize);
db.user_sessions = require("../components/user-session/user-session-model")(sequelize, Sequelize);
db.users = require("../components/users/user.model")(sequelize, Sequelize);
module.exports = db;
