const db = require("./connection.js");
const crypto = require("crypto");

function createUser(name, email, gender) {
  const INSERT_USER = `INSERT INTO users (name, email, gender) VALUES ($1, $2, $3)`;
  return db
    .query(INSERT_USER, [name, email, gender])
    .then((result) => console.log(result));
}

function createSession(sid, dataObj) {
  const INSERT_SESSION = `INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid`;
  return db
    .query(INSERT_SESSION, [sid, dataObj])
    .then((result) => result.rows[0].sid);
}

function deleteSession(sid) {
  const DELETE_SESSION = `DELETE FROM sessions WHERE sid=($1)`;
  return db.query(DELETE_SESSION, [sid]);
}

function getSession(sid) {
  const SELECT_SESSION = "SELECT data FROM sessions WHERE sid=($1)";
  return db.query(SELECT_SESSION, [sid]).then((result) => {
    const singleResult = result.rows[0];
    return singleResult && singleResult.data;
  });
}

function getUser(email) {
  const selectUser = `
  SELECT id, name, email, password, gender FROM users WHERE email=($1);`;
  return db.query(selectUser, [email]).then((result) => {
    return result.rows[0];
  });
}

function getProfiles() {
  const selectProfiles = `SELECT name, gender, image FROM users`;
  return db.query(selectProfiles).then((result) => {
    return result.rows;
  });
}

function getUserId(sessionEmail) {
  const userId = `SELECT id FROM users WHERE email=($1) )`;
  console.log(userId);
  return db.query(userId, [sessionEmail]).then((result) => result.rows[0]);
}

// function getPreferredGender(){
//   const PreferredGender = `SELECT .... FROM connections WHERE (SELECT email FROM users WHERE  )`;
//   return db.query(SELECT_PRODUCT, [id]).then((result) => result.rows[0]);
// }

async function getChat([userOne, userTwo]) {
  //find those two users
  userOne = await findUser(userOne);
  userOne = userOne.id;
  userTwo = await findUser(userTwo);
  userTwo = userTwo.id;
  const chat = `
  SELECT hash_string FROM chats WHERE user_one=($1) AND user_two=($2)`;
  let chatString = await db
    .query(chat, [userOne, userTwo])
    .then((result) => result.rows[0]);
  //console.log("pre-existing user", chatString);
  if (chatString == undefined) {
    chatString = await addChat(userOne, userTwo);
  }
  //console.log("new user or matching", chatString);
  return chatString;
}

function addChat(userOne, userTwo) {
  const chatString = crypto.randomBytes(10).toString("hex");
  const INSERT_CHAT = `INSERT INTO chats (hash_string, user_one, user_two) VALUES ($1, $2, $3)`;
  return db.query(INSERT_CHAT, [chatString, userOne, userTwo]).then(() => {
    return {
      hash_string: chatString,
    };
  });
}

function findUser(user) {
  const SELECT_USER = "SELECT id FROM users WHERE name=($1)";
  return db.query(SELECT_USER, [user]).then((result) => result.rows[0]);
}

module.exports = {
  createUser,
  createSession,
  getSession,
  getUser,
  deleteSession,
  getProfiles,
  getChat,
  getUserId,
};
