const db = require("..");

exports.create = ({ name, startDate, endDate, expIncome, user }) => {
  let prepared = `INSERT INTO budgets (name, start_date, end_date, expected_income, user) VALUES (?, ?, ?, ?, ?)`;
  let values = [name, startDate, endDate, expIncome, user];
  return Promise((resolve, reject) => {
    db.query(prepared, values, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

exports.delete = ({ id }) => {
  let prepared = `DELETE FROM budgets WHERE id=?`;
  let values = [id];
  return Promise((resolve, reject) => {
    db.query(prepared, values, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
