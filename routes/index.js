const express = require("express");
const TokenRouter = require("./token");
const Routes = express();
Routes.use("/api/token", TokenRouter);

module.exports = Routes;
