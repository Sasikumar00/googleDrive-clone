import mongoose from "mongoose";
import config from "../config";

const db_uri: string = String(config.dbUrl);

export default function connectDB() {
  mongoose
    .connect(db_uri, {
      maxPoolSize: 10,
    })
    .catch((err) => {
      console.log(err.message);
    });

  let connection = mongoose.connection;

  connection.on("open", () => {
    console.log("CONNECTED TO DATABASE ->");
  });
  return connection;
}
