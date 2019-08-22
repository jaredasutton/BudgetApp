let paymentAccountRouter = require("express").Router();
let paymentAccountController = require("../controllers/paymentAccountController.js");

paymentAccountRouter.get("/", paymentAccountController.retrieve);
paymentAccountRouter.post("/", paymentAccountController.create);

module.exports = paymentAccountRouter;
