const db = require("..");

exports.create = ({ name, budgetId, category, expSpending }) => {
  let prepared = `INSERT INTO budget_lines (name, budget_id, category, expected_spending) VALUES (?, ?, ?, ?)`;
  let values = [name, budgetId, category, expSpending];
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
  let prepared = `DELETE FROM budget_lines WHERE id=?`;
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
