let spendSaveRouter = require("express").Router();
let spendSaveController = require("../controllers/spendSaveController.js");

spendSaveRouter.get("/", spendSaveController.retrieve);
spendSaveRouter.post("/", spendSaveController.create);

module.exports = spendSaveRouter;
