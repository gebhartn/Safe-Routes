const router = require("express").Router();
const bcrypt = require("bcryptjs");

const getJwt = require("../utils/auth-utils");

const Users = require("../models/users-model");

router.get("/", (req, res) => {
  res.status(200).json({ auth: "up" });
});

router.post("/register", async (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  const { id, email } = await Users.createOne(user);
  res.status(200).json({ id, email });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findMany({ email }).first();
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = getJwt(user.id);

    res.status(200).json({
      id: user.id,
      token
    });
  } else {
    res.status(401).json({ message: "No dice" });
  }
});

module.exports = router;
