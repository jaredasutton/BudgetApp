const Budget = require("../db/models/Budget.js");

exports.create = (req, res) => {
  let { name, startDate, endDate, expIncome, user } = req.body;
  if (
    [name, startDate, endDate, expIncome].some(value => value === undefined)
  ) {
    res.sendStatus(401);
  } else {
    let newBudgetObj = { name, startDate, endDate, expIncome, user };
    Budget.create(newBudgetObj)
      .then(insertId => {
        newBudgetObj.id = insertId;
        res.status(201).send(newBudgetObj);
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
    Budget.update(id, updateObject)
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
  Budget.retrieve()
    .then(rows => res.status(200).send(rows))
    .catch(err => {
      console.error(err);
      res.send(500);
    });
};
