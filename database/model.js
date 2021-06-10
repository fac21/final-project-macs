const db = require("./connection.js");
const crypto = require("crypto");

function createUser(name, email, gender) {
  const INSERT_USER = `INSERT INTO users (name, email, gender, image) VALUES ($1, $2, $3, './public/images/avator.png') RETURNING id`;
  return db.query(INSERT_USER, [name, email, gender]).then((result) => {
    return result.rows[0]; //{id: 5}
  });
  //check this returns an id
}

function createUserConnections(id, connections) {
  //passed a string with spaces between
  //turn into an array
  let connectionsArray = connections.split(" ");
  let booleans = ["women", "men", "nb", "anyone"].map((value) => {
    return connectionsArray.includes(value);
  });
  booleans.unshift(id);
  const INSERT_USER = `INSERT INTO connections (user_id, woman, man, non_binary, anyone) VALUES ($1, $2, $3, $4, $5)`;
  return db.query(INSERT_USER, booleans).then(console.log("booleans added"));
}

function createUserLanguages(id, languages) {
  //passed a string with spaces between
  //turn into an array
  //user_id, language, proficiency
  let languagesArray = languages.split(" ");
  let INSERT_LANGUAGE =
    "INSERT INTO languages (user_id, language, proficiency) VALUES ";
  languagesArray.forEach((lang, index) => {
    languagesArray.splice(index * 2, 0, id);
    INSERT_LANGUAGE += `($${index * 2 + 1}, $${index * 2 + 2}, 'fluent'),`;
  });
  INSERT_LANGUAGE = INSERT_LANGUAGE.slice(0, -1) + ";";
  return db.query(INSERT_LANGUAGE, languagesArray);
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
  const userGender = `connections.` + userInfo.gender;
  const id = userInfo.id;
  let genderPreferences = await getConnections(id).then((result) =>
    trueGenders(result)
  );

  let filteredProfiles = `select user_id from connections`;
  return db.query(filteredProfiles).then((result) => {
    return result.rows;
  });
}

function trueGenders(object) {
  let gendersString = "WHERE ";
  let gendersArray = [];
  for (let key in object) {
    if (object[key] === true) {
      gendersArray.push(key);
      gendersString += `users.gender = ${key} OR `;
    }
  }
  gendersString = gendersString.slice(0, -3);
  return gendersString;
}


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
  if (chatString == undefined) {
    chatString = await addChat(userOne, userTwo);
  }
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
  getUser,
  getProfiles,
  getChat,
  createUserConnections,
  createUserLanguages,
};
