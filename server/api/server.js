const express = require("express");

const apiRouter = require("./api-router");
const middleware = require("./api-middleware");

const app = express();

middleware(app);

app.use("/api", apiRouter);

module.exports = app;
