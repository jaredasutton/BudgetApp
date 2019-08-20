let budgetRouter = require("express").Router();
let budgetController = require("../controllers/budgetController.js");

budgetRouter.get("/", budgetController.retrieve);
budgetRouter.post("/", budgetController.create);

module.exports = budgetRouter;
