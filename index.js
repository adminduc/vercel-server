const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Routes = require("./routes");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use("/", Routes);
app.use("**", (req, res, next) => {
  return res.status(200).json({
    message: "API Not Found",
  });
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});

module.exports = app;
