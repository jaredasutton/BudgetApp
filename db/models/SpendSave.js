const db = require("..");

exports.create = ({ name, date_of, category, payment_id, subcat, amount }) => {
  let prepared = `INSERT INTO spend_saves (name, date_of, category, payment_id, subcat, amount) VALUES (?, ?, ?, ?, ?, ?)`;
  let values = [name, date_of, category, payment_id, subcat, amount];
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
  let prepared = `DELETE FROM spend_saves WHERE id=?`;
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

exports.retrieve = (startDate, endDate) => {
  let prepared = `SELECT * FROM spend_saves WHERE (date_of BETWEEN ? AND ?)`;
  let values = [startDate, endDate];
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
  let prepared = `UPDATE spend_saves SET ${prepAndVals.prep} WHERE id=?`;
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
