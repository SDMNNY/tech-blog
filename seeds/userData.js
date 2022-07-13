const { User } = require("../models");

const userData = [
  {
    name: "User 1",
    email: "testemail1@gmail.com",
    password: "seedpassword1",
  },
  {
    name: "User 2",
    email: "testemail2@gmail.com",
    password: "seedpassword2",
  },
  {
    name: "User 3",
    email: "testemail3@gmail.com",
    password: "seedpassword3",
  },
  {
    name: "User 4",
    email: "testemail4@gmail.com",
    password: "seedpassword4",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;