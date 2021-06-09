import { response } from "express";
import { createUser } from "../../database/model";

export default function handler(req, res) {
  console.log(req.body);
  //createUser(req.body.name, req.body.email, req.body.gender);
  res.redirect("/");
}
