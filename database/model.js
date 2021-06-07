const db = require("./connection.js");

function createUser(name, email, password, gender, image) {
  const INSERT_USER = `
  INSERT INTO users (name, email, password, gender, image) VALUES ($1, $2, $3, $4, $5)
  RETURNING id, name, email, gender, image
  `;
  return db
    .query(INSERT_USER, [name, email, password, gender, image])
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
  return db.query(DELETE_SESSION, [sid]);
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
  return db.query(selectUser, [email]).then((result) => {
    return result.rows[0];
  });
}

function getProfiles() {
  const selectProfiles = `SELECT name, gender FROM users`;
  return db.query(selectProfiles).then((result) => {
    return result.rows;
  });
}

function getChat(userOne, userTwo) {
  const chat = `
  SELECT hash_string FROM chats WHERE user_one=$1 AND user_two=$2`;
  return db.query(chat, [userOne, userTwo]).then((result) => {
    console.log(result.rows);
    return result.rows[0];
  });
}

module.exports = {
  createUser,
  createSession,
  getSession,
  getUser,
  deleteSession,
  getProfiles,
  getChat,
};
