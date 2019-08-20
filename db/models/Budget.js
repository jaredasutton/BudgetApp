const db = require("..");

//{name:"Weekly",startDate:new Date(Date.now()),endDate:(new Date(Dat
//  e.now() + 604800000)), expIncome: 1000}
exports.create = ({ name, startDate, endDate, expIncome, user }) => {
  let prepared = `INSERT INTO budgets (name, start_date, end_date, expected_income, user_id) VALUES (?, ?, ?, ?, ?)`;
  let values = [name, startDate, endDate, expIncome, user];
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
  let prepared = `DELETE FROM budgets WHERE id=?`;
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
  let prepared = `SELECT * FROM budgets`;
  return new Promise((resolve, reject) => {
    db.query(prepared, (err, results, fields) => {
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
  let prepared = `UPDATE budgets SET ${prepAndVals.prep} WHERE id=?`;
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
