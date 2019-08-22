const SpendSave = require("../../db/models/SpendSave.js");

exports.create = (req, res) => {
  let { name, date_of, category, payment_id, subcat, amount } = req.body;
  if (
    [name, date_of, category, payment_id, subcat, amount].some(
      value => value === undefined
    )
  ) {
    res.sendStatus(401);
  } else {
    let newSpendSaveObj = {
      name,
      date_of,
      category,
      payment_id,
      subcat,
      amount
    };
    SpendSave.create(newSpendSaveObj)
      .then(insertId => {
        newSpendSaveObj.id = insertId;
        res.status(201).send(newSpendSaveObj);
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
    SpendSave.update(id, updateObject)
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
  let { startDate, endDate } = req.query;
  if (!(startDate && endDate)) {
    res.sendStatus(404);
    return;
  }
  SpendSave.retrieve(startDate, endDate)
    .then(rows => res.status(200).send(rows))
    .catch(err => {
      console.error(err);
      res.send(500);
    });
};
