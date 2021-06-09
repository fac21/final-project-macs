//import { response } from "express";
import {
  createUser,
  createUserConnections,
  createUserLanguages,
} from "../../database/model";

export default async function handler(req, res) {
  console.log("BODY", JSON.parse(req.body));
  let body = JSON.parse(req.body);
  let id = await createUser(body.name, body.email, body.gender);
  id = id.id;
  createUserConnections(id, body.connections);
  res.redirect("/");
}
