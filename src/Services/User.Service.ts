import { Connection } from "mongoose";
import { IUserInfo } from "../Types/User.Types";
import { UserRepository } from "../Db/Repositories/User.Repository";
import isEmail from "validator/lib/isEmail";
import { hashPassword } from "../Utils/Hash.Utils";

class UserService {
  UserRepository: UserRepository;
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async registerUser(
    fullName: string,
    username: string,
    email: string,
    password: string
  ): Promise<
    [status: "error" | "success", data: Document | {}, message: string]
  > {
    if (!isEmail(email)) {
      return ["error", {}, "Invalid Email Address"];
    }
    const { salt, hashedPassword } = hashPassword(password);
    const user: IUserInfo = {
      fullName,
      username,
      email,
      password: hashedPassword,
      saltKey: salt,
    };
    const [success, newUser, message] = await this.UserRepository.createUser(
      user
    );
    if (success) {
      return ["success", newUser, message];
    } else {
      return ["error", {}, message];
    }
  }
}

export default new UserService();
