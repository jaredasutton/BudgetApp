const BudgetLine = require("../db/models/BudgetLine.js");

exports.create = (req, res) => {
  let { name, budgetId, category, expSpending } = req.body;
  if (
    [name, budgetId, category, expSpending].some(value => value === undefined)
  ) {
    res.sendStatus(401);
  } else {
    let newBudgetLineObj = { name, budgetId, category, expSpending };
    BudgetLine.create(newBudgetLineObj)
      .then(insertId => {
        newBudgetLineObj.id = insertId;
        res.status(201).send(newBudgetLineObj);
      })
      .catch(err => {
        console.error(err);
        res.send(500);
      });
  }
};

exports.update = (req, res) => {
  let { updateObject, id } = req.body;
  if (updateObject === undefined || id === undefined) {
    res.sendStatus(401);
  } else {
    BudgetLine.update(id, updateObject)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.error(err);
        res.send(500);
      });
  }
};

exports.retrieve = (req, res) => {
  let { budgetId } = req.body;
  BudgetLine.retrieve(budgetId)
    .then(rows => res.status(200).send(rows))
    .catch(err => {
      console.error(err);
      res.send(500);
    });
};
