import { configDotenv } from "dotenv";
configDotenv();

class Config {
  jwtSecret: string = process.env.JWT_SECRET
    ? String(process.env.JWT_SECRET)
    : "test-jwt-secret";

  dbUrl: string = process.env.DB_URL ? String(process.env.DB_URL) : "";
}

const configObj: Config = new Config();

export default new Config();
