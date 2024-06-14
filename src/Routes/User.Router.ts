import { Router } from "express";
import { registerUserController } from "../Controllers/User.Controller";

const router = Router();

router.post("/register", registerUserController);

export default router;
