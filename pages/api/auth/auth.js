import bcrypt from "bcryptjs";
import { createSession, createUser, getUser } from "../database/model";
import crypto from "crypto";

// will export so cookie can be set in diff places
const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};
export async function signup(username, email, password) {
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const userInfo = await createUser(username, email, hashedPass);
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      userInfo,
    };
  } catch (error) {
    res.status(500).send();
  }
}

export async function verifyUser(email, password) {
  try {
    const userInfo = await getUser(email);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("password error");
    } else {
      return userInfo;
    }
  } catch (error) {
    console.error(error);
  }
}
export function saveUserSession(user) {
  const sid = crypto.randomBytes(18).toString("base64");
  return createSession(sid, { user });
}
