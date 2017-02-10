const db = require('../models/userModel');

function getUsers(req, res) {
  const users = [];
  const dbQuery = db.conn.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(404).send('Not Found');
  });
  dbQuery.on('row', row => users.push(row));
  dbQuery.on('end', () => res.status(200).send(users));
}

// function addUser(req, res) {
//   console.log(req);
// }

module.exports = { getUsers };
