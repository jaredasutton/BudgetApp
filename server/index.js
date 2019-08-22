const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const morgan = require("morgan");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(morgan("combined"));
app.use("/budget", routes.budgetRouter);
app.use("/budgetline", routes.budgetLineRouter);
app.use("/spendsave", routes.spendSaveRouter);
app.use("/paymentaccount", routes.paymentAccountRouter);

app.listen(3000, () => {
  console.log("connected to port 3000");
});
