import { Request, Response } from "express";
import userService from "../Services/User.Service";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const fullName: string = req.body.fullName ? String(req.body.fullName) : "";
    const username: string = req.body.username ? String(req.body.username) : "";
    const email: string = req.body.email ? String(req.body.email) : "";
    const password: string = req.body.password ? String(req.body.password) : "";
    if (
      fullName.length <= 0 ||
      username.length <= 0 ||
      email.length <= 0 ||
      password.length <= 0
    ) {
      return res.status(406).send({
        status: "error",
        message: "Required fields not provided",
      });
    }
    const [status, data, message] = await userService.registerUser(
      fullName,
      username,
      email,
      password
    );
    if (status === "success") {
      return res.send({
        status: status,
        message: message,
        data: data,
      });
    } else {
      return res.send({
        status: status,
        message: message,
        data: data,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status: "error",
      message: "server error",
    });
  }
};
