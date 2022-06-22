const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "leonardotrapani-shop",
  "root",
  "miPiaceComputer37",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
