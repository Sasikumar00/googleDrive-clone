import { User } from "../Entities/User";
import { IUserInfo } from "../../Types/User.Types";

export class UserRepository {
  constructor() {}

  async createUser(
    user: IUserInfo
  ): Promise<[success: boolean, data: Document | {}, message: string]> {
    const users = await User.find({
      username: user.username,
      email: user.email,
    });
    if (users.length > 0) {
      return [false, {}, "Username or Email Already Exists"];
    }
    const newUser = await User.create({
      ...user,
    });

    const createdUser = await User.findById(newUser._id).select(
      "-password -salt"
    );

    if (createdUser) {
      return [true, createdUser, "User Created Successfuly"];
    } else {
      return [false, {}, "User Not Created"];
    }
  }
}
