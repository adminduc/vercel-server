const express = require("express");
const TokenRouter = express();
const getAll = (req, res) => {
  return res.status(200).json({
    message: "API TOKEN GET ALL",
  });
};
TokenRouter.get("/", getAll);

module.exports = TokenRouter;
