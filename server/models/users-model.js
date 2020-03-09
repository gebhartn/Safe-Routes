const db = require("../data/db-config");

const findOne = id => {
  return db("users")
    .where({ id })
    .first();
};

const findMany = where => {
  return db("users").where(where);
};

const findAll = () => {
  return db("users")
    .select("id", "username")
    .orderBy("id", "asc");
};

const createOne = async user => {
  const [id] = await db("users").insert(user, "id");
  return findOne(id);
};

const createMany = async users => {
  const result = await users.map(user => {
    db("users").insert(user, "id");
  });

  return users.length === result.length ? 1 : 0;
};

module.exports = {
  findOne,
  findMany,
  findAll,
  createOne,
  createMany
};
