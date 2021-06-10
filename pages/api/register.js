import {
  createUser,
  createUserConnections,
  createUserLanguages,
} from "../../database/model";

export default async function handler(req, res) {
  let body = JSON.parse(req.body);
  let id = await createUser(body.name, body.email, body.gender);
  id = id.id;
  createUserConnections(id, body.connections);
  createUserLanguages(id, body.languages);
  res.redirect("/");
}
