const Sequelize = require("sequelize");
const UserModel = require("./user");

console.log(process.env.DATABASE);

const sequelize = new Sequelize("database", "user", "password", {
  dialect: "postgres",
});

const User = UserModel(sequelize, Sequelize);

module.exports = {
  User,
  sequelize,
};
