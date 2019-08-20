const db = require("..");

exports.create = ({ name, budgetId, category, expSpending }) => {
  let prepared = `INSERT INTO budget_lines (name, budget_id, category, expected_spending) VALUES (?, ?, ?, ?)`;
  let values = [name, budgetId, category, expSpending];
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

exports.delete = ({ id }) => {
  let prepared = `DELETE FROM budget_lines WHERE id=?`;
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

exports.retrieve = ({ budgetId }) => {
  let prepared = `SELECT * FROM budget_lines WHERE budget_id=?`;
  let values = [budgetId];
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

exports.update = (id, updateObject = {}) => {
  let prepAndVals = Object.keys(updateObject).reduce(
    (acc, key) => {
      return {
        prep: acc.prep + "," + key + "=?",
        vals: acc.vals.concat(updateObject[key])
      };
    },
    { prep: "id=?", vals: [id] }
  );
  let prepared = `UPDATE budget_lines SET ${prepAndVals.prep} WHERE id=?`;
  let values = prepAndVals.vals.concat(id);
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
