const PaymentAccount = require("../../db/models/PaymentAccount.js");

exports.create = (req, res) => {
  let { name, accType } = req.body;
  if ([name, accType].some(value => value === undefined)) {
    res.sendStatus(401);
  } else {
    let newPaymentAccountObj = { name, accType };
    PaymentAccount.create(newPaymentAccountObj)
      .then(insertId => {
        newPaymentAccountObj.id = insertId;
        res.status(201).send(newPaymentAccountObj);
      })
      .catch(err => {
        console.error(err);
        res.send(500);
      });
  }
};

exports.retrieve = (req, res) => {
  PaymentAccount.retrieve()
    .then(rows => res.status(200).send(rows))
    .catch(err => {
      console.error(err);
      res.send(500);
    });
};
