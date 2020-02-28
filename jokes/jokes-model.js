const db = require("../database/dbConfig");

module.exports = {
  addUser,
  findBy
};

function addUser(user) {
  return db("users")
    .insert(user)
    .select("id", "username", "password");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username", "password");
}
