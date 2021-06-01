const db = require("./connection.js");

function createUser(name, email, password, gender) {
  const INSERT_USER = `
  INSERT INTO users (name, email, password, gender) VALUES ($1, $2, $3, $4)
  RETURNING id, name, email, gender
  `;
  return db
    .query(INSERT_USER, [name, email, password, gender])
    .then((result) => result.rows[0]);
}

function createSession(sid, dataObj) {
  const INSERT_SESSION = `INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid`;
  return db
    .query(INSERT_SESSION, [sid, dataObj])
    .then((result) => result.rows[0].sid);
}

function deleteSession(sid) {
  const DELETE_SESSION = `DELETE FROM sessions WHERE sid=$1`;
  return db
    .query(DELETE_SESSION, [sid]);
}

function getSession(sid) {
  const SELECT_SESSION = "SELECT data FROM sessions WHERE sid=$1";
  return db.query(SELECT_SESSION, [sid]).then((result) => {
    const singleResult = result.rows[0];
    return singleResult && singleResult.data;
  });
}

function getUser(email) {
  const selectUser = `
  SELECT id, name, email, password, gender FROM users WHERE email=$1;`;
  return db.query(selectUser, [email])
  .then((result) => {
    return result.rows[0];
  
  })
}

module.exports = {
  createUser,
  createSession,
  getSession,
  getUser,
  deleteSession
};