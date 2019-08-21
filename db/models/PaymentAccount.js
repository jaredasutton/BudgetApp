const db = require("..");

exports.create = ({ name, accType }) => {
  let prepared = `INSERT INTO payment_accounts (name, acc_type) VALUES (?, ?)`;
  let values = [name, accType];
  return new Promise((resolve, reject) => {
    db.query(prepared, values, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.delete = ({ id }) => {
  let prepared = `DELETE FROM payment_accounts WHERE id=?`;
  let values = [id];
  return new Promise((resolve, reject) => {
    db.query(prepared, values, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

exports.retrieve = () => {
  let prepared = `SELECT * FROM payment_accounts`; // WHERE user_id=?`;
  //   let values = [budgetId];
  //   console.log(prepared);
  return new Promise((resolve, reject) => {
    db.query(prepared, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};
