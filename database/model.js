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
  SELECT * FROM users WHERE email=($1);`;
  return db.query(selectUser, [email]).then((result) => {
    return result.rows[0];
  });
}

async function getProfiles(email) {
  const userInfo = await getUser(email);
  //console.log(`connections. ` + userInfo.gender);
  const userGender = `connections.` + userInfo.gender;
  const id = userInfo.id;
  let genderPreferences = await getConnections(id).then((result) =>
    trueGenders(result)
  );
  console.log("GENDER PREFERENCES", genderPreferences);
  // const filteredProfiles = `select users.id, users.name, users.email, users.gender, users.image
  // from users inner join connections
  // on users.id = connections.user_id
  // ($1) and ($2) = true or connections.anyone = true`;

  //(trueGenders(email).indexof(gender) || trueGenders(email).indexof(anyone))
  let filteredProfiles = `select user_id from connections`;
  //const selectProfiles = `SELECT name, gender, image FROM users`;
  return db.query(filteredProfiles).then((result) => {
    console.log(result);
    return result.rows;
  });
}

function trueGenders(object) {
  //console.log(object);
  let gendersString = "WHERE ";
  let gendersArray = [];
  for (let key in object) {
    if (object[key] === true) {
      gendersArray.push(key);
      gendersString += `users.gender = ${key} OR `;
      //console.log(gendersString);
    }
  }
  gendersString = gendersString.slice(0, -3);
  //console.log("GENDERS STRING", gendersString);
  return gendersString;
}

// function getUserId(sessionEmail) {
//   const userId = `SELECT user_id FROM users WHERE email=($1) )`;
//   console.log(userId);
//   return db.query(userId, [sessionEmail]).then((result) => result.rows[0]);
// }

/**************** Maryam is writing *************** *
async function getProfiles(email) {
  const userInfo = await getUser(email);
  const id = userInfo.id;
  let genderPreferences = await getConnections(id);
  genderPrefences = await trueGenders(genderPreferences);
  const preferredUsers = `SELECT * FROM users WHERE id IN (..);`;
  return db
    .query(filteredProfiles, [genderPreferences, userGender])
    .then((result) => {
      console.log(result);
      return result.rows;
    });
}

function trueGenders(object) {
  let gendersArray = [];
  for (let key in object) {
    if (object[key] === true) {
      gendersArray.push(key);
    }
  }
  return gendersArray;
}

/******************************** */

function getConnections(id) {
  const preferredGenders = `SELECT * FROM connections WHERE user_id=($1)`;
  return db.query(preferredGenders, [id]).then((result) => result.rows[0]);
}

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
  // getUserId,
};
