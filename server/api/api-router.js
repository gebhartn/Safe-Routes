const router = require("express").Router();

const authRouter = require("./routers/auth-router");

router.use("/auth", authRouter);

router.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
