const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const budgetRouter = require("./routes.js");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/budget");

app.listen(3000, () => {
  console.log("connected to port 3000");
});
