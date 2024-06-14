import crypto, { hash } from "crypto";

export const hashPassword = (
  password: string
): { salt: string; hashedPassword: string } => {
  const salt = crypto.randomBytes(16).toString("hex");
  const interations = 10000;
  const keyLength = 64;
  const digest = "sha256";
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, interations, keyLength, digest)
    .toString("hex");

  return { salt, hashedPassword };
};
