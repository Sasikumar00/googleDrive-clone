import jwt from "jsonwebtoken";
import { jwtPayloadType } from "../Types/User.Types";
import config from "../config";

export function generateToken(payload: jwtPayloadType) {
  const token = jwt.sign(payload, config.jwtSecret);
  return token;
}

export function validateToken(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return [true, decoded];
  } catch (err) {
    console.log(err);
    return [false, {}];
  }
}
