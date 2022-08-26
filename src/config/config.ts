export const DataBaseConnection = {
    HOST: process.env.host,
    USER: process.env.DB_USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DATABASE,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };