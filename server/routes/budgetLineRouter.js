let budgetLineRouter = require("express").Router();
let budgetLineController = require("../controllers/budgetLineController.js");

budgetLineRouter.get("/:budgetId", budgetLineController.retrieve);
budgetLineRouter.post("/", budgetLineController.create);

module.exports = budgetLineRouter;
