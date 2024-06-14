import { Router } from "express";
import userRouter from "./Routes/User.Router";

let router = Router();

router.use("/user", userRouter);

export default router;
