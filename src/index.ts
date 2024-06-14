import express from "express";
import cors from "cors";
import router from "./router";
import connectDB from "./Db/db";

let app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/v1", router);

app.listen(8080, () => {
  console.log("SERVER STARTED ->");
});
