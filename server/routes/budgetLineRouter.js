let { Router: budgetLineRouter } = require("express");
let budgetLineController = require("../controllers/budgetLineController.js");

budgetLineRouter.get("/", budgetLineController.retrieve);
budgetLineRouter.post("/", budgetLineController.create);

module.exports = budgetLineRouter;
