const express = require("express");
const apiRouter = require("./api-router");
const apiMiddleware = require("./api-middleware");

const app = express();

applyMiddleware(app);

app.use("/api", apiRouter);

module.exports = app;
