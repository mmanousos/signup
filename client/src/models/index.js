const Sequelize = require("sequelize");
const UserModel = require("./user");

console.log(process.env.DATABASE);

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: "postgres",
});

const User = UserModel(sequelize, Sequelize);
sequelize.sync().then(() => {
  console.log("Database and tables created!");
});

module.exports = {
  User,
};
